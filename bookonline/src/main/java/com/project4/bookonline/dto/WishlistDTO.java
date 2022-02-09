package com.project4.bookonline.dto;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Wishlist;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Setter
@Getter
@NoArgsConstructor
public class WishlistDTO {
    private String booksId;
    private String userId;
    private String Wishlist_createddate;

    public Wishlist Convert (WishlistDTO wishlistDTO){
        Wishlist wishlist = new Wishlist();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Books books = new Books();
        books.setBooksid(wishlistDTO.getBooksId());
        Users user = new Users();
        user.setUserid(wishlistDTO.getUserId());
        wishlist.setBooksId(books);
        wishlist.setUser_id(user);
        wishlist.setWishlist_createddate(dtf.format(now));
        return wishlist;
    }
}
