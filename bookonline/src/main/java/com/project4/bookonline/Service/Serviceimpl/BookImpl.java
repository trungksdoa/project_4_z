package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Book;
import com.project4.bookonline.Model.User;
import com.project4.bookonline.Repository.BookRepository;
import com.project4.bookonline.Repository.UserRepository;
import com.project4.bookonline.Service.BookService;
import com.project4.bookonline.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookImpl implements BookService {
    @Autowired
    BookRepository BookService;

    @Override
    public List<Book> findAll() {
        return BookService.findAll();
    }
}