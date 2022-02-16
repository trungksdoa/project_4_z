package com.project4.bookonline.Controller.User;


import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Orders;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Service.AuthorService;
import com.project4.bookonline.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class OrderController {

    Orders order;
    List<Orders> orders;
    @Autowired
    OrderService orderService;

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


    @RequestMapping(value = "/orders/create", method = RequestMethod.POST)
    public ResponseEntity<Object> create(@RequestBody Orders orders) {
        orderService.Create(orders);
        return new ResponseEntity<Object>(1, HttpStatus.OK);
    }


}
