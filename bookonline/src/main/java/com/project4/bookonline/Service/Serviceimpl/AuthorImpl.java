/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Model.Respone_Book_Author;
import com.project4.bookonline.Model.Voucher;
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
    public Authors findOne(int id) {
        Optional<Authors> optional = AuthorRepository.findById(id);
        Authors au = optional.get();
        return au;
    }

    @Override
    public List<String> getBookIds(int id) {
        return AuthorRepository.getId(id);
    }

    @Override
    public Authors Edit(int id, Authors authors) {
        Optional<Authors> optional = AuthorRepository.findById(id);
        Authors au = optional.get();
        Authors newObject = new Authors(null);
        if (au != null) {
            newObject.setAuthorid(authors.getAuthorid());
            newObject.setAuthorImage(authors.getAuthorImage());
            newObject.setAuthorname(authors.getAuthorname());
            newObject.setAuthorinformation(authors.getAuthorinformation());
            newObject.setDatecreated(au.getDatecreated());
            newObject.setModifieddate(authors.getModifieddate());
            newObject.setNumberpublishedbooks(authors.getNumberpublishedbooks());
        }
        return AuthorRepository.save(newObject);
    }

    @Override
    public boolean Delete(int id) {
        Authors findAuthor = AuthorRepository.findById(id).get();
        findAuthor.setStatus(2);
        return AuthorRepository.save(findAuthor) != null ? true : false;
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
