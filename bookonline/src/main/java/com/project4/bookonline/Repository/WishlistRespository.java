package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WishlistRespository extends JpaRepository<Wishlist, Integer> {

    @Query(value = "SELECT * FROM Wishlist WHERE User_id = :userId", nativeQuery = true)
    public List<Wishlist> findAllById(@Param("userId") Users userId);

    @Modifying
    @Query("DELETE FROM Wishlist b WHERE b.booksId = :bookId")
    public void deleteByBookId(@Param("bookId") Books bookId);

    @Query(value = "SELECT * FROM Wishlist WHERE User_id = :userId AND Book_id = :bookId", nativeQuery = true)
    public Wishlist findAllByBookId(@Param("userId") Users userId,@Param("bookId") Books bookId);
}
