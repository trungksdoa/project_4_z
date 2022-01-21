package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Reviews;

import java.util.List;

public interface ReviewsService {
    public Reviews post_reviews(Reviews reviews);
    public List<Reviews> render_in_customer(String bookId);
    public List<Reviews> render_in_admin();

}
