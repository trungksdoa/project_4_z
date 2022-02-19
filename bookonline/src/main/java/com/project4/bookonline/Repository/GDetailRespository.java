/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Groupdetail;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author PC
 */
public interface GDetailRespository extends JpaRepository<Groupdetail, Integer>{
     @Query(value = "SELECT * FROM Group_detail WHERE Catagory_id = :catagory_id", nativeQuery = true)
    public List<Groupdetail> findByCategory(@Param("catagory_id") int catagory_id);
    @Query(value = "SELECT *FROM Group_detail WHERE Catagory_id IN (:list)", nativeQuery = true)
    public List<Groupdetail> findBySameBook(@Param("list") String list);
}
