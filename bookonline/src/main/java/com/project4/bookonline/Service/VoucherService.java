/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Voucher;
import java.util.List;

/**
 *
 * @author PC
 */
public interface VoucherService {
    public List<Voucher> listVorcher();
    public Voucher Create(Voucher voucher);
    public void Delete(String id);
}
