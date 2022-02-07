package com.project4.bookonline.Controller.User;


import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Service.ReviewsService;
import com.project4.bookonline.dto.ReviewDTO;
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
    String msg;
    @Autowired
    ReviewsService reviewService;

    @RequestMapping(value = "/reviews/book/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Reviews>> render_in_customer(@PathVariable String id) {
        List<Reviews> reviews = reviewService.render_in_customer(id);
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        setMessage.setMessage("Get list success");
        setMessage.setList(reviews);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/reviews/post", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Reviews>> Post_reviews(@RequestBody ReviewDTO params) {
        Reviews converts = params.convert(params);

        Reviews reviews = reviewService.post_reviews(converts);
        msg = "Reviews Successz";
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        setMessage.setMessage(msg);
        setMessage.setObject(reviews);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/reviews/update/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Reviews>> Update_reviews(@PathVariable String id, @RequestBody ReviewDTO params) {
        //Get param form client
        Reviews review1 = params.convert_update(params);
        //

        Reviews review2 = reviewService.findOne(Integer.valueOf(id));

        review2.setReviewtitle(review1.getReviewtitle());
        review2.setReviewcontent(review1.getReviewcontent());
        review2.setRatingstart(review1.getRatingstart());
        review2.setCreateddate(review1.getCreateddate());

        review2 = reviewService.post_reviews(review2);
        msg = "Reviews Success";
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        setMessage.setMessage(msg);
        setMessage.setObject(review2);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
    }


}
