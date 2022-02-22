package com.project4.bookonline.Service;

import com.project4.bookonline.Model.*;
import org.springframework.data.repository.query.Param;


import java.util.List;


public interface OrderService {

    public List<Orders> listAll();

    public Orders Create(Orders orders);

    public Orders update_status(int id, Orders orders);

    public Orders findOne(int id);


    public Orders checkusedVoucher(Users userId, Voucher voucherid);

    public List<Orders> loadDataByUserId(String id);

    public List<Orders> loadDataByDay(String now);

    public List<Orders> loadDataByMonth(String now);

    public List<Orders> loadDataByYear(String now);

    public List<OrderDetail> loadtotalprice(int id);


}