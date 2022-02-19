/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Groupdetail;
import java.util.List;

/**
 *
 * @author PC
 */
public interface GDetailService {
    public List<Groupdetail> findAll();
    public Groupdetail create(Groupdetail groupdetail);
    public Groupdetail findOne(int id);
    public List<Groupdetail> findByCategory(int id);
            
}
