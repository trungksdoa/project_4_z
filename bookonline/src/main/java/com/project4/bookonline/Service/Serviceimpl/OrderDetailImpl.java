package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Orders;
import com.project4.bookonline.Repository.OrderDetailRespository;
import com.project4.bookonline.Service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailImpl implements OrderDetailService {
    @Autowired
    OrderDetailRespository orderService;

    @Override
    public List<com.project4.bookonline.Model.OrderDetail> findALl(int id) {
        Orders orderId = new Orders();
        orderId.setOrderid(id);
        return orderService.findAllById(orderId);
    }
}
