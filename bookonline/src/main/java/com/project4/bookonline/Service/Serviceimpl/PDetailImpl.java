/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.PDetail;
import com.project4.bookonline.Repository.BDetailsRepository;
import com.project4.bookonline.Service.PDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC
 */
@Service
public class PDetailImpl implements PDetailService{
 
    @Autowired
    BDetailsRepository BDetailsRepository;
    
    @Override
    public PDetail Create(PDetail pDetail) {
        return BDetailsRepository.save(pDetail);
    }

    @Override
    public PDetail findOne(int id) {
        return BDetailsRepository.findOne(id);
    }
    
}
