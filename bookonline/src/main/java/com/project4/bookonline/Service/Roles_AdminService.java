package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Admin_roles;

import java.util.List;

public interface Roles_AdminService {
    public List<Admin_roles> CheckRoles(int adminId);
}
