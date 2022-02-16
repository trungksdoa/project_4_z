/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.Banner;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.Banner;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Wishlist;
import com.project4.bookonline.Service.BannerService;
import com.project4.bookonline.Service.BooksService;
import com.project4.bookonline.Service.WishlistService;
import com.project4.bookonline.UploadService.FileStorageService;
import com.project4.bookonline.dto.BannerDTO;
import com.project4.bookonline.dto.VWishlist;
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
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping(value = "/admin/api")
public class WishlistManagerController {
    Message_Respones<VWishlist> setVMessage;
    String respone;
    Wishlist wishlist;
    List<Wishlist> wishlists;
    @Autowired
    WishlistService wishlistService;

    @Autowired
    BooksService bookService;
    //Save ảnh

    @CrossOrigin(origins = "http://localhost:3006")
    @RequestMapping(value = "/wishlist/findAll/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<VWishlist>> findAllByUserId(@PathVariable String id) {
        return getMessage_responesResponseEntity(id);
    }

    private ResponseEntity<Message_Respones<VWishlist>> getMessage_responesResponseEntity(@PathVariable String id) {
        setVMessage = new Message_Respones<VWishlist>();
        List<VWishlist> Vwishlists = new ArrayList<>();
        Vwishlists = wishlistService.getVList(id);
        String msg = "Get data success";
        if (Vwishlists == null) {
            msg = "Empty data";
            setVMessage.setMessage(msg);
            setVMessage.setList(new ArrayList<VWishlist>());
            setVMessage.setCode(404);
            return new ResponseEntity<Message_Respones<VWishlist>>(setVMessage, HttpStatus.NOT_FOUND);
        }
        setVMessage.setMessage(msg);
        setVMessage.setList(Vwishlists);
        setVMessage.setCode(200);
        return new ResponseEntity<Message_Respones<VWishlist>>(setVMessage, HttpStatus.OK);

    }
}
