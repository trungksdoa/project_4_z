/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author PC
 */
@Entity
@Table(name = "Order_Detail", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "OrderDetail.findAll", query = "SELECT o FROM OrderDetail o"),
    @NamedQuery(name = "OrderDetail.findByDetailid", query = "SELECT o FROM OrderDetail o WHERE o.detailid = :detailid"),
    @NamedQuery(name = "OrderDetail.findByQuantity", query = "SELECT o FROM OrderDetail o WHERE o.quantity = :quantity"),
    @NamedQuery(name = "OrderDetail.findByTotal", query = "SELECT o FROM OrderDetail o WHERE o.total = :total")})
public class OrderDetail implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Detail_id", nullable = false)
    private Integer detailid;
    @Basic(optional = false)
    @Column(name = "Quantity", nullable = false)
    private int quantity;
    @Basic(optional = false)
    @Column(name = "Total", nullable = false)
    private int total;
    @JoinColumn(name = "Book_id", referencedColumnName = "Books_id", nullable = false)
    @ManyToOne(optional = false)
    private Books bookid;
    @JoinColumn(name = "Order_id", referencedColumnName = "Order_id", nullable = false)
    @ManyToOne(optional = false)
    private Orders orderid;

    public OrderDetail() {
    }

    public OrderDetail(Integer detailid) {
        this.detailid = detailid;
    }

    public OrderDetail(Integer detailid, int quantity, int total) {
        this.detailid = detailid;
        this.quantity = quantity;
        this.total = total;
    }

    public Integer getDetailid() {
        return detailid;
    }

    public void setDetailid(Integer detailid) {
        this.detailid = detailid;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public Books getBookid() {
        return bookid;
    }

    public void setBookid(Books bookid) {
        this.bookid = bookid;
    }


    public Orders getOrderid() {
        return orderid;
    }

    public void setOrderid(Orders orderid) {
        this.orderid = orderid;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (detailid != null ? detailid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof OrderDetail)) {
            return false;
        }
        OrderDetail other = (OrderDetail) object;
        if ((this.detailid == null && other.detailid != null) || (this.detailid != null && !this.detailid.equals(other.detailid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.OrderDetail[ detailid=" + detailid + " ]";
    }
    
}
