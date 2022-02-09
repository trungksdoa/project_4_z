package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Banner;
import com.project4.bookonline.Model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BannerRespository extends JpaRepository<Banner, Integer> {

}
