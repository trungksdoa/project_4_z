package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Book;
import com.project4.bookonline.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, String> {
}
