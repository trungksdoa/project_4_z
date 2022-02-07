package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Reviews, Integer> {
    @Query(value = "SELECT * FROM Review WHERE Book_id=:bookId", nativeQuery = true)
    List<Reviews> customer_interface(@Param("bookId") String bookId);

    @Query(value = "SELECT * FROM Review", nativeQuery = true)
    List<Reviews> admin_interface();

    @Query(value = "SELECT * FROM Review WHERE Review_id = :reviewId", nativeQuery = true)
    Reviews findOne(@Param("reviewId") int reviewId);

    @Query(value = "DELETE FROM Review WHERE Review_id = :reviewId", nativeQuery = true)
    void Delete(@Param("reviewId") int reviewId);

    @Query(value = "DELETE FROM Review WHERE Book_id = :bookId", nativeQuery = true)
    void DeleteByBookId(@Param("bookId") String bookId);
}
