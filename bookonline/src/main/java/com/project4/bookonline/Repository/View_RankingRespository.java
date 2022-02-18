package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.View_Product_Rank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface View_RankingRespository extends JpaRepository<View_Product_Rank, String> {
    @Query(value = "select TOP 10 Books.Book_name, Books.Books_id,(SELECT COUNT(Review.Rating_start) from Review  where Review.Book_id = Books.Books_id  ) as total_review from Books ORDER BY total_review DESC", nativeQuery = true)
    List<View_Product_Rank> loadRanks();
}
