package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Repository.ReviewRepository;
import com.project4.bookonline.Service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewsImpl implements ReviewsService {
    @Autowired
    ReviewRepository reviewService;

    @Override
    public Reviews post_reviews(Reviews reviews) {
        return reviewService.save(reviews);
    }

    @Override
    public List<Reviews> render_in_customer(String bookId) {
        return reviewService.customer_interface(bookId);
    }

    @Override
    public List<Reviews> render_in_admin() {
        return reviewService.admin_interface();
    }
}
