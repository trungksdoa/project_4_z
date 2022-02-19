/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Groupdetail;
import com.project4.bookonline.Repository.GDetailRespository;
import com.project4.bookonline.Service.GDetailService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC
 */
@Service
public class GDetailImpl implements GDetailService{

    @Autowired
    GDetailRespository GDetailRespository;
    @Override
    public Groupdetail create(Groupdetail groupdetail) {
         return GDetailRespository.save(groupdetail);
    }

    @Override
    public List<Groupdetail> findAll() {
        return GDetailRespository.findAll();//To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Groupdetail findOne(int id) {
        Optional<Groupdetail> optional = GDetailRespository.findById(id);
        Groupdetail gr= optional.get();
        return gr;
    }

    @Override
    public List<Groupdetail> findByCategory(int id) {
        return GDetailRespository.findByCategory(id);
    }

 
    
}
