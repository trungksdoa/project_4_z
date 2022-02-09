/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User.Admin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.Catagorys;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Service.CategorysService;
import com.project4.bookonline.dto.CategoryDTO;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import static jdk.nashorn.internal.objects.NativeError.printStackTrace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @catagorys PC
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class CategoryController {

    Message_Respones<Catagorys> setMessage;

    @Autowired
    CategorysService categorysService;

    String respone;
    Catagorys catagorys;

    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
    LocalDateTime now = LocalDateTime.now();

    @RequestMapping(value = "/category/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Catagorys>> findAll() {
        List<Catagorys> c = categorysService.List_categorys();
        Message_Respones<Catagorys> setMessage = new Message_Respones<Catagorys>();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(c);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Catagorys>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/category/create", method = RequestMethod.POST)
    public ResponseEntity<Message_Respones<Catagorys>> Save(String catagorys_String) {
        setMessage = new Message_Respones<Catagorys>();
        Catagorys catagorys = new Catagorys();
        CategoryDTO audt = null;
        try {
            audt = new ObjectMapper().readValue(catagorys_String, CategoryDTO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        catagorys.setCatagoryname(audt.getCategory_name());
        catagorys.setCatagorydescription(audt.getCatagory_description());

        catagorys.setCatagorycreateddate(dtf.format(now));
        catagorys.setCatagorymodifieddate(dtf.format(now));
        Catagorys catagoryss1 = categorysService.Create(catagorys);
        String msg = "Create success";
        setMessage.setMessage(msg);
        setMessage.setObject(catagoryss1);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Catagorys>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/category/find/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Catagorys>> findOne(@PathVariable int id) {
        setMessage = new Message_Respones<Catagorys>();
        catagorys = new Catagorys();
        catagorys = categorysService.findOne(id);
        String msg = "Found data";
        setMessage.setMessage(msg);
        setMessage.setObject(catagorys);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Catagorys>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/category/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Message_Respones<Catagorys>> Delete(@PathVariable int id) {
        setMessage = new Message_Respones<Catagorys>();

        Catagorys catagorys = categorysService.findOne(id);
        categorysService.Delete(id);

        String msg = "Delete success";
        setMessage.setMessage(msg);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Catagorys>>(setMessage, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3006")
    @RequestMapping(value = "/categorys/update/{id}", method = RequestMethod.PUT, consumes = {"multipart/form-data"})
    public ResponseEntity<Message_Respones<Catagorys>> Update(@PathVariable String id, String author_String) {
        setMessage = new Message_Respones<Catagorys>();
        catagorys = new Catagorys();
        CategoryDTO audt = null;

        try {
            audt = new ObjectMapper().readValue(author_String, CategoryDTO.class);

            catagorys = categorysService.findOne(Integer.valueOf(id));
            String msg = "Update success";
            if (catagorys != null) {
                catagorys.setCatagoryname(audt.getCategory_name());
                catagorys.setCatagorydescription(audt.getCatagory_description());
                catagorys.setCatagorymodifieddate(dtf.format(now));
                Catagorys catagoryss1 = categorysService.Create(catagorys);
                setMessage.setMessage(msg);
                setMessage.setObject(catagoryss1);
                setMessage.setCode(200);
            } else {
                msg = "Not found";
                setMessage.setMessage(msg);
                setMessage.setCode(404);
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<Message_Respones<Catagorys>>(setMessage, HttpStatus.OK);
    }
}
