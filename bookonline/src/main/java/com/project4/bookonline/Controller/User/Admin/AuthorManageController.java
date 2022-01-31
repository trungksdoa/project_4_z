/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User.Admin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.*;
import com.project4.bookonline.Service.AuthorService;
import com.project4.bookonline.Service.ReviewsService;
import com.project4.bookonline.UploadService.FileStorageService;
import com.project4.bookonline.dto.AuthorDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class AuthorManageController {
    String respone;
    Authors author;
    List<Authors> authors;
    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
    LocalDateTime now = LocalDateTime.now();
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


    @RequestMapping(value = "/authors/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Message_Respones<Authors>> Delete(@PathVariable int id) {
        authorService.Delete(id);
        String msg = "Delete success";
        setMessage.setMessage(msg);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Authors>>(setMessage, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3006")
    @RequestMapping(value = "/authors/update/{id}", method = RequestMethod.PUT, consumes = {"multipart/form-data"})
    public ResponseEntity<Message_Respones<Authors>> Update(@PathVariable String id, String author_String, MultipartFile file) {
//        System.out.println(file);

        author = new Authors();
        AuthorDTO audt = null;

        try {
            audt = new ObjectMapper().readValue(author_String, AuthorDTO.class);

            String fileName = "";
            author = authorService.findOne(Integer.valueOf(id));
            String msg = "Update success";
            if (author != null) {
                if(file == null) {
                    fileName = author.getAuthorImage();
                }
                else{
                    fileName = fileStorageService.storePreNameFile(file,author.getAuthorImage());
                }

                author.setAuthorname(audt.getAuthorname());
                author.setNumberpublishedbooks(audt.getNumberpublishedbooks());
                author.setAuthorinformation(audt.getAuthorinformation());
                author.setAuthorImage(fileName);

                System.out.println(dtf.format(now));
                author.setModifieddate(dtf.format(now));
                author.setAuthorid(author.getAuthorid());
                author.setDatecreated(author.getDatecreated());
                Authors authors = authorService.Edit(Integer.valueOf(id), author);
                setMessage.setMessage(msg);
                setMessage.setObject(authors);
                setMessage.setCode(200);
            } else {
                msg = "Not found";
                setMessage.setMessage(msg);
                setMessage.setCode(404);
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<Message_Respones<Authors>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/authors", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public ResponseEntity<Message_Respones<Authors>> Save(@RequestParam("file") MultipartFile file, String author_String) {
        author = new Authors();
        AuthorDTO audt = null;
        try {
            audt = new ObjectMapper().readValue(author_String, AuthorDTO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        String fileName = fileStorageService.storeFile(file);
        author.setAuthorname(audt.getAuthorname());
        author.setNumberpublishedbooks(audt.getNumberpublishedbooks());
        author.setAuthorinformation(audt.getAuthorinformation());
        author.setAuthorImage(fileName);
        author.setDatecreated(dtf.format(now));
        author.setModifieddate(dtf.format(now));
        Authors authors1 = authorService.Create(author);
        String msg = "Create success";
        setMessage.setMessage(msg);
        setMessage.setObject(authors1);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Authors>>(setMessage, HttpStatus.OK);
    }
}
