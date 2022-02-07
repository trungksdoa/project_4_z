package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Admins;
import com.project4.bookonline.Model.Web_information;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface WebRespository extends JpaRepository<Web_information, Integer> {

}
