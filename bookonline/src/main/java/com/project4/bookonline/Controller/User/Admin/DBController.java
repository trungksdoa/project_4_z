package com.project4.bookonline.Controller.User.Admin;

import com.project4.bookonline.Model.*;
import com.project4.bookonline.Service.OrderDetailService;
import com.project4.bookonline.Service.OrderService;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class DBController {
    @Autowired
    OrderService orderService;
    @Autowired
    UserService userService;
    @Autowired
    OrderDetailService orderDetailService;
    Message_Respones<Orders> setMessage = new Message_Respones<Orders>();
    // Sum user register in day
    @RequestMapping(value = "/db/userByDay", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> totaluserByDay(){
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        List<Users> usersList = userService.totaluserrgister(dtf.format(now));
        Message_Respones<Orders> setMessage = new Message_Respones<Orders>();

        int count =0;
        for (Users users:
        usersList) {
            count++;
        }
        String str =String.valueOf(count);
        setMessage.setMessage(str);
        return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
    }
    // Tổng số đơn hàng trong ngày

    @RequestMapping(value = "/db/orderByDay", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> totalorderByDay(){
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Message_Respones<Orders> setMessage = new Message_Respones<Orders>();
        //--- End---
        List<Orders> orders = orderService.loadDataByDay(dtf.format(now));
        setMessage.setList(orders);
        String str = orders.toString();
        return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
    }
    // Tổng số đơn hàng trong tháng
    @RequestMapping(value = "/db/orderByMouth", method = RequestMethod.GET)
    public ResponseEntity<String> totalorderByMouth(){
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        List<Orders> orders = orderService.loadDataByMonth(dtf.format(now));
        String str = orders.toString();
        return new ResponseEntity<String>(str, HttpStatus.OK);
    }
    // Tổng số đơn hàng trong năm
    @RequestMapping(value = "/db/orderByYear", method = RequestMethod.GET)
    public ResponseEntity<String> totalorderByYear(){
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        List<Orders> orders = orderService.loadDataByYear(dtf.format(now));
        String str = orders.toString();
        return new ResponseEntity<String>(str, HttpStatus.OK);
    }
    // tất cả order(obj) trong ngày
    @RequestMapping(value = "/db/objorderByDay", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> objectOrderByDay(){
        setMessage = new Message_Respones<Orders>();
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        List<Orders> orders = orderService.loadDataByDay(dtf.format(now));
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(orders);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
    }
    // tất cả order(obj) trong tháng
    @RequestMapping(value = "/db/objorderByMouth", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> objectOrderByMouth(){
        setMessage = new Message_Respones<Orders>();
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        List<Orders> orders = orderService.loadDataByMonth(dtf.format(now));
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(orders);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
    }
    // tất cả order(obj) trong năm
    @RequestMapping(value = "/db/objorderByYear", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> objectOrderByYear(){
        setMessage = new Message_Respones<Orders>();
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        List<Orders> orders = orderService.loadDataByYear(dtf.format(now));
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(orders);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
    }
    // Tổng số price đơn hàng trong ngày
    @RequestMapping(value = "/db/totalpriceorderByDay", method = RequestMethod.GET)
    public ResponseEntity<String> totalpriceorderByDay(){
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        List<Orders> orders = orderService.loadDataByDay(dtf.format(now));
        List<OrderDetail> orderDetails = new ArrayList<>();
        int total =0;
        for (Orders getdata:
             orders) {
            orderDetails = orderService.loadtotalprice(getdata.getOrderid());
            for (OrderDetail orderDetail:
                    orderDetails) {
                OrderDetail getODetail = orderDetailService.FindOne(orderDetail.getDetailid());
                total += getODetail.getTotal();
            }
        }
        String str = String.valueOf(total);
        return new ResponseEntity<String>(str, HttpStatus.OK);
    }
    // Tổng số price đơn hàng trong thang
    @RequestMapping(value = "/db/totalpriceorderByMouth", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> totalpriceorderByMouth(){
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        List<Orders> orders = orderService.loadDataByMonth(dtf.format(now));
        Message_Respones<Orders> setMessage = new Message_Respones<Orders>();
        List<OrderDetail> orderDetails = new ArrayList<>();
        int total =0;
        for (Orders getdata:
                orders) {
            orderDetails = orderService.loadtotalprice(getdata.getOrderid());
            for (OrderDetail orderDetail:
                    orderDetails) {
                OrderDetail getODetail = orderDetailService.FindOne(orderDetail.getDetailid());
                total += getODetail.getTotal();
            }
        }
        String str = String.valueOf(total);
        setMessage.setMessage(str);
        return new ResponseEntity<Message_Respones<Orders>>(setMessage, HttpStatus.OK);
    }
    // Tổng số price đơn hàng trong nam
    @RequestMapping(value = "/db/totalpriceorderByYear", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Orders>> totalpriceorderByYear(){
        //--- Set Date time ---
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        List<Orders> orders = orderService.loadDataByYear(dtf.format(now));
        Message_Respones<Integer> setmessage = new Message_Respones<>()
        List<OrderDetail> orderDetails = new ArrayList<>();
        int total =0;
        for (Orders getdata:  orders) {
            orderDetails = orderService.loadtotalprice(getdata.getOrderid());
            for (OrderDetail orderDetail:
                    orderDetails) {
                OrderDetail getODetail = orderDetailService.FindOne(orderDetail.getDetailid());
                total += getODetail.getTotal();
            }
        }
        String str = String.valueOf(total);
       // System.out.println(str);
        setmessage.setMessage(str);
        return new ResponseEntity<Message_Respones<Orders>>(setmessage, HttpStatus.OK);
    }

}
