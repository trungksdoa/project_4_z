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
    @Query(value = "SELECT * FROM Review", nativeQuery = true)
    List<Reviews> admin_interface();
}
