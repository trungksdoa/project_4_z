/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User.Admin;

import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Service.ReviewsService;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class ReviewsManageController {
    String respone;
    @Autowired
    ReviewsService reviewServide;

    @RequestMapping(value = "/reviews/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Reviews>> findAll() {
        List<Reviews> reviews = reviewServide.render_in_admin();
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(reviews);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/reviews/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Reviews>> findOne(@PathVariable String id) {
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        Reviews review2 = reviewServide.findOne(Integer.valueOf(id));
        if (review2 == null) {
            setMessage.setMessage("Get data fails");
            setMessage.setCode(404);
            return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.NOT_FOUND);
        } else {
            setMessage.setMessage("Get data success");
            setMessage.setObject(review2);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/reviews/status/{id}/{status}", method = RequestMethod.PUT)
    public ResponseEntity<Message_Respones<Reviews>> changeStatus(@PathVariable String id, @PathVariable int status) {
        String msg = "";
        Reviews reviews = reviewServide.changeStatusReview(Integer.valueOf(id), status);
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        if (reviews == null) {
            msg = "No reviews has been found";
            setMessage.setMessage(msg);
            setMessage.setCode(404);
            return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.NOT_FOUND);
        } else {
            msg = "Success";
            setMessage.setMessage(msg);
            setMessage.setObject(reviews);
            setMessage.setCode(200);
            //Cái này tạm chưa biết nó trạng thái gì :v
            return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/reviews/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Message_Respones<Reviews>> Delete(@PathVariable int id) {
        String msg = "Delete success";
        String message = reviewServide.Delete(id);
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        if ("Success" == message) {
            setMessage.setMessage(msg);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
        }else{
            setMessage.setMessage(message);
            setMessage.setCode(500);
            return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.BAD_REQUEST);
        }

    }
}
