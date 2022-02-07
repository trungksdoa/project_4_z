package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Repository.ReviewRepository;
import com.project4.bookonline.Service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ReviewsImpl implements ReviewsService {
    @Autowired
    ReviewRepository reviewService;

    @Override
    public Reviews post_reviews(Reviews reviews) {
        return reviewService.save(reviews);
    }


    @Override
    public Reviews findOne(int id) {
        try {
            Optional<Reviews> op = reviewService.findById(id);
            Reviews reviews = op.get();
            return reviews;
        }catch(NoSuchElementException ex){
            return null;
        }

    }

    @Override
    public List<Reviews> render_in_customer(String bookId) {
        return reviewService.customer_interface(bookId);
    }

    @Override
    public List<Reviews> render_in_admin() {
        return reviewService.admin_interface();
    }

    @Override
    public Reviews changeStatusReview(int id, int status) {
        try {
            Reviews reviews = reviewService.findOne(id);
            reviews.setActive(status);
            return reviewService.save(reviews);
        } catch (NullPointerException | NoSuchElementException ex) {
            return null;
        }

    }

    @Override
    public String Delete(int id) {
        try {
            reviewService.Delete(id);
            return "Success";
        }catch (Exception ex){
            return ex.getMessage();
        }
    }

    @Override
    public String DeleteByBookId(String bookId) {
        try {
            reviewService.DeleteByBookId(bookId);
            return "Success";
        }catch (Exception ex){
            return ex.getMessage();
        }
    }
}
