/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User.Admin;

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

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author PC
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class BookManagerController {

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

    public BookDTO getBookDTO(Books book) {
        bdto = new BookDTO();
        return bdto;
    }

    @RequestMapping(value = "/book/create", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public ResponseEntity<Message_Respones<BookDTO>> CreateBook(@RequestParam("file") MultipartFile file, String book_String) {
        uuid = UUID.randomUUID();
        bid = uuid.toString();
        setMessage = new Message_Respones<BookDTO>();
        //--- Set Date time --- 
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //--- End---
        BookDTO bookdto = null;
        try {
            bookdto = new ObjectMapper().readValue(book_String, BookDTO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        String fileName = fileStorageService.storeBookNameFile(file);
        // insert pdetail
        PDetail p = new PDetail();
        p.setDimensions(bookdto.getDimensions());
        p.setImageLink(fileName);
        p.setIllustrationsnote(bookdto.getIllustrationsnote());
        p.setLanguage(bookdto.getLanguage());
        p.setPages(bookdto.getPages());
        p.setFormat(bookdto.getFormat());
        PDetail crep = pDetailService.Create(p);
        // end insert//
        // insert book//
        Authors authors = new Authors();
        PDetail pdetail = new PDetail();
        Books b = new Books();
        authors.setAuthorid(bookdto.getAuthorid());
        pdetail.setPdetailid(crep.getPdetailid());
        b.setBooksid(bid);
        b.setAmounts(bookdto.getAmounts());
        b.setAuthorid(authors);
        b.setBookname(bookdto.getBookname());
        b.setBookprice(bookdto.getBookprice());
        b.setBookdescription(bookdto.getBookdescription());
        b.setBookreleasedate(bookdto.getBookreleasedate());
        b.setPDetailid(pdetail);
        b.setStatus(bookdto.getStatus());
        b.setBookcreateddate(dtf.format(now));
        b.setBookmodifieddate(dtf.format(now));
        Books creb = bookService.Create(b);
        // end insert//
        setMessage.setMessage(msg);
        setMessage.setObject(bdto);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<BookDTO>>(setMessage, HttpStatus.OK);
    }
}
