/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Catagorys;
import java.util.List;

/**
 *
 * @author PC
 */

public interface CategoryService {
    public List<Catagorys> findAll();
    public void add(Catagorys catagorys);
    public void delete(Catagorys catagorys);
}
