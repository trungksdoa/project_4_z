package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Admin_roles;
import com.project4.bookonline.Repository.AdminRoleRespository;
import com.project4.bookonline.Service.Roles_AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class Roles_Impl implements Roles_AdminService {

    @Autowired
    AdminRoleRespository adminRole;
    @Override
    public List<Admin_roles> CheckRoles(int adminId) {
        return adminRole.CheckRoles(adminId);
    }
}
