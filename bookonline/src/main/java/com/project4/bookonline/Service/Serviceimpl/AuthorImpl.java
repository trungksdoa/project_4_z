/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Respone_Book_Author;
import com.project4.bookonline.Repository.AuthorRepository;
import com.project4.bookonline.Service.AuthorService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author PC
 */
@Service
public class AuthorImpl implements AuthorService {

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
    public Authors Edit(int id, Authors authors) {
        Optional<Authors> optional = AuthorRepository.findById(id);
        Authors au = optional.get();
        Authors newObject = new Authors(null);
        if (au != null) {
            newObject.setAuthorid(au.getAuthorid());
            newObject.setAuthorImage(au.getAuthorImage());
            newObject.setAuthorname(au.getAuthorname());
            newObject.setAuthorinformation(au.getAuthorinformation());
            newObject.setDatecreated(au.getDatecreated());
            newObject.setModifieddate(au.getModifieddate());
            newObject.setNumberpublishedbooks(au.getNumberpublishedbooks());
        }
        return AuthorRepository.save(newObject);
    }

    @Override
    public void Delete(int id) {
        AuthorRepository.deleteById(id);
    }

//    @Override
//    public Authors Create(Authors authors) {
//         return AuthorRepository.save(authors);
//    }
//
//    @Override
//    public void Delete(int id) {
//        AuthorRepository.deleteById(id);
//    }

}
