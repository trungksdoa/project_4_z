/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.Banner;

import com.project4.bookonline.Model.*;
import com.project4.bookonline.Service.AuthorService;
import com.project4.bookonline.Service.BooksService;
import com.project4.bookonline.Service.WishlistService;
import com.project4.bookonline.dto.UsersDTO;
import com.project4.bookonline.dto.VWishlist;
import com.project4.bookonline.dto.WishlistDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
@RestController
public class WishlistController {
    String respone;
    Wishlist wishlist;
    List<Wishlist> wishlists;
    @Autowired
    WishlistService wishlistService;

    @Autowired
    BooksService bookService;

    Message_Respones<Wishlist> setMessage;

    Message_Respones<VWishlist> setVMessage;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/wishlist/findAll/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<VWishlist>> findAll(@PathVariable String id) {
        setVMessage = new Message_Respones<VWishlist>();
        List<VWishlist> Vwishlists = new ArrayList<>();
        Vwishlists = wishlistService.getVList(id);
        String msg = "Get data success";
        setVMessage.setMessage(msg);
        setVMessage.setList(Vwishlists);
        setVMessage.setCode(200);
        return new ResponseEntity<Message_Respones<VWishlist>>(setVMessage, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/wishlist/findAll/{userId}/{bookId}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Wishlist>> findAllByBookId(@PathVariable String userId, @PathVariable String bookId) {
        setMessage = new Message_Respones<Wishlist>();
        wishlist = new Wishlist();
        Users user_id = new Users();
        Books book_id = new Books();
        user_id.setUserid(userId);
        book_id.setBooksid(bookId);
        wishlist = wishlistService.getListByBookId(user_id, book_id);
        String msg = "Get object success";
        setMessage.setMessage(msg);
        setMessage.setObject(wishlist);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Wishlist>>(setMessage, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/wishlist/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Message_Respones<Wishlist>> RemoveWishlist(@PathVariable String id) {
        setMessage = new Message_Respones<Wishlist>();
        wishlists = new ArrayList<>();
        try {
            Wishlist found = wishlistService.findOne(Integer.valueOf(id));
            boolean isDeleted = wishlistService.removeWishlistItem(found);
            if (isDeleted) {
                String msg = "Delete success";
                setMessage.setMessage(msg);
                setMessage.setCode(200);
                return new ResponseEntity<Message_Respones<Wishlist>>(setMessage, HttpStatus.OK);
            } else {
                String msg = "Delete fail";
                setMessage.setMessage(msg);
                setMessage.setCode(200);
                return new ResponseEntity<Message_Respones<Wishlist>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }catch(Exception exists){
            String msg = exists.getMessage();
            setMessage.setMessage(msg);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Wishlist>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    @RequestMapping(value = "/wishlist/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Wishlist>> save(@RequestBody WishlistDTO wishlistDTO) {
        wishlists = new ArrayList<>();
        Wishlist converter = wishlistDTO.Convert(wishlistDTO);
        wishlist = wishlistService.save(converter);
        String msg = "Save success";
        setMessage.setMessage(msg);
        setMessage.setObject(wishlist);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Wishlist>>(setMessage, HttpStatus.OK);
    }
}
