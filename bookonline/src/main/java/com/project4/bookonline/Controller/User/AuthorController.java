/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Service.AuthorService;
import com.project4.bookonline.UploadService.FileStorageService;
import com.project4.bookonline.dto.AuthorDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AuthorController {
    String respone;
    Authors author;
    List<Authors> authors;
    @Autowired
    AuthorService authorService;

    @Autowired
    private FileStorageService fileStorageService;

    Message_Respones<Authors> setMessage = new Message_Respones<Authors>();

    @RequestMapping(value = "/authors/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Authors>> findAll() {
        authors = new ArrayList<>();
        authors = authorService.listAll();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(authors);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Authors>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/authors/find/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Authors>> findOne(@PathVariable int id) {
        author = new Authors();
        author = authorService.findOne(id);
        String msg = "Found data";
        setMessage.setMessage(msg);
        setMessage.setObject(author);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Authors>>(setMessage, HttpStatus.OK);
    }
}
