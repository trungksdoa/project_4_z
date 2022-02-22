/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Voucher;
import com.project4.bookonline.Repository.VoucherRepository;
import com.project4.bookonline.Service.VoucherService;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author PC
 */
@Service
public class VoucherImpl implements VoucherService {
    @Autowired
    VoucherRepository voucherRepository;

    @Override
    public List<Voucher> listVorcher() {
        return voucherRepository.findAll();
    }

    @Override
    public boolean findOne(String id) {
        try {
            voucherRepository.findById(id).get();
            return true;
        } catch (NoSuchElementException ex) {
            return false;
        }
    }

    @Override
    public Voucher findOnebyid(String id) {
        return voucherRepository.findById(id).get();
    }

    @Override
    public Voucher findById(String id) {
        try {
            return voucherRepository.findOne(id);
        } catch (NoSuchElementException ex) {
            return null;
        }
    }

    @Override
    public Voucher Create(Voucher voucher) {
        return voucherRepository.save(voucher);
    }

    @Override
    public boolean Delete(String id) {
        Voucher voucher = voucherRepository.getById(id);
        voucher.setVoucherstatus(2);
        return voucherRepository.save(voucher) != null ? true : false;
    }
}
