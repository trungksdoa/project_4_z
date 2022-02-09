package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Orders;


import java.util.List;


public interface OrderService {

    public List<Orders> listAll();

    public void Create(Orders orders);

    public Orders update_status(int id,Orders orders);

    public Orders findOne(int id);

}