/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Web_information;
import com.project4.bookonline.Service.WebService;
import com.project4.bookonline.UploadService.FileStorageService;
import com.project4.bookonline.dto.WebDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class WebController {
    String respone;
    String msg;
    Message_Respones<Web_information> setMessage = new Message_Respones<Web_information>();
    @Autowired
    WebService service;

    @Autowired
    private FileStorageService fileStorageService;

        @RequestMapping(value = "/web/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Web_information>> findOne(@PathVariable String id) {
        Web_information webif = new Web_information();
        webif = service.findOne(Integer.valueOf(id));
        if(webif != null){
            setMessage.setMessage("Get success");
            setMessage.setObject(webif);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Web_information>>(setMessage, HttpStatus.OK);
        }else{
            setMessage.setMessage("Not found");
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Web_information>>(setMessage, HttpStatus.NOT_FOUND);
        }
    }
}
