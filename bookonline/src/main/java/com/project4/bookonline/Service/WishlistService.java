package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Wishlist;

import java.util.List;

public interface WishlistService {
    public List<Wishlist> getList(Users id);

    public Wishlist getListByBookId(Users userId, Books bookId);

    public Wishlist save(Wishlist wishlist);

    public boolean delete(int id);

    public boolean deleteByBook(String bookid);

}
