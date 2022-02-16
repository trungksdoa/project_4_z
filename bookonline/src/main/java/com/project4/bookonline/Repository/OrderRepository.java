package com.project4.bookonline.Repository;


import com.project4.bookonline.Model.Orders;
import com.project4.bookonline.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {
    @Query(value = "select b.Books_id from Books b  where b.Author_id in (select a.Author_id  from Authors a where a.Author_id = :authodId)", nativeQuery = true)
    public List<String> getId(@Param("authodId") int authodId);

    @Query(value = "SElECT * FROM Orders WHERE User_id = :userId", nativeQuery = true)
    public List<Orders> loadDataByUserId(@Param("userId") Users userId);
}
