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
//    @Query(value = "SELECT au.Author_id,au.Author_Image,au.Author_information,au.Author_name,au.Datecreated,au.Modifieddate,au.Number_published_books,books.*" +
//            "FROM [Project_4].[dbo].[Authors] au" +
//            "LEFT JOIN [Project_4].[dbo].[Books] books" +
//            "ON au.[Author_id] = books.[Author_id]" +
//            "FOR JSON AUTO", nativeQuery = true)
//    public List<Authors> findALl(@Param("reviewId") int reviewId);
}
