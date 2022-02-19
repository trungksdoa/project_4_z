/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User;

import com.project4.bookonline.Model.*;
import com.project4.bookonline.Service.UserService;
import com.project4.bookonline.dto.UsersDTO;
import com.project4.bookonline.dto.WishlistDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CustomerController {
    UsersDTO udto;
    Users users;
    String msg;
    String respone;
    Message_Respones<UsersDTO> setMessage;
    UUID uuid;
    String uid;
    @Autowired
    UserService userServide;

    @Autowired
    public JavaMailSender emailSender;

    @RequestMapping(value = "/user/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<UsersDTO>> Login(@RequestBody UsersDTO user) {
        users = userServide.Login(user.getUser_email(), user.getPassword());
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
                    udto.setUserID(users.getUserid());
                    udto.setFirst_name(users.getFirstName());

                    udto.setLast_name(users.getLastName());
                    udto.setFirst_name(users.getFirstName());
                    udto.setUser_email(users.getUseremail());
                    setMessage.setObject(udto);
                    setMessage.setMessage(msg);
                    return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.OK);
            }
        }
    }

    public UsersDTO getUserDTO(Users users) {
        udto = new UsersDTO();
        udto.setUserID(users.getUserid());
        udto.setLast_name(users.getLastName());
        udto.setUser_email(users.getUseremail());
        udto.setFirst_name(users.getFirstName());
        udto.setPhone(users.getPhone());
        udto.setPassword(users.getUserpassword());
        return udto;
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

    @RequestMapping(value = "/user/register", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<UsersDTO>> Register(@RequestBody UsersDTO user) {
        uuid = UUID.randomUUID();
        uid = uuid.toString();
        setMessage = new Message_Respones<UsersDTO>();

//        ----Get current date-----
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

//
//        ----End-----
        msg = "Sign Up Success";
        Users userExists = userServide.findByMail(user.getUser_email());
        if (userExists != null) {
            msg = "Emails have been exists";
            setMessage.setMessage(msg);
            setMessage.setCode(409);
            return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.CONFLICT);
        } else {
            Users create = new Users();
            create.setUserid(uid);
            create.setFirstName(user.getFirst_name());
            create.setLastName(user.getLast_name());
            create.setUseremail(user.getUser_email());
            create.setUserpassword(user.getPassword());
            create.setPhone(user.getPhone());
            create.setStatus(2);
            //Auto
            create.setUsercreateddate(dtf.format(now));
            create.setUsermodifieddate(dtf.format(now));
            //Do register
            users = userServide.Register(create);
            //End
            udto = new UsersDTO();
            udto.setUserID(users.getUserid());
            udto.setPhone(users.getPhone());
            udto.setLast_name(users.getLastName());
            udto.setUser_email(users.getUseremail());
            setMessage.setMessage(msg);
            setMessage.setObject(udto);
            setMessage.setCode(200);

            //Send emails


            String htmlMsg = "" +
                    "<p>Hello " + users.getFirstName() + users.getLastName() + ",</p>\n" +
                    "\n" +
                    "<p><strong>Click the link to activate your account:&nbsp;</strong></p>\n" +
                    "\n" +
                    "<blockquote>\n" +
                    "<p><u><strong><a href=\"http://localhost:9999/api/user/setActive/" + users.getUserid() + "\" target=\"_blank\">Active account</a></strong></u></p>" +
                    "</blockquote>\n" +
                    "\n" +
                    "<p>Shop,<br />\n" +
                    "BookStoreOnline</p>\n";
            SendEmail("Active account", htmlMsg, users.getUseremail());
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

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/user/forgetpassword/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<UsersDTO>> findByEmail(@RequestBody UsersDTO user) {
        users = userServide.findByMail(user.getUser_email());
        MimeMessage message = emailSender.createMimeMessage();
        setMessage = new Message_Respones<UsersDTO>();
        msg = "New password is send to your emails";
        if (users == null) {
            msg = "No account has been found";
            setMessage.setMessage(msg);
            return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.OK);
        }
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
                users.setUserpassword(getSaltString());
                users = userServide.Register(users);
                setMessage.setObject(getUserDTO(users));
                setMessage.setCode(200);
                setMessage.setMessage(msg);

                SendEmail("BookstoreOnline forget password\n", "" +
                        "<p>Hello soda,</p>\n" +
                        "\n" +
                        "<p>This is your new password : " + users.getUserpassword() + ":</p>\n" +
                        "\n" +
                        "<p>Please keep this serect</p>\n" +
                        "\n" +
                        "<p>Shop</p>\n", users.getUseremail());
                return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/user/update/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<UsersDTO>> Update(@PathVariable String id, @RequestBody UsersDTO user) {

        Users convert = user.convert_update(user);
        users = userServide.Update(id, convert);
        msg = "Update Success";
        setMessage = new Message_Respones<UsersDTO>();
        setMessage.setMessage(msg);
        setMessage.setCode(200);
        setMessage.setObject(getUserDTO(users));
        return new ResponseEntity<Message_Respones<UsersDTO>>(setMessage, HttpStatus.OK);
    }


    @RequestMapping(value = "/user/setActive/{id}", method = RequestMethod.GET)
    public ResponseEntity<String> setActive(@PathVariable String id) {
        users = userServide.findOne(id);
        String msg = "";
        if (users != null) {
            if (users.getStatus() == 3) {
                msg = "Your account has been banned";
            } else if (users.getStatus() == 1) {
                msg = "Your account has been activated";
            } else {
                userServide.Active(id);
                msg = "Account activation successful";
            }
            return new ResponseEntity<String>(msg, HttpStatus.OK);
        } else {
            msg = "No account has been found";
            return new ResponseEntity<String>(msg, HttpStatus.NOT_FOUND);
        }
    }

    protected String getSaltString() {
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 19) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;

    }
}
