/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Books;
import java.util.List;

/**
 *
 * @author PC
 */
public interface BooksService {
    public List<Books> ListBook();
    public Books Create(Books books);
    public void Delete(String id);
}