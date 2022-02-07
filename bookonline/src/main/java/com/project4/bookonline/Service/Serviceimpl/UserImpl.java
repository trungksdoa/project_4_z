package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Repository.UserRepository;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UserImpl implements UserService {
    @Autowired
    UserRepository userService;

    private Users entity(Users user, Users preData) {
        Users entity = new Users();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        //Update data
        entity.setFirstName(user.getFirstName());
        entity.setLastName(user.getLastName());
        entity.setUserpassword(user.getUserpassword());
        entity.setBirthday(user.getBirthday());
        entity.setPhone(user.getPhone());
        entity.setUsermodifieddate(dtf.format(now));
        //Previous data
        entity.setUserid(preData.getUserid());
        entity.setUseremail(preData.getUseremail());
        entity.setStatus(preData.getStatus());
        entity.setUsercreateddate(preData.getUsercreateddate());
        return entity;
    }

    @Override
    public List<Users> findAll() {
        return userService.findAll();
    }

    @Override
    public Users findOne(String id) {
        try {
            Optional<Users> option = userService.findById(id);
            Users user = option.get();
            return user;
        } catch (java.util.NoSuchElementException ex) {
            return null;
        }
    }

    @Override
    public Users findByMail(String email) {
        return userService.checkMail(email);
    }
    @Override
    public String Active(String id) {
        try {
            Optional<Users> option = userService.findById(id);
            Users user = option.get();
            user.setStatus(1);
            userService.save(user);
            return "Success";
        } catch (NullPointerException | NoSuchElementException ex) {
            return "Fail";
        }
    }

    @Override
    public String Ban(String id) {
        try {
            Optional<Users> option = userService.findById(id);
            Users user = option.get();
            user.setStatus(3);
            userService.save(user);
            return "Success";
        } catch (Exception ex) {
            return "Fail";
        }
    }

    @Override
    public String UnBan(String id) {
        try {
            Optional<Users> option = userService.findById(id);
            Users user = option.get();
            user.setStatus(1);
            userService.save(user);
            return "Success";
        } catch (Exception ex) {
            return "Fail";
        }
    }


    @Override
    public Users Update(String id, Users paramUser) {
        try {
            Optional<Users> option = userService.findById(id);
            Users user2 = option.get();
            Users user3 = entity(paramUser, user2);
            Users respone = userService.save(user3);
            return respone;
        } catch (NullPointerException ex) {
            return null;
        }
    }

    @Override
    public Users Login(String email, String password) {
        return userService.login(email, password);
    }

    @Override
    public Users Register(Users user) {
        return userService.save(user);
    }
}
