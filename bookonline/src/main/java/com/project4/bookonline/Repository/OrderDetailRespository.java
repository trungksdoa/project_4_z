package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Banner;
import com.project4.bookonline.Model.OrderDetail;
import com.project4.bookonline.Model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRespository extends JpaRepository<OrderDetail, Integer> {

    @Query(value = "SELECT * FROM Order_Detail WHERE Order_id = :orderid",nativeQuery = true)
    public List<OrderDetail> findAllById(@Param("orderid") Orders orderid);
}
