/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.User.Admin;

import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Service.AdminService;
import com.project4.bookonline.dto.AdminDTO;
import com.project4.bookonline.dto.UsersDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class AdminManageController {
    String respone;
    String msg;
    Message_Respones<Admins> setMessage;
    @Autowired
    AdminService adminServide;

    @RequestMapping(value = "/admin/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Admins>> findAll() {
        List<Admins> admins = adminServide.findAll();
        msg = "Get data success";
        setMessage = new Message_Respones<Admins>();
        setMessage.setMessage(msg);
        setMessage.setList(admins);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.OK);
    }


    @RequestMapping(value = "/admin/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Admins>> findOne(@PathVariable String id) {

        setMessage = new Message_Respones<Admins>();
        boolean isRequestOwner = Integer.valueOf(id) == 1;
        if (isRequestOwner) {
            msg = "Not found";
            setMessage.setMessage(msg);
            setMessage.setCode(404);
            return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.NOT_FOUND);
        }
        Admins admin = adminServide.findOne(Integer.valueOf(id));
        if (admin == null) {
            msg = "Data not found";
            setMessage.setMessage(msg);
            setMessage.setCode(404);
            return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.NOT_FOUND);
        }
        msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setObject(admin);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.OK);

    }

    @RequestMapping(value = "/admin/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Message_Respones<Admins>> Delete(@PathVariable String id) {
        boolean isDelete = adminServide.Delete(Integer.valueOf(id));
        setMessage = new Message_Respones<Admins>();
        if (isDelete) {
            msg = "Delete success";
            setMessage.setMessage(msg);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.OK);
        } else {
            msg = "Delete fails";
            setMessage.setMessage(msg);
            setMessage.setCode(500);
            return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @RequestMapping(value = "/admin/update/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Admins>> Update(@PathVariable String id, @RequestBody AdminDTO admin) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        Admins exists = adminServide.findOne(Integer.valueOf(id));
        setMessage = new Message_Respones<Admins>();
        if (exists != null) {
            boolean rolesExists = adminServide.CheckroleById(admin.getRoles(), exists.getAdminid());
            if (rolesExists) {
                exists.setAdminpassword(admin.getAdminpassword());
                exists.setAdminmodifieddate(dtf.format(now));
                Admins data_save = adminServide.Save(exists);
                msg = "Update success";
                setMessage.setMessage(msg);
                setMessage.setObject(data_save);
                setMessage.setCode(200);
                return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.OK);
            } else {
                boolean isExists = adminServide.Checkrole(admin.getRoles());
                if (isExists) {
                    msg = "This role has been delegated";
                    setMessage.setMessage(msg);
                    setMessage.setCode(409);
                    return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.CONFLICT);
                } else {
                    exists.setRoles(admin.getRoles());
                    exists.setAdminpassword(admin.getAdminpassword());
                    exists.setAdminmodifieddate(dtf.format(now));

                    Admins data_save = adminServide.Save(exists);
                    msg = "Update success";
                    setMessage.setMessage(msg);
                    setMessage.setObject(data_save);
                    setMessage.setCode(200);
                    return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.OK);
                }
            }

        } else {
            msg = "Not found";
            setMessage.setMessage(msg);
            setMessage.setCode(404);
            return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Admins>> Login(@RequestBody AdminDTO admin) {
        Admins admins = adminServide.Login(admin.getAdminemail(), admin.getAdminpassword());
        if (admins == null) {
            msg = "Login fail";
            setMessage = new Message_Respones<Admins>();
            setMessage.setMessage(msg);
            setMessage.setCode(404);
            return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.NOT_FOUND);
        } else {
            msg = "Login success";
            setMessage = new Message_Respones<Admins>();
            setMessage.setMessage(msg);
            setMessage.setObject(admins);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/admin/Create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Admins>> Create(@RequestBody AdminDTO admin) {
        //get current date
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();

        Admins admins = adminServide.Checkmail(admin.getAdminemail());
        setMessage = new Message_Respones<Admins>();
        if (admins != null) {
            msg = "Emails have been exists";
            setMessage.setMessage(msg);
            setMessage.setCode(409);
            return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.CONFLICT);
        } else {
            boolean rolesExists = adminServide.Checkrole(admin.getRoles());
            if (rolesExists) {
                msg = "This role has been delegated";
                setMessage.setMessage(msg);
                setMessage.setCode(409);
                return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.CONFLICT);
            } else {
                admins = new Admins();
                admins.setAdminemail(admin.getAdminemail());
                admins.setAdminpassword(admin.getAdminpassword());
                admins.setRoles(admin.getRoles());
                admins.setAdmincreateddate(dtf.format(now));
                admins.setAdminmodifieddate(dtf.format(now));
                System.out.println(admins.getAdminemail());
                Admins saves = adminServide.Save(admins);
                String msg = "Create success";
                setMessage.setMessage(msg);
                setMessage.setObject(saves);
                setMessage.setCode(200);
                return new ResponseEntity<Message_Respones<Admins>>(setMessage, HttpStatus.OK);
            }
        }
    }
}
