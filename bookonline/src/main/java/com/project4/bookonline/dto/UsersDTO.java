package com.project4.bookonline.dto;

import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Wishlist;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UsersDTO {
    private String UserID;
    private String first_name;
    private String last_name;
    private String user_email;
    private String birthday;
    private String password;
    private String phone;

    public Users convert_update(UsersDTO dto) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Users users = new Users();
        users.setLastName(dto.getLast_name());
        users.setFirstName(dto.getFirst_name());
        users.setUserpassword(dto.getPassword());
        users.setBirthday(dtf.format(now));
        users.setPhone(dto.getPhone());
        return users;
    }
}
