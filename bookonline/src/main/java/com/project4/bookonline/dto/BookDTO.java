/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.dto;

/**
 *
 * @author PC
 */
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
    private String bookmodifieddate;
    private String bookcreateddate;
    private int amounts;
    private int authorid;
    private int pDetailid;
    private int status;



    public BookDTO() {
    }

    public BookDTO( String format, Integer pages, String dimensions, String language, String illustrationsnote, String bookname, int bookprice, String bookdescription, String bookreleasedate, String bookmodifieddate, String bookcreateddate, int amounts, int authorid, int pDetailid, int status) {
        this.format = format;
        this.pages = pages;
        this.dimensions = dimensions;
        this.language = language;
        this.illustrationsnote = illustrationsnote;
        this.bookname = bookname;
        this.bookprice = bookprice;
        this.bookdescription = bookdescription;
        this.bookreleasedate = bookreleasedate;
        this.bookmodifieddate = bookmodifieddate;
        this.bookcreateddate = bookcreateddate;
        this.amounts = amounts;
        this.authorid = authorid;
        this.pDetailid = pDetailid;
        this.status = status;
    }
    /**
     * @return the format
     */
    public String getFormat() {
        return format;
    }

    /**
     * @param format the format to set
     */
    public void setFormat(String format) {
        this.format = format;
    }

    /**
     * @return the pages
     */
    public Integer getPages() {
        return pages;
    }

    /**
     * @param pages the pages to set
     */
    public void setPages(Integer pages) {
        this.pages = pages;
    }

    /**
     * @return the dimensions
     */
    public String getDimensions() {
        return dimensions;
    }

    /**
     * @param dimensions the dimensions to set
     */
    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    /**
     * @return the language
     */
    public String getLanguage() {
        return language;
    }

    /**
     * @param language the language to set
     */
    public void setLanguage(String language) {
        this.language = language;
    }

    /**
     * @return the illustrationsnote
     */
    public String getIllustrationsnote() {
        return illustrationsnote;
    }

    /**
     * @param illustrationsnote the illustrationsnote to set
     */
    public void setIllustrationsnote(String illustrationsnote) {
        this.illustrationsnote = illustrationsnote;
    }

    /**
     * @return the bookname
     */
    public String getBookname() {
        return bookname;
    }

    /**
     * @param bookname the bookname to set
     */
    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    /**
     * @return the bookprice
     */
    public int getBookprice() {
        return bookprice;
    }

    /**
     * @param bookprice the bookprice to set
     */
    public void setBookprice(int bookprice) {
        this.bookprice = bookprice;
    }

    /**
     * @return the bookdescription
     */
    public String getBookdescription() {
        return bookdescription;
    }

    /**
     * @param bookdescription the bookdescription to set
     */
    public void setBookdescription(String bookdescription) {
        this.bookdescription = bookdescription;
    }

    /**
     * @return the bookreleasedate
     */
    public String getBookreleasedate() {
        return bookreleasedate;
    }

    /**
     * @param bookreleasedate the bookreleasedate to set
     */
    public void setBookreleasedate(String bookreleasedate) {
        this.bookreleasedate = bookreleasedate;
    }

    /**
     * @return the bookmodifieddate
     */
    public String getBookmodifieddate() {
        return bookmodifieddate;
    }

    /**
     * @param bookmodifieddate the bookmodifieddate to set
     */
    public void setBookmodifieddate(String bookmodifieddate) {
        this.bookmodifieddate = bookmodifieddate;
    }

    /**
     * @return the bookcreateddate
     */
    public String getBookcreateddate() {
        return bookcreateddate;
    }

    /**
     * @param bookcreateddate the bookcreateddate to set
     */
    public void setBookcreateddate(String bookcreateddate) {
        this.bookcreateddate = bookcreateddate;
    }

    /**
     * @return the amounts
     */
    public int getAmounts() {
        return amounts;
    }

    /**
     * @param amounts the amounts to set
     */
    public void setAmounts(int amounts) {
        this.amounts = amounts;
    }

    /**
     * @return the authorid
     */
    public int getAuthorid() {
        return authorid;
    }

    /**
     * @param authorid the authorid to set
     */
    public void setAuthorid(int authorid) {
        this.authorid = authorid;
    }

    /**
     * @return the pDetailid
     */
    public int getpDetailid() {
        return pDetailid;
    }

    /**
     * @param pDetailid the pDetailid to set
     */
    public void setpDetailid(int pDetailid) {
        this.pDetailid = pDetailid;
    }

    /**
     * @return the status
     */
    public int getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(int status) {
        this.status = status;
    }
    
}
