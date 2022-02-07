package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Admins;

import java.util.List;

public interface AdminService {
    public Admins Login(String email, String password);
    public List<Admins> findAll();
    public Admins Save(Admins admin);
    public Admins Checkmail(String emails);
    public boolean Checkrole(String roles);
    public boolean CheckroleById(String roles, int id);
    public Admins findOne(int id);
    public boolean Delete(int id);
//
}
