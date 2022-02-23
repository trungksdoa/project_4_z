package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Reviews;

import java.util.List;

public interface ReviewsService {
    public Reviews post_reviews(Reviews reviews);
    public Reviews findOne(int id);
    public List<Reviews> render_in_customer(String bookId);
    public List<Reviews> render_in_admin();
    public Reviews changeStatusReview(int id,int status);
    public boolean Delete(int id);
    public String DeleteByBookId(String bookId);
}
