package com.project4.bookonline.Repository;


import com.project4.bookonline.Model.OrderDetail;
import com.project4.bookonline.Model.Orders;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Voucher;
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

    @Query(value = "SElECT * FROM Orders WHERE User_id = :userId and Order_voucher = :Ordervoucher", nativeQuery = true)
    public Orders checkusedVoucher(@Param("userId") Users userId,@Param("Ordervoucher") Voucher voucherid);

    // Select All Order Day
    @Query(value = "SELECT * FROM Orders WHERE DAY(Order_createddate) = DAY(:now) and MONTH(Order_createddate) = MONTH(:now) and YEAR(Order_createddate) = YEAR(:now) and Order_status = 1 ", nativeQuery = true)
    public List<Orders> loadDataByDay(@Param("now") String now);
    // Select All Order Month
    @Query(value = "SELECT * FROM Orders WHERE MONTH(Order_createddate) = MONTH(:now) and YEAR(Order_createddate) = YEAR(:now) and Order_status = 1 ", nativeQuery = true)
    public List<Orders> loadDataByMonth(@Param("now") String now);
    @Query(value = "SELECT * FROM Orders WHERE YEAR(Order_createddate) = YEAR(:now) and Order_status = 1 ", nativeQuery = true)
    public List<Orders> loadDataByYear(@Param("now") String now);
    @Query(value = "SELECT * FROM Order_Detail WHERE Order_id =:order_id", nativeQuery = true)
    public List<OrderDetail> loadtotalprice(@Param("order_id") int id);
    // Select order monthly
    @Query(value = "SELECT SUM(order_Detail.Total) as Total FROM Orders INNER JOIN order_Detail ON Orders.order_id = order_Detail.order_id WHERE YEAR(Orders.order_createddate) =YEAR(GETDATE()) GROUP BY MONTH(Orders.order_createddate)", nativeQuery = true)
    public List<Integer> totalmonthly();
}

