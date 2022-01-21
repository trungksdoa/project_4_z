package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Admin_roles;
import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRespository extends JpaRepository<Admins, Integer> {
    @Query(value = "SELECT * FROM Admins WHERE Admin_email = :Admin_email AND Admin_password = :Admin_password", nativeQuery = true)
    Admins login(@Param("Admin_email") String email, @Param("Admin_password") String password);

//
//    public OutputContent findWhereId(@PathVariable("id") String id, @PathVariable("warehouse") String warehouse,@PathVariable("outputId") Output outputId);
}
