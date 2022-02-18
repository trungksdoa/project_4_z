/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User;

import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Voucher;
import com.project4.bookonline.Service.VoucherService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 *
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
    @RequestMapping(value = "/voucher/check/{voucher}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Voucher>> Check(@PathVariable String voucher) {
         setMessage = new Message_Respones<Voucher>();
         System.out.println(voucher);
         boolean existsId = voucherService.findOne(voucher);

         if (existsId) {
            String msg = "Success";
            setMessage.setMessage(msg);
            setMessage.setObject(voucherService.findOnebyid(voucher));
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Voucher>>(setMessage,HttpStatus.OK);
        } else {
            String msg = "Fails";
            setMessage.setMessage(msg);
            setMessage.setCode(500);
            return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
