/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User;

import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Orders;
import com.project4.bookonline.Model.Users;
import com.project4.bookonline.Model.Voucher;
import com.project4.bookonline.Service.OrderService;
import com.project4.bookonline.Service.VoucherService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author PC
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class VoucherController {
    Voucher voucher;
    Message_Respones<Voucher> setMessage;
    @Autowired
    VoucherService voucherService;

    @Autowired
    OrderService orderService;

    @RequestMapping(value = "/voucher/check/{voucher}/{userId}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Voucher>> Check(@PathVariable String voucher, @PathVariable String userId) {
        setMessage = new Message_Respones<Voucher>();

        boolean existsId = voucherService.findOne(voucher);

        if (existsId) {
            Voucher existsVoucher = voucherService.findById(voucher);
            LocalDateTime now = LocalDateTime.now();
            String expired = existsVoucher.getVoucherto().toString();
            SimpleDateFormat sdformat = new SimpleDateFormat("yyyy-MM-dd");
            Date currentDate = null;
            try {
                currentDate = sdformat.parse(now.toLocalDate().toString());
            } catch (ParseException e) {
                e.printStackTrace();
            }
            Date expiredDate = null;
            try {
                expiredDate = sdformat.parse(expired);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            String msg = "Success";
            if (currentDate.compareTo(expiredDate) > 0) {
                msg = "Voucher is expired";
                setMessage.setMessage(msg);
                setMessage.setObject(voucherService.findOnebyid(voucher));
                setMessage.setCode(403);
                return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.FORBIDDEN);
            } else {
                Voucher setVCId = new Voucher();
                Users setuserId = new Users();
                setVCId.setVoucherid(voucher);
                setuserId.setUserid(userId);

                if (existsVoucher.getVoucherused() == 0) {
                    msg = "Voucher is expired";
                    setMessage.setMessage(msg);
                    setMessage.setObject(voucherService.findOnebyid(voucher));
                    setMessage.setCode(403);
                    return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.FORBIDDEN);
                }
                Orders getOrders = orderService.checkusedVoucher(setuserId, setVCId);
                if (getOrders != null) {
                    msg = "Voucher already used in the order # " + getOrders.getOrderid();
                    setMessage.setMessage(msg);
                    setMessage.setObject(voucherService.findOnebyid(voucher));
                    setMessage.setCode(403);
                    return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.FORBIDDEN);
                }
                setMessage.setMessage(msg);
                setMessage.setObject(voucherService.findOnebyid(voucher));
                setMessage.setCode(200);
                return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.OK);
            }

        } else {
            String msg = "No voucher found";
            setMessage.setMessage(msg);
            setMessage.setCode(404);
            return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.NOT_FOUND);
        }
    }
}
