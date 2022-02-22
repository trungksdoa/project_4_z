/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/ReactRepository.java to edit this template
 */
package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author PC
 */
@Repository
public interface BookRepository extends JpaRepository<Books, String> {

    @Query(value = "SELECT * FROM Books WHERE Author_id = :AuthorId AND status != 2", nativeQuery = true)
    public List<Books> findByAuthor(@Param("AuthorId") Authors authorsId);

    @Query(value = "SELECT * FROM Books WHERE status != 2", nativeQuery = true)
    public List<Books> findAll();

    @Query(value = "SELECT * FROM Books WHERE Books_id = :booksId", nativeQuery = true)
    public Books findOne(@Param("booksId") String booksId);

    // top order
    @Query(value = "select top 10 Books.*,(SELECT COUNT(Order_Detail.Book_id) from Order_Detail  where Order_Detail.Book_id = Books.Books_id  ) as Book_id from Books ORDER BY Book_id DESC",nativeQuery = true)
    public List<Books> findtoporder();
    // top releasedate
    @Query(value = "Select top 10 * from Books Order by Book_releasedate DESC",nativeQuery = true)
    public List<Books> topreleasedateBook();
    // top ratting
    @Query(value = "select top 10 Books.*,(SELECT COUNT(Review.Rating_start) from Review  where Review.Book_id = Books.Books_id  and Review.Rating_start = 5 ) as Ratting from Books ORDER BY Ratting DESC",nativeQuery = true)
    public List<Books> toprattingBook();
}
