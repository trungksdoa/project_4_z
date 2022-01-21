package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Repository.AdminRespository;
import com.project4.bookonline.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminImpl implements AdminService {

    @Autowired
    AdminRespository AdminService;
    @Override
    public Admins Login(String email, String password) {
        return AdminService.login(email,password);
    }
}
