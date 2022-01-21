/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller;

import com.project4.bookonline.Model.User;
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
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userServide;


    //Api
    @RequestMapping(value = "/user/getall", method = RequestMethod.GET)
    public ResponseEntity<List<User>> findAll() {
        List<User> users = userServide.findAll();
        if (users.isEmpty()) return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> Login(@RequestBody User user) {
        User users = userServide.Login(user.getUserEmail(), user.getUserPassword());
//        if(user.getUserEmail().trim().length() == 0 || user.getUserPassword().trim().length() == 0)
//            return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
//        if(user.getUserEmail().indexOf("@gmail.com") == -1)
//            return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
//        if (users == null)
//            return new ResponseEntity<User>(HttpStatus.NO_CONTENT);

        //Vetify Email


        return new ResponseEntity<User>(users, HttpStatus.OK);
    }

}
