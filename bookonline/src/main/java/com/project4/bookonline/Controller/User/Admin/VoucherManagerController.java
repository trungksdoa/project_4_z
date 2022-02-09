/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User.Admin;

import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Voucher;
import com.project4.bookonline.Service.VoucherService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author PC
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class VoucherManagerController {

    @Autowired
    VoucherService voucherService;

    @RequestMapping(value = "/voucher/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Voucher>> findAll() {
        List<Voucher> v = voucherService.listVorcher();
        Message_Respones<Voucher> setMessage = new Message_Respones<Voucher>();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(v);
        setMessage.setCode(Integer.valueOf(HttpStatus.OK + ""));
        return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.OK);
    }
}
