package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Admin_roles;
import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Model.User;

import java.util.List;


public interface UserService {
    public List<User> findAll();

    public User Login(String email, String password);

    public User Register(User user);

    public String Active(String id);

    public String Ban(String id);

    public User findOne(String id);

    public User findByMail(String email);

    public User Update(String id, User user);


}
