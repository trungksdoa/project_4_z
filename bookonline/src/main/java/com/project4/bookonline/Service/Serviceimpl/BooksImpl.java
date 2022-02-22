/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/Service.java to edit this template
 */
package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Authors;
import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Repository.BookRepository;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author PC
 */
@Service
public class BooksImpl implements com.project4.bookonline.Service.BooksService {

    @Autowired
    BookRepository bookRepository;

    @Override
    public List<Books> ListBook() {
        return bookRepository.findAll();
    }

    @Override
    public List<Books> LoadByAuthor(int authorId) {
        Authors authorsId = new Authors();
        authorsId.setAuthorid(authorId);
        return bookRepository.findByAuthor(authorsId);
    }

    @Override
    public Books Create(Books books) {
        return bookRepository.save(books);
    }

    @Override
    public Books findOne(String id) {
        try {
            return bookRepository.findOne(id);
        }catch(NoSuchElementException ex){
            return null;
        }
    }

    @Override
    public void Delete(String id) {
        bookRepository.deleteById(id);
    }

    @Override
    public void DeleteAllBy(List<String> id) {
        bookRepository.deleteAllById(id);
    }

    @Override
    public List<Books> findtoporder() {
        return bookRepository.findtoporder();
    }

    @Override
    public List<Books> topreleasedateBook() {
        return bookRepository.topreleasedateBook();
    }

    @Override
    public List<Books> toprattingBook() {
        return bookRepository.toprattingBook();
    }
}
