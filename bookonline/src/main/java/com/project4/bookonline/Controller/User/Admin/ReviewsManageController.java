/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User.Admin;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Service.ReviewsService;
import com.project4.bookonline.Service.UserService;
import com.project4.bookonline.dto.ReviewDTO;
import com.project4.bookonline.dto.emailsReply;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.ArrayList;
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

    @RequestMapping(value = "/reviews/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<ReviewDTO>> findAll() {
        List<Reviews> reviews = reviewServide.render_in_admin();
        List<ReviewDTO> dtoreview = new ArrayList<>();
        Message_Respones<ReviewDTO> setMessage = new Message_Respones<ReviewDTO>();
        for (int i = 0; i < reviews.size(); i++) {
            ReviewDTO reviewDTO = new ReviewDTO();
            reviewDTO.setReviewid(reviews.get(i).getReviewid());
            reviewDTO.setReviewtitle(reviews.get(i).getReviewtitle());
            reviewDTO.setReviewcontent(reviews.get(i).getReviewcontent());
            reviewDTO.setRatingstart(reviews.get(i).getRatingstart());
            reviewDTO.setActive(reviews.get(i).getActive());
            reviewDTO.setCreateddate(reviews.get(i).getCreateddate());
            reviewDTO.setBookname(reviews.get(i).getBooksId().getBookname());
            reviewDTO.setFullname(reviews.get(i).getUserid().getFirstName()+" "+reviews.get(i).getUserid().getLastName());
            dtoreview.add(reviewDTO);
        }
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(dtoreview);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<ReviewDTO>>(setMessage, HttpStatus.OK);
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

    @RequestMapping(value = "/reviews/sendmail/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Message_Respones<Reviews>> sendReply(@PathVariable String id, @RequestBody emailsReply emails) {
        Message_Respones<Reviews> setMessage = new Message_Respones<Reviews>();
        String htmlMsg = "" +
                "<p>Hello " + emails.getTo() + ",</p>\n" +
                "\n" +
                "<p><strong>"+emails.getMessage()+"</strong></p>\n" +
                "\n" +
                "Your review: \n" +
                "<blockquote>\n" +
                "<p><u><strong>"+emails.getOldreview()+"</strong></u></p>" +
                "</blockquote>\n" +
                "\n" +
                "<p>Shop,<br />\n" +
                "BookStoreOnline</p>\n";
        SendEmail(emails.getSubjectl(), htmlMsg, emails.getToEmail());

        setMessage.setMessage("Send emails success");
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.OK);
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
        } else {
            setMessage.setMessage(message);
            setMessage.setCode(500);
            return new ResponseEntity<Message_Respones<Reviews>>(setMessage, HttpStatus.BAD_REQUEST);
        }

    }
}
