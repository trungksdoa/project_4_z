/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Respone_Book_Author;

import java.util.List;

/**
 *
 * @author PC
 */
public interface AuthorService {
    public List<Authors> listAll();
    public Authors Create(Authors authors);
    public Authors findOne(int id);
    public Authors Edit(int id,Authors authors);
    public void Delete(int id);
//}
}
