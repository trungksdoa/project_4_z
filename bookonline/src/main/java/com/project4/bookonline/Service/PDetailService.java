/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.project4.bookonline.Service;

import com.project4.bookonline.Model.PDetail;

/**
 *
 * @author PC
 */
public interface PDetailService {
    public PDetail Create(PDetail pDetail);
    public PDetail findOne(int id);
}
