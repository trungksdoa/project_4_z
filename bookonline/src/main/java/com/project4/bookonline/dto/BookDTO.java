/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 *
 * @author PC
 */
@Getter
@Setter
@NoArgsConstructor
public class BookDTO {
    // Pdetail
    private String format;
    private Integer pages;
    private String dimensions;
    private String language;
    private String illustrationsnote;
    // Book
    private String bookname;
    private int bookprice;
    private String bookdescription;
    private String bookreleasedate;
    private int amounts;
    private int authorid;

    private List<String> groupdto;


    
}
