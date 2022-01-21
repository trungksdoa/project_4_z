/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Voucher;
import com.project4.bookonline.Repository.VoucherRepository;
import com.project4.bookonline.Service.VoucherService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC
 */
@Service
public class VoucherImpl implements VoucherService{
    
    @Autowired
    VoucherRepository Voucher;
    @Override
    public List<Voucher> findAll() {
        return Voucher.findAll();
    }

    @Override
    public void delete(Voucher voucher) {
        Voucher.delete(voucher);
    }

 
    
}
