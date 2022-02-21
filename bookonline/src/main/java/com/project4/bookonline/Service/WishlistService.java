package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Wishlist;
import com.project4.bookonline.dto.VWishlist;

import java.util.List;

public interface WishlistService {
    public List<Wishlist> getList(Users id);

    public List<Wishlist> getListByBookId(Books bookId);

    public Wishlist save(Wishlist wishlist);

    public Wishlist findOne(int wishlistID);

    public boolean removeWishlistItem(Wishlist wl);

    public List<VWishlist> getVList(String userId);
}
