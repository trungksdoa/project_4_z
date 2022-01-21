package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Admin_roles;
import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Model.User;
import com.project4.bookonline.Repository.UserRepository;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UserImpl implements UserService {
    @Autowired
    UserRepository userService;

    private User entity(User user) {
        User entity = new User();
        entity.setUserID(user.getUserID());
        entity.setUserEmail(user.getUserEmail());
        entity.setFirst_name(user.getFirst_name());
        entity.setLast_name(user.getLast_name());
        entity.setUserPassword(user.getUserPassword());
        entity.setBirthday(user.getBirthday());
        entity.setPhone(user.getPhone());
        entity.setStatus(user.getStatus());
        entity.setUserCreatedDate(user.getUserCreatedDate());
        entity.setUserModifiedDate(user.getUserModifiedDate());
        return entity;
    }

    @Override
    public List<User> findAll() {
        return userService.findAll();
    }

    @Override
    public User findOne(String id) {
        Optional<User> option = userService.findById(id);
        User user = option.get();
        return user;
    }

    @Override
    public User findByMail(String email) {
        return userService.checkMail(email);
    }

    @Override
    public String Active(String id) {
        try {
            Optional<User> option = userService.findById(id);
            User user = option.get();
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
            Optional<User> option = userService.findById(id);
            User user = option.get();
            user.setStatus(3);
            userService.save(user);
            return "Success";
        } catch (Exception ex) {
            return "Fail";
        }
    }


    @Override
    public User Update(String id, User paramUser) {
        try {
            Optional<User> option = userService.findById(id);
            User users = option.get();
            User respone = userService.save(entity(users));
            return respone;
        } catch (NullPointerException ex) {
            return null;
        }
    }

    @Override
    public User Login(String email, String password) {
        return userService.login(email, password);
    }

    @Override
    public User Register(User user) {
        user.setStatus(2);
        return userService.save(user);
    }
}
