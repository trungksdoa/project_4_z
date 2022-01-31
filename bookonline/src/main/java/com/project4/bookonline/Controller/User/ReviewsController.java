package com.project4.bookonline.Controller.User;


import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ReviewsController {

    @Autowired
    ReviewsService reviewService;

    @RequestMapping(value = "/reviews/book/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Reviews>> render_in_customer(@PathVariable String id) {
        List<Reviews> reviews = reviewService.render_in_customer(id);
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        setMessage.setMessage("Get list success");
        setMessage.setList(reviews);
        return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/reviews/post", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Reviews>> Post_reviews(@RequestBody Reviews params) {
        Reviews reviews = reviewService.post_reviews(params);
        String msg = "Reviews Success";
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        setMessage.setMessage(msg);
        setMessage.setObject(reviews);
        setMessage.setCode(Integer.valueOf(HttpStatus.OK + ""));
        return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
    }


}
