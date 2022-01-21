/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Catagorys;
import com.project4.bookonline.Repository.CategoryRepository;
import com.project4.bookonline.Service.CategoryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC
 */
@Service
public class CategorysImpl implements CategoryService{

    @Autowired
    CategoryRepository CategorysService;
    @Override
    public List<Catagorys> findAll() {
       return CategorysService.findAll();
    }

    @Override
    public void add(Catagorys catagorys) {
       CategorysService.save(catagorys);
    }

    @Override
    public void delete(Catagorys catagorys) {
        CategorysService.delete(catagorys);
    }
    
}
