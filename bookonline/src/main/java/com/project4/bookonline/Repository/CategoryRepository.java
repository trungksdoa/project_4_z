    /*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.project4.bookonline.Repository;

import com.project4.bookonline.Model.Catagorys;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author PC
 */
public interface CategoryRepository extends JpaRepository<Catagorys, String>{
    
}
