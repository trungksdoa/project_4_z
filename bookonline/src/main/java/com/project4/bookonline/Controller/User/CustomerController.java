/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User;

import com.project4.bookonline.Model.*;
import com.project4.bookonline.Service.AdminService;
import com.project4.bookonline.Service.Roles_AdminService;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CustomerController {
    UsersDTO udto;
    User users;
    String msg;
    String respone;
    Message_Respones<UsersDTO> setMessage;
    UUID uuid;
    String uid;
    @Autowired
    UserService userServide;

    @RequestMapping(value = "/user/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<UsersDTO>> Login(@RequestBody User user) {
        users = userServide.Login(user.getUserEmail(), user.getUserPassword());
        setMessage = new Message_Respones<UsersDTO>();
        if (users == null) {
            msg = "No account has been found";
            setMessage.setMessage(msg);
            return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.NOT_FOUND);
        } else {
            msg = "Log In Success";
            switch (users.getStatus()) {
                case 3:
                    msg = "Your account has been banned";
                    setMessage.setMessage(msg);
                    return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.FORBIDDEN);
                case 2:
                    msg = "Your account has not been activated";
                    setMessage.setMessage(msg);
                    return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.UNAUTHORIZED);
                default:
                    udto = new UsersDTO();
                    udto.setUserID(users.getUserID());
                    udto.setLast_name(users.getLast_name());
                    udto.setUserEmail(users.getUserEmail());
                    setMessage.setObject(udto);
                    setMessage.setMessage(msg);
                    return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.OK);
            }
        }
    }

    public UsersDTO getUserDTO(User users) {
        udto = new UsersDTO();
        udto.setUserID(users.getUserID());
        udto.setLast_name(users.getLast_name());
        udto.setUserEmail(users.getUserEmail());
        udto.setFirst_name(users.getFirst_name());
        udto.setPhone(users.getPhone());
        udto.setBirthday(users.getBirthday());
        return udto;
    }

    @RequestMapping(value = "/user/register", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<UsersDTO>> Register(@RequestBody User user) {
        uuid = UUID.randomUUID();
        uid = uuid.toString();
        setMessage = new Message_Respones<UsersDTO>();

//        ----Get current date-----
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.000'Z'")
                .withZone(ZoneId.of("UTC"));
        LocalDateTime date = LocalDateTime.parse(user.getBirthday(), formatter);
//
//        ----End-----
        msg = "Sign Up Success";
        User userExists = userServide.findByMail(user.getUserEmail());
        if (userExists != null) {
            msg = "Emails have been exists";
            setMessage.setMessage(msg);
            return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.CONFLICT);
        } else {
            user.setUserID(uid);
            user.setUserCreatedDate(dtf.format(now));
            user.setUserModifiedDate(dtf.format(now));
            user.setBirthday(dtf.format(date));
            users = userServide.Register(user);
            setMessage.setMessage(msg);
            return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/user/search/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<UsersDTO>> findCustomer(@PathVariable String id) {
        users = userServide.findOne(id);
        setMessage = new Message_Respones<UsersDTO>();
        msg = "Account has been found";
        if (users == null) {
            msg = "No account has been found";
            setMessage.setMessage(msg);
            return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.OK);
        }
        setMessage.setObject(getUserDTO(users));
        setMessage.setMessage(msg);
        return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/update/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<UsersDTO>> Update(@PathVariable String id, @RequestBody User user) {
        users = userServide.Update(id, user);
        msg = "Update Success";
        setMessage = new Message_Respones<UsersDTO>();
        setMessage.setMessage(msg);
        setMessage.setObject(getUserDTO(users));
        return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.OK);
    }


    @RequestMapping(value = "/user/setActive/{id}", method = RequestMethod.GET)
    public ResponseEntity<String> setActive(@PathVariable String id) {
        respone = userServide.Active(id);
        String msg = "Your account has been activated";
        if (respone == "Fail") {
            msg = "No account has been found";
            return new ResponseEntity<String>(msg, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>(msg, HttpStatus.OK);
    }
}
