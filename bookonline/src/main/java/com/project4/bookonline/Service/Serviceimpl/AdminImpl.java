package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Repository.AdminRespository;
import com.project4.bookonline.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class AdminImpl implements AdminService {

    @Autowired
    AdminRespository AdminService;

    @Override
    public Admins Login(String email, String password) {
        if(AdminService.login(email, password) == null){
            return null;
        }else{
            return AdminService.login(email, password);
        }
    }

    //
    @Override
    public List<Admins> findAll() {
        return AdminService.findAll();
    }

    @Override
    public Admins Save(Admins admin) {
        return AdminService.save(admin);
    }

    @Override
    public Admins Checkmail(String emails) {
        return AdminService.findByEmail(emails);
    }

    @Override
    public boolean Checkrole(String roles) {
        if (AdminService.findByRole(roles) != null) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean CheckroleById(String roles, int id) {
        if (AdminService.findByRoleById(roles,id) != null) {
            return true;
        } else {
            return false;
        }
    }


    @Override
    public Admins findOne(int id) {
        try {
            return AdminService.findById(id).get();
        } catch (NoSuchElementException ex) {
            return null;
        }

    }


    @Override
    public boolean Delete(int id) {
        try {
            AdminService.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
