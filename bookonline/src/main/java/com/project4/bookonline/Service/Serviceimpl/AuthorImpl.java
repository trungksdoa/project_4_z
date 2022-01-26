/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Repository.AuthorRepository;
import com.project4.bookonline.Service.AuthorService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC
 */
@Service
public class AuthorImpl implements AuthorService{

    @Autowired
    AuthorRepository AuthorRepository;
    @Override
    public List<Authors> listAll() {
       return AuthorRepository.findAll();
    }

    @Override
    public Authors Create(Authors authors) {
         return AuthorRepository.save(authors);
    }

    @Override
    public void Delete(int id) {
        AuthorRepository.deleteById(id);
    }
    
}
