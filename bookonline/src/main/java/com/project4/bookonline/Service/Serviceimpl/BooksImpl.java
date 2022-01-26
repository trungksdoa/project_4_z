/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Repository.BookRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC
 */
@Service
public class BooksImpl implements com.project4.bookonline.Service.BooksService{
    
    @Autowired
    BookRepository bookRepository;

    @Override
    public List<Books> ListBook() {
        return bookRepository.findAll();
    }

    @Override
    public Books Create(Books books) {
        return bookRepository.save(books);
    }

    @Override
    public void Delete(String id) {
        bookRepository.deleteById(id);
    }
}
