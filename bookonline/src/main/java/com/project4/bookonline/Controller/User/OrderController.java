package com.project4.bookonline.Controller.User;


import com.project4.bookonline.Service.*;
import com.project4.bookonline.dto.OrderDetailDTO;
import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Orders;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.dto.OrderDTO;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.OrderDetail;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Voucher;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class OrderController {
    OrderDTO orderDTO;
    OrderDetailDTO orderDetailDTO;
    String msg;
    String respone;
    Message_Respones<OrderDTO> setMessagess;
    Orders order;
    List<Orders> orders;
    @Autowired
    OrderService orderService;
    @Autowired
    UserService userServide;
    @Autowired
    OrderDetailService orderDetailService;

    @Autowired
    VoucherService voucherService;

    @Autowired
    BooksService bookService;

    Message_Respones<Orders> setMessage = new Message_Respones<Orders>();

    @RequestMapping(value = "/orders/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> findAll() {
        return getMessage_responesResponseEntity();
    }


    private ResponseEntity<Message_Respones<Orders>> getMessage_responesResponseEntity() {
        setMessage = new Message_Respones<Orders>();
        orders = new ArrayList<>();
        orders = orderService.listAll();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(orders);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/orders/findAll/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> findAllByCusId(@PathVariable String id) {
        setMessage = new Message_Respones<Orders>();
        orders = new ArrayList<>();
        orders = orderService.loadDataByUserId(id);
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(orders);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
    }

    public OrderDTO getOrderDTO(Orders orders) {
        orderDTO = new OrderDTO();
        return orderDTO;
    }

    @RequestMapping(value = "/orders/create/{type}", method = RequestMethod.POST)
    public ResponseEntity<Message_Respones<OrderDTO>> Create(@RequestBody OrderDTO orderDTO,@PathVariable String type) {
        setMessagess = new Message_Respones<OrderDTO>();
        //--- Set Date time --- 
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        // insert pdetail
        Orders order = new Orders();
        Users users = new Users();
        users.setUserid(orderDTO.getUserid());
        order.setUserid(users);
        if (!orderDTO.getOrdervoucher().equals("")) {
            Voucher vcher = new Voucher();
            vcher.setVoucherid(orderDTO.getOrdervoucher());
            order.setOrdervoucher(vcher);
        }
        order.setOrderaddress(orderDTO.getOrderaddress());
        order.setOrdercity(orderDTO.getOrdercity());
        order.setOrdernote(orderDTO.getOrdernote());
        order.setOrderdistrict(orderDTO.getOrderdistrict());
        order.setOrdercreateddate(dtf.format(now));
        if(type.contains("offline")){
            order.setOrderstatus(2);
        }else if(type.contains("online")){
            order.setOrderstatus(1);
        }
        Orders crep = orderService.Create(order);
        // end insert//
        // insert book//
        //Authors authors = new Authors();
        for (OrderDetailDTO orderdetail : orderDTO.getOrderDetailDto()) {
            OrderDetail orderDetail = new OrderDetail();
            Books b = new Books();
            b.setBooksid(orderdetail.getBookid());
            orderDetail.setBookid(b);
            orderDetail.setTotal(orderdetail.getTotal());
            orderDetail.setOrderid(crep);
            orderDetail.setQuantity(orderdetail.getQuantity());
            orderDetail = orderDetailService.Create(orderDetail);

            b = bookService.findOne(orderDetail.getBookid().getBooksid());
            b.setAmounts(b.getAmounts() - orderdetail.getQuantity());
            bookService.Create(b);
        }
        if(crep.getOrdervoucher() != null){
            Voucher voucher = voucherService.findById(crep.getOrdervoucher().getVoucherid());
            int lastused = voucher.getVoucherused() - 1;
            voucher.setVoucherused(lastused);
            voucherService.Create(voucher);
        }
        // end insert//
        msg = "Success";
        setMessagess.setMessage(msg);
        setMessagess.setCode(200);
        return new ResponseEntity<Message_Respones<OrderDTO>>(setMessagess, HttpStatus.OK);
    }


}
