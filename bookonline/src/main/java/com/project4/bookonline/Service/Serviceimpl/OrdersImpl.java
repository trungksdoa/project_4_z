package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.*;
import com.project4.bookonline.Repository.OrderRepository;
import com.project4.bookonline.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class OrdersImpl implements OrderService {
    @Autowired
    OrderRepository orderRepository;

    @Override
    public List<Orders> listAll() {
        return orderRepository.findAll();
    }

    @Override
    public Orders Create(Orders orders) {
         
        return orderRepository.save(orders);
    }

    @Override
    public Orders update_status(int id, Orders orders) {
        Optional<Orders> optional = orderRepository.findById(id);
        Orders Or = optional.get();
        Orders newObject = new Orders(null);
        if (Or != null) {
            newObject.setOrderid(orders.getOrderid());
            newObject.setOrdercreateddate(Or.getOrdercreateddate());
            newObject.setOrderaddress(orders.getOrderaddress());
            newObject.setOrdercity(orders.getOrdercity());
            newObject.setOrderstatus(orders.getOrderstatus());
            newObject.setOrderdistrict(orders.getOrderdistrict());
            newObject.setOrdervoucher(orders.getOrdervoucher());
            newObject.setOrdernote(orders.getOrdernote());
            newObject.setOrderDetailCollection(orders.getOrderDetailCollection());
        }
        return orderRepository.save(newObject);
    }

    @Override
    public Orders findOne(int id) {
        try {
            return orderRepository.findById(id).get();
        } catch (NoSuchElementException ex) {
            return null;
        }
    }

    @Override
    public Orders checkusedVoucher(Users userId, Voucher voucherid) {
        try {
            return orderRepository.checkusedVoucher(userId,voucherid);
        } catch (NoSuchElementException ex) {
            return null;
        }
    }

    @Override
    public List<Orders> loadDataByUserId(String id) {
        Users usersId = new Users();
        usersId.setUserid(id);
        return orderRepository.loadDataByUserId(usersId);
    }

    @Override
    public List<Orders> loadDataByDay(String now) {
        return orderRepository.loadDataByDay(now);
    }

    @Override
    public List<Orders> loadDataByMonth(String now) {
        return orderRepository.loadDataByMonth(now);
    }

    @Override
    public List<Orders> loadDataByYear(String now) {
        return orderRepository.loadDataByYear(now);
    }

    @Override
    public List<OrderDetail> loadtotalprice(int id) {
        return orderRepository.loadtotalprice(id);
    }
}
