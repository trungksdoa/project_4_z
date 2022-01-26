/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/ReactRepository.java to edit this template
 */
package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.PDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author PC
 */
@Repository
public interface BDetailsRepository extends JpaRepository<PDetail,Integer> {
    @Query(value = "SELECT * FROM PDetail Where Pdetail_id = :Pdetail_id",nativeQuery = true)
    PDetail findOne(@Param("Pdetail_id") int Pdetail_id);
}
