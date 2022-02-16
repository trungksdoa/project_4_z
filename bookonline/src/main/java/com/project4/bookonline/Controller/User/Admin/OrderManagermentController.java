package com.project4.bookonline.Controller.User.Admin;


import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.OrderDetail;
import com.project4.bookonline.Model.Orders;
import com.project4.bookonline.Service.OrderDetailService;
import com.project4.bookonline.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class OrderManagermentController {

    Orders order;
    List<Orders> orders;
    List<OrderDetail> orderServices;
    @Autowired
    OrderService orderService;

    @Autowired
    OrderDetailService orderdetailService;

    Message_Respones<Orders> setMessage;
    Message_Respones<OrderDetail> setMessageDetail;

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

    @RequestMapping(value = "/orders/findAll/{userId}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> loadDataByUserId(@PathVariable String userId) {
        return getMessage_responesResponseloadDataByUserId(userId);
    }


    private ResponseEntity<Message_Respones<Orders>> getMessage_responesResponseloadDataByUserId(String userId) {
        setMessage = new Message_Respones<Orders>();
        orders = new ArrayList<>();
        orders = orderService.loadDataByUserId(userId);
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(orders);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
    }
    @RequestMapping(value = "/order/update/{id}/{status}", method = RequestMethod.PUT)
    public ResponseEntity<Message_Respones<Orders>> UpdateStatus(@PathVariable String id, @PathVariable String status) {
        Orders or = orderService.findOne(Integer.valueOf(id));
        or.setOrderstatus(Integer.valueOf(status));
        setMessage = new Message_Respones<Orders>();
        try {
            if (or != null) {
                orderService.Create(or);
                setMessage.setCode(200);
                setMessage.setMessage("Update Success");
                return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
            } else {
                setMessage.setCode(404);
                setMessage.setMessage("No order found");
                return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            setMessage.setMessage(e.getMessage());
            return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
