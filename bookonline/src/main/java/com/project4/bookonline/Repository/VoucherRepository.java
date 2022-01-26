/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/ReactRepository.java to edit this template
 */
package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author PC
 */
@Repository
public interface VoucherRepository extends JpaRepository<Voucher, String> {
    
}
