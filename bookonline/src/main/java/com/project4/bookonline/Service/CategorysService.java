/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Catagorys;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC
 */
public interface CategorysService {
    public List<Catagorys> List_categorys();
    public Catagorys Create(Catagorys catagorys);
    public void Delete(int id);
    public Catagorys findOne(int id);
}
