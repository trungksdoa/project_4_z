package com.project4.bookonline.Service;

import com.project4.bookonline.Model.User;

import java.util.List;

public interface UserService {
    public List<User> findAll();
    public User Login(String email,String password);
}
