/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller;

import com.project4.bookonline.Model.Book;
import com.project4.bookonline.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 *
 * @author trung
 */
@Controller
@RequestMapping("/admin")
public class IndexController {

    //PAGE ZONE
    @RequestMapping("/page/index")
    public String index(Model model) {
        return "index";
    }

}
