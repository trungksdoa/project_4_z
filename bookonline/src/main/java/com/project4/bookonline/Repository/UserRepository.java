package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    @Query(value = "SELECT * FROM Users WHERE User_email = :email AND User_password = :password", nativeQuery = true)
    User login(@Param("email") String email, @Param("password") String password);

    @Query(value = "SELECT * FROM Users WHERE User_email = :email", nativeQuery = true)
    User checkMail(@Param("email") String email);
    //Select vào đối tượng ID
//    @Query("SELECT i FROM OutputContent i WHERE i.goodsId = :id AND i.warehouse = :warehouse AND  i.outputId = :outputId")
//    public OutputContent findWhereId(@PathVariable("id") String id, @PathVariable("warehouse") String warehouse,@PathVariable("outputId") Output outputId);
}
