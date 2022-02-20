package com.project4.bookonline.Service;

import com.project4.bookonline.Model.OrderDetail;
import java.util.List;

public interface OrderDetailService {
    public List<com.project4.bookonline.Model.OrderDetail> findALl(int id);
    public OrderDetail Create(OrderDetail orderDetail);
    public  OrderDetail FindOne(int id);
}
