package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Reviews, String> {
    @Query(value = "SELECT * FROM Review WHERE Active = 1 AND Book_id=:bookId", nativeQuery = true)
    List<Reviews> customer_interface(@Param("bookId") String bookId);

    @Query(value = "SELECT rv.Review_id,rv.Review_title,rv.Review_content,rv.Rating_start,rv.Created_date,rv.Active, \n" +
            "      (SELECT CONCAT(u.first_name, ' ', u.last_name)\n" +
            "      FROM Users u\n" +
            "      WHERE rv.User_id = u.User_id) as User_id \n" +
            "\t  ,(SELECT Book_name\n" +
            "\t  FROM Books b\n" +
            "\t  WHERE b.Books_id = rv.Book_id) as Book_id\n" +
            "FROM Review  rv", nativeQuery = true)
    List<Reviews> admin_interface();

    @Query(value = "SELECT * FROM Review WHERE Review_id = :reviewId", nativeQuery = true)
    Reviews findOne(@Param("reviewId") int reviewId);

    @Query(value = "DELETE FROM Review WHERE Review_id = :reviewId", nativeQuery = true)
    void Delete(@Param("reviewId") int reviewId);
}
