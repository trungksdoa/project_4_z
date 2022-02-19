/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/ReactRepository.java to edit this template
 */
package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Catagorys;
import com.project4.bookonline.Model.Groupdetail;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


/**
 *
 * @author PC
 */
@Repository
public interface CategoryRepository extends JpaRepository<Catagorys, Integer> {
    @Query(value = "SELECT * FROM Catagorys WHERE Catagory_name = :name", nativeQuery = true)
    public Catagorys findByName(@Param("name") String name);
}
