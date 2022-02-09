/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User;

import com.project4.bookonline.Model.Groupdetail;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Service.CategorysService;
import com.project4.bookonline.Service.GDetailService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;

/**
 *
 * @author PC
 */

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class GCategoryController {
    String respone;
    Groupdetail groupdetail;
    List<Groupdetail> groupdetails;
    @Autowired
    GDetailService gDetailService;
    Message_Respones<Groupdetail> setMessage = new Message_Respones<Groupdetail>();
    
    @RequestMapping(value = "/api/groupdetail/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Groupdetail>> findAll() {
        groupdetails = new ArrayList<>();
        groupdetails = gDetailService.findAll();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(groupdetails);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Groupdetail>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/groupdetail/find/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Groupdetail>> findOne(@PathVariable int id) {
        groupdetail = new Groupdetail();
        groupdetail  = gDetailService.findOne(id);
        String msg = "Found data";
        setMessage.setMessage(msg);
        setMessage.setObject(groupdetail);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Groupdetail>>(setMessage, HttpStatus.OK);
    }
}
