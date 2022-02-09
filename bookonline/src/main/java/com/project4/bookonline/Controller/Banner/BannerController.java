/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.Banner;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Banner;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Wishlist;
import com.project4.bookonline.Service.BannerService;
import com.project4.bookonline.Service.WishlistService;
import com.project4.bookonline.UploadService.FileStorageService;
import com.project4.bookonline.dto.AuthorDTO;
import com.project4.bookonline.dto.BannerDTO;
import com.project4.bookonline.dto.UsersDTO;
import com.project4.bookonline.dto.WishlistDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
public class BannerController {

    @Autowired
    BannerService bannerService;

    @Autowired
    private FileStorageService fileStorageService;
    //Save ảnh
    Message_Respones<Banner> setMessage = new Message_Respones<Banner>();

    @RequestMapping(value = "/api/banners", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Banner>> findALl() {
        setMessage = new Message_Respones<Banner>();
        List<Banner> findAll = bannerService.getList();
        setMessage.setMessage("Update success");
        setMessage.setList(findAll);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Banner>>(setMessage, HttpStatus.OK);
    }
}
