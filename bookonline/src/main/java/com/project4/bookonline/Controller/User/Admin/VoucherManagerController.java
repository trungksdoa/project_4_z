/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Controller.User.Admin;

import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Voucher;
import com.project4.bookonline.Service.VoucherService;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;

import com.project4.bookonline.dto.VoucherDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author PC
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping("/admin/api")
public class VoucherManagerController {
    Voucher convert;
    Message_Respones<Voucher> setMessage;
    @Autowired
    VoucherService voucherService;

    @RequestMapping(value = "/voucher/findAll", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Voucher>> findAll() {
        List<Voucher> v = voucherService.listVorcher();
        Message_Respones<Voucher> setMessage = new Message_Respones<Voucher>();
        String msg = "Get data success";
        setMessage.setMessage(msg);
        setMessage.setList(v);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.OK);
    }


    @RequestMapping(value = "/voucher/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Voucher>> Save(@RequestBody VoucherDTO voucher) {
        setMessage = new Message_Respones<Voucher>();
        Voucher exixsts = voucherService.findById(voucher.getVoucherid());
        if (exixsts != null) {
            String msg = "ID already exists";
            setMessage.setMessage(msg);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
            convert = voucher.convert(voucher);
            Voucher v = voucherService.Create(convert);
            String msg = "Get data success";
            setMessage.setMessage(msg);
            setMessage.setObject(v);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/voucher/update/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Voucher>> Updates(@PathVariable String id, @RequestBody VoucherDTO voucher) {
        setMessage = new Message_Respones<Voucher>();
        boolean existsId = voucherService.findOne(id);
        if (existsId) {
            convert = voucher.convert(voucher);
            Voucher v = voucherService.Create(convert);
            String msg = "Update success";
            setMessage.setMessage(msg);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.OK);
        } else {
            String msg = "Not found";
            setMessage.setMessage(msg);
            setMessage.setCode(404);
            return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.NOT_FOUND);
        }
//        try {
//
//        } catch (Exception e) {
//            setMessage.setMessage(e.getMessage());
//            setMessage.setCode(0);
//            return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
//        }


    }

    @RequestMapping(value = "/voucher/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Message_Respones<Voucher>> deleted(@PathVariable String id) {
        boolean isDeleted = voucherService.Delete(id);
        Message_Respones<Voucher> setMessage = new Message_Respones<Voucher>();
        try {
            if (isDeleted) {
                String msg = "Deleted successful";
                setMessage.setMessage(msg);
                setMessage.setCode(200);
                return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.OK);
            } else {
                String msg = "Deleted fails";
                setMessage.setMessage(msg);
                return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception ex) {
            String msg = ex.getMessage();
            setMessage.setMessage(msg);
            return new ResponseEntity<Message_Respones<Voucher>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
