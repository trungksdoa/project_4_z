/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.PDetail;
import com.project4.bookonline.Service.BooksService;
import com.project4.bookonline.Service.PDetailService;
import com.project4.bookonline.UploadService.FileStorageService;
import com.project4.bookonline.dto.BookDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

/**
 * @author PC
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BookController {

    BookDTO bdto;
    String msg;
    String respone;
    Message_Respones<BookDTO> setMessage;
    UUID uuid;
    String bid;

    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    PDetailService pDetailService;

    @Autowired
    BooksService bookService;

    @RequestMapping(value = "/book/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Books>> findAll() {
        List<Books> b = bookService.ListBook();
        Message_Respones<Books> setMessage = new Message_Respones<Books>();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(b);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Books>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/book/findAll/author/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Books>> loadByAuthors(@PathVariable String id) {
        List<Books> b = bookService.LoadByAuthor(Integer.valueOf(id));
        Message_Respones<Books> setMessage = new Message_Respones<Books>();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(b);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Books>>(setMessage, HttpStatus.OK);
    }
}
