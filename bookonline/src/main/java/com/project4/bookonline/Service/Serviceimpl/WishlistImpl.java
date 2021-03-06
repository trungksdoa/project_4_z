package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Wishlist;
import com.project4.bookonline.Repository.VWishlistRepository;
import com.project4.bookonline.Repository.WishlistRespository;
import com.project4.bookonline.Service.WishlistService;
import com.project4.bookonline.dto.VWishlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistImpl implements WishlistService {

    @Autowired
    WishlistRespository service;

    @Autowired
    VWishlistRepository Vservice;

    @Override
    public List<Wishlist> getList(Users id) {
        return service.findAllById(id);
    }

    @Override
    public List<Wishlist> getListByBookId(Books bookId) {
        return service.findAllByBookId(bookId);
    }

    @Override
    public Wishlist save(Wishlist wishlist) {
        return service.save(wishlist);
    }

    @Override
    public Wishlist findOne(int wishlistID) {
        Wishlist wishlist = service.findById(wishlistID).get();
        return wishlist != null ? wishlist : null;
    }

    @Override
    public boolean removeWishlistItem(Wishlist wl) {
        try {
            service.delete(wl);
            return true;
        } catch (Exception ex) {
            ex.printStackTrace();
            return false;
        }
    }


    @Override
    public List<VWishlist> getVList(String userId) {
        return Vservice.viewList(userId);
    }
}
