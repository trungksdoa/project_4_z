package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Admin_roles;
import com.project4.bookonline.Model.Admins;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface AdminRoleRespository extends JpaRepository<Admin_roles, Integer> {

    @Query(value =
            "SELECT \n" +
                    "\tAdmin_Roles.id,Admin_Roles.Admin_id,\n" +
                    "\t(SELECT Roles_func.Func_name FROM Roles_func\n" +
                    "\t where Roles_func.Func_id = Admin_Roles.Func_id) as Func_Name\n" +
                    "\t From Admin_Roles\n" +
                    "\t Where Admin_Roles.Admin_id = :Admin_id", nativeQuery = true)
    List<Admin_roles> CheckRoles(@Param("Admin_id") int Admin_id);

//    Select vào đối tượng ID
//    @Query("SELECT i FROM OutputContent i WHERE i.goodsId = :id AND i.warehouse = :warehouse AND  i.outputId = :outputId")
}
