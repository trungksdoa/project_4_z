package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Users;

import java.util.List;


public interface UserService {
    public List<Users> findAll();

    public Users Login(String email, String password);

    public Users Register(Users user);

    public String Active(String id);

    public String Ban(String id);

    public String UnBan(String id);

    public Users findOne(String id);

    public Users findByMail(String email);

    public Users Update(String id, Users user);


}
