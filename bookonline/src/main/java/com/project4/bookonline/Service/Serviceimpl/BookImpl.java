package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Repository.BookRepository;
import com.project4.bookonline.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookImpl implements BookService {
    @Autowired
    BookRepository BookService;

    @Override
    public List<Books> findAll() {
        return BookService.findAll();
    }
}