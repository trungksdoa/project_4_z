/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller;

import com.project4.bookonline.Model.Book;
import com.project4.bookonline.Model.User;
import com.project4.bookonline.Service.BookService;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 *
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class BookController {

    @Autowired
    BookService BookServide;

    //PAGE ZONE
    @RequestMapping("/product/page/book")
    public String index(Model model) {
        model.addAttribute("list", BookServide.findAll());
        return "/pages/tables";
    }
    //API ZONE
    @RequestMapping(value = "/product/api/getall",method = RequestMethod.GET)
    public ResponseEntity<List<Book>> findAll(){
        List<Book> Books = BookServide.findAll();
        if(Books.isEmpty())return new ResponseEntity<List<Book>>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<Book>>(Books,HttpStatus.OK);
    }


}