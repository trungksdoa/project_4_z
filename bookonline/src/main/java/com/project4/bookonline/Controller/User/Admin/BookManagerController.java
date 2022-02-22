/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User.Admin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.*;
import com.project4.bookonline.Service.*;
import com.project4.bookonline.UploadService.FileStorageService;
import com.project4.bookonline.dto.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.project4.bookonline.Model.View_Product_Rank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

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
    Message_Respones<PDetail> setPdetailMessage;
    UUID uuid;
    String bid;

    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    PDetailService pDetailService;

    @Autowired
    ProductRankService ProductRankService;

    @Autowired
    BooksService bookService;
    @Autowired
    GDetailService gDetailService;

    List<Wishlist> wishlists;
    @Autowired
    WishlistService wishlistService;

    @Autowired
    public JavaMailSender emailSender;

    public void SendEmail(String subject, String messages, String toEmails) {

        MimeMessage message = emailSender.createMimeMessage();

        //Send emails


        boolean multipart = true;

        MimeMessageHelper helper = null;
        try {
            helper = new MimeMessageHelper(message, multipart, "utf-8");
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }

        String htmlMsg = messages;

        try {
            message.setContent(htmlMsg, "text/html");
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }

        try {
            helper.setTo(toEmails);
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        try {
            helper.setSubject(subject);
        } catch (MessagingException e) {
            e.printStackTrace();
        }


        this.emailSender.send(message);
    }

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

    @RequestMapping(value = "/book/findOne/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Books>> findOne(@PathVariable String id) {
        Books b = bookService.findOne(id);
        Message_Respones<Books> setMessage = new Message_Respones<Books>();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setObject(b);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Books>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/book/pdetails/findOne/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<PDetail>> findOnePdetails(@PathVariable String id) {
        PDetail pDetails = pDetailService.findOne(Integer.valueOf(id));
        Message_Respones<PDetail> setMessage = new Message_Respones<PDetail>();
        if (pDetails == null) {
            String msg = "Fails";
            setMessage.setMessage(msg);
            setMessage.setCode(404);
            return new ResponseEntity<Message_Respones<PDetail>>(setMessage, HttpStatus.NOT_FOUND);
        } else {
            String msg = "Fails success";
            setMessage.setMessage(msg);
            setMessage.setObject(pDetails);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<PDetail>>(setMessage, HttpStatus.OK);
        }

    }

    @RequestMapping(value = "/BookRank/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<View_Product_Rank>> loadProductRanks() {
        List<View_Product_Rank> ranks = ProductRankService.loadRanks();
        Message_Respones<View_Product_Rank> setMessage = new Message_Respones<View_Product_Rank>();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(ranks);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<View_Product_Rank>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/book/changeStatus/{id}/{status}", method = RequestMethod.PUT)
    public ResponseEntity<Message_Respones<Books>> changeStatus(@PathVariable String id, @PathVariable String status) {
        Message_Respones<Books> setMessage = new Message_Respones<Books>();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Books bookId = new Books();
        if (Integer.valueOf(status) == 4) {
            bookId = bookService.findOne(id);
            bookId.setStatus(Integer.valueOf(status));
            bookId.setBookmodifieddate(dtf.format(now));
            wishlists = new ArrayList<>();
            wishlists = wishlistService.getListByBookId(bookId);
            for (int i = 0; i < wishlists.size(); i++) {
                SendEmail("Books have arrived! buy it now", "<h3>Product <b>" + bookId.getBookname() + "</b> is in stock</h3> \n\n" +
                        "<br> <a href='http://localhost:3000/'>Go to website</a>", wishlists.get(i).getUser_id().getUseremail());
            }
            bookService.Create(bookId);
            String msg = "Update stock";
            setMessage.setMessage(msg);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Books>>(setMessage, HttpStatus.OK);
        } else if (Integer.valueOf(status) == 3) {
            bookId = bookService.findOne(id);
            bookId.setStatus(Integer.valueOf(status));
            bookId.setBookmodifieddate(dtf.format(now));
            wishlists = new ArrayList<>();
            wishlists = wishlistService.getListByBookId(bookId);
            for (int i = 0; i < wishlists.size(); i++) {
                SendEmail("Product is out of stock", "<h3>Product <b>" + bookId.getBookname() + "</b> is out stock</h3> \n\n" +
                        "<br> <a href='http://localhost:3000/'>Go to website</a>", wishlists.get(i).getUser_id().getUseremail());
            }
            bookService.Create(bookId);
            String msg = "Update out of stock";
            setMessage.setMessage(msg);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Books>>(setMessage, HttpStatus.OK);
        } else {
            bookId = bookService.findOne(id);
            bookId.setStatus(Integer.valueOf(status));
            bookId.setBookmodifieddate(dtf.format(now));
            bookService.Create(bookId);
            String msg = "Delete";
            setMessage.setMessage(msg);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Books>>(setMessage, HttpStatus.OK);
        }
    }

    public BookDTO getBookDTO(Books book) {
        bdto = new BookDTO();
        return bdto;
    }

    @CrossOrigin(origins = "http://localhost:3006")
    @RequestMapping(value = "/pdetails/image/update/{id}", method = RequestMethod.PUT, consumes = {"multipart/form-data"})
    public ResponseEntity<Message_Respones<PDetail>> UploadImage(@PathVariable String id, @RequestParam("file") MultipartFile file) {
        String fileName = "";
        setPdetailMessage = new Message_Respones<PDetail>();
        PDetail pDetails;
        pDetails = pDetailService.findOne(Integer.valueOf(id));
        fileStorageService.storePreNameFile(file, pDetails.getImageLink());
        setPdetailMessage.setMessage("Update success");
        setPdetailMessage.setCode(200);
        return new ResponseEntity<Message_Respones<PDetail>>(setPdetailMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/Pdetails/update/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<PDetail>> UpdatePDetails(@RequestBody PdetailDTO pdetails, @PathVariable String id) {
        setPdetailMessage = new Message_Respones<PDetail>();
        PDetail p = pDetailService.findOne(Integer.valueOf(id));
        p.setDimensions(pdetails.getDimensions());
        p.setIllustrationsnote(pdetails.getIllustrationsnote());
        p.setLanguage(pdetails.getLanguage());
        p.setPages(pdetails.getPages());
        p.setFormat(pdetails.getFormat());
        PDetail crep = pDetailService.Create(p);
        setPdetailMessage.setMessage("Update success");
        setPdetailMessage.setObject(crep);
        setPdetailMessage.setCode(200);
        return new ResponseEntity<Message_Respones<PDetail>>(setPdetailMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/books/update/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void UpdateBooks(@RequestBody BookDTO booksDTO, @PathVariable String id) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Books b = bookService.findOne(id);
        b.setAmounts(booksDTO.getAmounts());
        b.setBookname(booksDTO.getBookname());
        b.setBookprice(booksDTO.getBookprice());
        b.setBookdescription(booksDTO.getBookdescription());
        b.setBookreleasedate(booksDTO.getBookreleasedate());
        b.setBookmodifieddate(dtf.format(now));

        Books creb = bookService.Create(b);
        List<Groupdetail> testsList = new ArrayList<>();
        for (String groups_details : booksDTO.getGroupdto()) {
            Groupdetail groups = new Groupdetail();
            Catagorys catagorys = new Catagorys();
            catagorys.setCatagoryid(Integer.valueOf(groups_details));
            groups.setCatagoryid(catagorys);
            groups.setBookid(creb);
            groups.setGroupcreateddate(dtf.format(now));
            groups.setGroupmodifieddate(dtf.format(now));
            gDetailService.create(groups);
        }
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

//        // insert pdetail
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
        b.setStatus(1);
        b.setBookcreateddate(dtf.format(now));
        b.setBookmodifieddate(dtf.format(now));
//
        Books creb = bookService.Create(b);
        for (String groups_details : bookdto.getGroupdto()) {
            Groupdetail groups = new Groupdetail();
            Catagorys catagorys = new Catagorys();
            catagorys.setCatagoryid(Integer.valueOf(groups_details));
            groups.setCatagoryid(catagorys);
            groups.setBookid(creb);
            groups.setGroupcreateddate(dtf.format(now));
            groups.setGroupmodifieddate(dtf.format(now));
            gDetailService.create(groups);
        }


        setMessage.setMessage(msg);
        setMessage.setObject(bdto);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<BookDTO>>(setMessage, HttpStatus.OK);
    }
}
