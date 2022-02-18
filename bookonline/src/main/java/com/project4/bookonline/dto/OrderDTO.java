/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.dto;

import java.util.List;

/**
 *
 * @author PC
 */
public class OrderDTO {
    //Order
    private String orderaddress;
    
    private String orderdistrict;
   
    private String ordercity;
    
    private String ordernote;
    
    private String userid;
   
    private String ordervoucher;
    
    
    private List<OrderDetailDTO> orderDetailDto;
    /**
     * @return the orderaddress
     */
    public String getOrderaddress() {
        return orderaddress;
    }

    public List<OrderDetailDTO> getOrderDetailDto() {
        return orderDetailDto;
    }

    public void setOrderDetailDto(List<OrderDetailDTO> orderDetailDto) {
        this.orderDetailDto = orderDetailDto;
    }

    
    
    /**
     * @param orderaddress the orderaddress to set
     */
    public void setOrderaddress(String orderaddress) {
        this.orderaddress = orderaddress;
    }

    /**
     * @return the orderdistrict
     */
    public String getOrderdistrict() {
        return orderdistrict;
    }

    /**
     * @param orderdistrict the orderdistrict to set
     */
    public void setOrderdistrict(String orderdistrict) {
        this.orderdistrict = orderdistrict;
    }

    /**
     * @return the ordercity
     */
    public String getOrdercity() {
        return ordercity;
    }

    /**
     * @param ordercity the ordercity to set
     */
    public void setOrdercity(String ordercity) {
        this.ordercity = ordercity;
    }

    /**
     * @return the ordernote
     */
    public String getOrdernote() {
        return ordernote;
    }

    /**
     * @param ordernote the ordernote to set
     */
    public void setOrdernote(String ordernote) {
        this.ordernote = ordernote;
    }

    /**
     * @return the userid
     */
    public String getUserid() {
        return userid;
    }

    /**
     * @param userid the userid to set
     */
    public void setUserid(String userid) {
        this.userid = userid;
    }

    /**
     * @return the ordervoucher
     */
    public String getOrdervoucher() {
        return ordervoucher;
    }

    /**
     * @param ordervoucher the ordervoucher to set
     */
    public void setOrdervoucher(String ordervoucher) {
        this.ordervoucher = ordervoucher;
    }
}
