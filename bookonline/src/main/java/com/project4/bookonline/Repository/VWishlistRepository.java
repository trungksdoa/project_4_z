/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/ReactRepository.java to edit this template
 */
package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.dto.VWishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author PC
 */
@Repository
public interface VWishlistRepository extends JpaRepository<VWishlist, Integer> {
    @Query(value = "SELECT * FROM VWishlist WHERE User_id = :UserId", nativeQuery = true)
    public List<VWishlist> viewList(String UserId);
}
