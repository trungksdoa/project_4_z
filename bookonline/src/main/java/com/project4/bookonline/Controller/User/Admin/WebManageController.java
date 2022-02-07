/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User.Admin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Web_information;
import com.project4.bookonline.Service.AdminService;
import com.project4.bookonline.Service.WebService;
import com.project4.bookonline.UploadService.FileStorageService;
import com.project4.bookonline.dto.AdminDTO;
import com.project4.bookonline.dto.AuthorDTO;
import com.project4.bookonline.dto.WebDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class WebManageController {
    String respone;
    String msg;
    Message_Respones<Web_information> setMessage = new Message_Respones<Web_information>();
    @Autowired
    WebService service;

    @Autowired
    private FileStorageService fileStorageService;

    @CrossOrigin(origins = "http://localhost:3006")
    @RequestMapping(value = "/web/image/update/{id}", method = RequestMethod.PUT, consumes = {"multipart/form-data"})
    public ResponseEntity<Message_Respones<Web_information>> UploadImage(@PathVariable String id, @RequestParam("file") MultipartFile file) {
        String fileName = "";
        Web_information webif = new Web_information();
        webif = service.findOne(Integer.valueOf(id));
        fileName = fileStorageService.storePreNameFile(file,webif.getLogo_name_path());
        webif.setLogo_name_path(fileName);
        Web_information web_save = service.save(webif);
        setMessage.setMessage("Update success");
        setMessage.setObject(web_save);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Web_information>>(setMessage, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3006")
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

    @CrossOrigin(origins = "http://localhost:3006")
    @RequestMapping(value = "/web/update/{id}", method = RequestMethod.PUT, consumes = {"multipart/form-data"})
    public ResponseEntity<Message_Respones<Web_information>> Update(@PathVariable String id, String web_string) {
        Web_information webif = new Web_information();
        WebDTO webdto = null;
        try {
            webdto = new ObjectMapper().readValue(web_string, WebDTO.class);

            webif = service.findOne(Integer.valueOf(id));
            String msg = "Update success";
            if (webif != null) {
                webif.setEmail(webdto.getEmail());
                webif.setPhonenum(webdto.getPhonenum());
                webif.setAddress(webdto.getAddress());
                webif.setTimeservice(webdto.getTimeservice());

                Web_information web = service.save(webif);
                setMessage.setMessage(msg);
                setMessage.setObject(webif);
                setMessage.setCode(200);
            } else {
                msg = "Not found";
                setMessage.setMessage(msg);
                setMessage.setCode(404);
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<Message_Respones<Web_information>>(setMessage, HttpStatus.OK);
    }
}
