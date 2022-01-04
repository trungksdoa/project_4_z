package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.User;
import com.project4.bookonline.Repository.UserRepository;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserImpl implements UserService {
    @Autowired
    UserRepository userService;

    @Override
    public List<User> findAll() {
        return userService.findAll();
    }

    @Override
    public User Login(String email,String password) {
        return userService.login(email,password);
    }
}
