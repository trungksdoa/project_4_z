package com.project4.bookonline.dto;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Model.Users;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Basic;
import javax.persistence.Column;
import java.awt.print.Book;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@NoArgsConstructor
public class ReviewDTO {
    private Integer reviewid;
    private String reviewtitle;
    private String reviewcontent;
    private int ratingstart;
    private int active;
    private String createddate;
    private String userId;
    private String bookId;
    private String bookname;
    private String fullname;


    public Reviews convert (ReviewDTO dto){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Reviews reviews;
        reviews = new Reviews();
        reviews.setReviewtitle(dto.getReviewtitle());
        reviews.setReviewcontent(dto.getReviewcontent());
        reviews.setCreateddate(dtf.format(now));
        reviews.setRatingstart(dto.getRatingstart());

        Books books = new Books();
        Users user= new Users();
        user.setUserid(userId);
        reviews.setUserid(user);
        reviews.setActive(2);

        books.setBooksid(dto.bookId);
        reviews.setBooksId(books);
        return reviews;
    }

    public Reviews convert_update (ReviewDTO dto){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Reviews reviews;
        reviews = new Reviews();
        reviews.setReviewtitle(dto.getReviewtitle());
        reviews.setReviewcontent(dto.getReviewcontent());
        reviews.setRatingstart(dto.getRatingstart());
        reviews.setCreateddate(dtf.format(now));
        return reviews;
    }
}
