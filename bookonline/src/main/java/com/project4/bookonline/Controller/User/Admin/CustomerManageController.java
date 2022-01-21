/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User.Admin;

import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.User;
import com.project4.bookonline.Model.UsersDTO;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
    public ResponseEntity<List<User>> findAll() {
        List<User> user = userServide.findAll();
        return new ResponseEntity<List<User>>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/ban/user/{id}", method = RequestMethod.GET)
    public ResponseEntity<String> setBan(@PathVariable String id) {
        String msg = "";
        User user = userServide.findOne(id);
        if (user == null) {
            msg = "No account has been found";
            return new ResponseEntity<String>(msg, HttpStatus.NOT_FOUND);
        } else {
            switch (user.getStatus()) {
                case 3:
                    msg = "The banned account cannot be banned again";
                    return new ResponseEntity<String>(msg, HttpStatus.OK);
                case 2:
                    msg = "Unactivated accounts cannot be banned";
                    return new ResponseEntity<String>(msg, HttpStatus.OK);
                default:
                    respone = userServide.Ban(id);
                    msg = "Banned success customers with id: \" + id";
                    return new ResponseEntity<String>(msg, HttpStatus.OK);
            }
        }
    }
}
