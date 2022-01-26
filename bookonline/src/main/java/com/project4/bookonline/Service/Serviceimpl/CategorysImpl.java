/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Catagorys;
import com.project4.bookonline.Repository.CategoryRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC
 */
@Service
public class CategorysImpl implements com.project4.bookonline.Service.CategorysService{
    
    @Autowired
    CategoryRepository CategoryRepository;
    
    @Override
    public List<Catagorys> List_categorys() {
         return CategoryRepository.findAll();
    }

    @Override
    public Catagorys Create(Catagorys catagorys) {
        return CategoryRepository.save(catagorys);
    }

    @Override
    public void Delete(int id) {
        CategoryRepository.deleteById(id);
    }
    
}
