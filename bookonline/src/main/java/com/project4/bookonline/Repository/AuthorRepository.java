/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/ReactRepository.java to edit this template
 */
package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Respone_Book_Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author PC
 */
@Repository
public interface AuthorRepository extends JpaRepository<Authors, Integer> {
    @Query(value = "select b.Books_id from Books b  where b.Author_id in (select a.Author_id  from Authors a where a.Author_id = :authodId)", nativeQuery = true)
    public List<String> getId(@Param("authodId") int authodId);


    @Query(value = "select *  from Authors  where status = 1", nativeQuery = true)
    public List<Authors> findAll();
}
