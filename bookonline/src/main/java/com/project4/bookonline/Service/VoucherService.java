/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Voucher;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC
 */
@Service
public interface VoucherService {
    public List<Voucher> findAll();
    public void delete(Voucher voucher);
}
