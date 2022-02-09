package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Wishlist;
import com.project4.bookonline.Repository.WishlistRespository;
import com.project4.bookonline.Service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistImpl implements WishlistService {

    @Autowired
    WishlistRespository service;

    @Override
    public List<Wishlist> getList(Users id) {
        return service.findAllById(id);
    }

    @Override
    public Wishlist getListByBookId(Users userId, Books bookId) {
        return service.findAllByBookId(userId,bookId);
    }

    @Override
    public Wishlist save(Wishlist wishlist) {
        return service.save(wishlist);
    }

    @Override
    public boolean delete(int id) {
        try {
            service.deleteById(id);
            return true;
        }catch(Exception ex){
            return false;
        }
    }

    @Override
    public boolean deleteByBook(String bookid) {
        try {
            Books bookId = new Books();
            bookId.setBooksid(bookid);
            service.deleteByBookId(bookId);
            return true;
        }catch(Exception ex){
            return false;
        }
    }
}
