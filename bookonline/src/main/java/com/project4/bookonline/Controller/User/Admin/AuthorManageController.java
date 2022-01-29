/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User.Admin;

import com.project4.bookonline.Model.*;
import com.project4.bookonline.Service.AuthorService;
import com.project4.bookonline.Service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class AuthorManageController {
    String respone;
    @Autowired
    AuthorService authorService;
    Message_Respones<Authors> setMessage = new Message_Respones<Authors>();

    @RequestMapping(value = "/authors/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Authors>> findAll() {
        List<Authors> reviews = authorService.listAll();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(reviews);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Authors>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/authors/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Message_Respones<Authors>> Delete(@PathVariable int id) {
        authorService.Delete(id);
        String msg = "Delete success";
        setMessage.setMessage(msg);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Authors>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/authors/update/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Authors>> Update(@PathVariable int id, @RequestBody Authors authors) {
        Authors authors1 = authorService.Edit(id, authors);
        String msg = "Update success";
        setMessage.setMessage(msg);
        setMessage.setObject(authors1);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Authors>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/authors", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Authors>> Save(@RequestBody Authors authors) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        authors.setDatecreated(dtf.format(now));
        authors.setModifieddate(dtf.format(now));
        Authors authors1 = authorService.Create(authors);
        String msg = "Update success";
        setMessage.setMessage(msg);
        setMessage.setObject(authors1);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Authors>>(setMessage, HttpStatus.OK);
    }
}
