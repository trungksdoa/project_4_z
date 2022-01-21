package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Books, String> {
}
