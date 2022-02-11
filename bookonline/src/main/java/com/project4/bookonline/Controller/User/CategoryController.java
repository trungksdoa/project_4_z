/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User;

import com.project4.bookonline.Model.Catagorys;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Service.CategorysService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author PC
 */
@RequestMapping(value="/api")
@RestController
public class CategoryController {
    String respone;
    Catagorys catagorys;
    List<Catagorys> catagoryses;
    @Autowired
    CategorysService categorysService;
    Message_Respones<Catagorys> setMessage = new Message_Respones<Catagorys>();

    @RequestMapping(value = "/category/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Catagorys>> findAll() {
        catagoryses = new ArrayList<>();
        catagoryses = categorysService.List_categorys();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(catagoryses);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Catagorys>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/category/find/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Catagorys>> findOne(@PathVariable int id) {
        catagorys = new Catagorys();
        catagorys  = categorysService.findOne(id);
        String msg = "Found data";
        setMessage.setMessage(msg);
        setMessage.setObject(catagorys);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Catagorys>>(setMessage, HttpStatus.OK);
    }
}
