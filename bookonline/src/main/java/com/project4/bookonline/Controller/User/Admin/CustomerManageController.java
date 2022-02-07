/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User.Admin;

import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class CustomerManageController {
    String respone;
    @Autowired
    UserService userServide;

    @RequestMapping(value = "/user/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Users>> findAll() {
        List<Users> user = userServide.findAll();
        Message_Respones<Users> setMessage = new Message_Respones<Users>();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(user);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Users>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/ban/user/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<String>> setBan(@PathVariable String id) {
        String msg = "";
        Users user = userServide.findOne(id);
        Message_Respones<String> message = new Message_Respones<String>();
        if (user == null) {
            msg = "No account has been found";
            message.setMessage(msg);
            message.setCode(404);
            return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.NOT_FOUND);
        } else {
            switch (user.getStatus()) {
                case 2:
                    msg = "Unactivated accounts cannot be banned";
                    //Cái này tạm chưa biết nó trạng thái gì :v
                    message.setMessage(msg);
                    message.setCode(204);
                    return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.OK);
                default:
                    respone = userServide.Ban(id);
                    msg = "Banned success customers with id: "+id;
                    //Cái này tạm chưa biết nó trạng thái gì :v
                    message.setMessage(msg);
                    message.setCode(200);
                    return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.OK);
            }
        }
    }
    @RequestMapping(value = "/Unban/user/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<String>> unBan(@PathVariable String id) {
        String msg = "";
        Users user = userServide.findOne(id);
        Message_Respones<String> message = new Message_Respones<String>();
        if (user == null) {
            msg = "No account has been found";
            message.setMessage(msg);
            message.setCode(404);
            return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.NOT_FOUND);
        } else {
            //UnBan là nếu status == 3 thì unban
            // nếu status == 1 thì không
            switch (user.getStatus()) {
                case 2:
                    msg = "Unactivated accounts cannot be banned or unBanned";
                    //Cái này tạm chưa biết nó trạng thái gì :v
                    message.setMessage(msg);
                    message.setCode(204);
                    return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.OK);
                default:
                    respone = userServide.UnBan(id);
                    msg = "UnBanned success customers with id: " +id;
                    //Cái này tạm chưa biết nó trạng thái gì :v
                    message.setMessage(msg);
                    message.setCode(200);
                    return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.OK);
            }
        }
    }
}
