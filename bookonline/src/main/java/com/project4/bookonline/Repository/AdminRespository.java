package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Admins;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminRespository extends JpaRepository<Admins, Integer> {
    @Query(value = "SELECT * FROM Admins WHERE Admin_email = :Admin_email AND Admin_password = :Admin_password", nativeQuery = true)
    Admins login(@Param("Admin_email") String email, @Param("Admin_password") String password);

    @Query(value = "SELECT * FROM Admins WHERE Admin_email = :Admin_email", nativeQuery = true)
    Admins findByEmail(@Param("Admin_email") String email);

    @Query(value = "SELECT * FROM Admins WHERE Admin_roles = :Admin_roles", nativeQuery = true)
    Admins findByRole(@Param("Admin_roles") String roles);

    @Query(value = "SELECT * FROM Admins WHERE Admin_roles = :Admin_roles AND Admin_id = :Admin_id", nativeQuery = true)
    Admins findByRoleById(@Param("Admin_roles") String roles, @Param("Admin_id") int id);


}
