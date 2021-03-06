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
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
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

    @Autowired
    public JavaMailSender emailSender;

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

    @RequestMapping(value = "/ban/user/{id}/{reason}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<String>> setBan(@PathVariable String id,@PathVariable String reason) {
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
                    //C??i n??y t???m ch??a bi???t n?? tr???ng th??i g?? :v
                    message.setMessage(msg);
                    message.setCode(204);
                    return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.OK);
                default:
                    respone = userServide.Ban(id);
                    msg = "Banned success customers with id: "+id;
                    String htmlMsg = "" +
                            "<p>Hello " + user.getUseremail() + ",</p>\n" +
                            "\n" +
                            "<p><strong>Your account have been locked by admin with reason:</strong></p>\n" +
                            "\n" +
                            "<blockquote>\n" +
                            "<p><u><strong>"+reason+"</strong></u></p>" +
                            "</blockquote>\n" +
                            "\n" +
                            "<p>Shop,<br />\n" +
                            "BookStoreOnline</p>\n";
                    SendEmail("Account locked", htmlMsg, user.getUseremail());

                    //C??i n??y t???m ch??a bi???t n?? tr???ng th??i g?? :v
                    message.setMessage(msg);
                    message.setCode(200);
                    return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.OK);
            }
        }
    }

    public void SendEmail(String subject, String messages, String toEmails) {

        MimeMessage message = emailSender.createMimeMessage();

        //Send emails


        boolean multipart = true;

        MimeMessageHelper helper = null;
        try {
            helper = new MimeMessageHelper(message, multipart, "utf-8");
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }

        String htmlMsg = messages;

        try {
            message.setContent(htmlMsg, "text/html");
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }

        try {
            helper.setTo(toEmails);
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        try {
            helper.setSubject(subject);
        } catch (MessagingException e) {
            e.printStackTrace();
        }


        this.emailSender.send(message);
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
            //UnBan l?? n???u status == 3 th?? unban
            // n???u status == 1 th?? kh??ng
            switch (user.getStatus()) {
                case 2:
                    msg = "Unactivated accounts cannot be banned or unBanned";
                    //C??i n??y t???m ch??a bi???t n?? tr???ng th??i g?? :v
                    message.setMessage(msg);
                    message.setCode(204);
                    return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.OK);
                default:
                    respone = userServide.UnBan(id);
                    msg = "UnBanned success customers with id: " +id;
                    //C??i n??y t???m ch??a bi???t n?? tr???ng th??i g?? :v
                    message.setMessage(msg);
                    message.setCode(200);
                    return new ResponseEntity<Message_Respones<String>>(message, HttpStatus.OK);
            }
        }
    }
}
