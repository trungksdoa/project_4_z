/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author PC
 */
@Entity
@Table(name = "Orders", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Orders.findAll", query = "SELECT o FROM Orders o"),
    @NamedQuery(name = "Orders.findByOrderid", query = "SELECT o FROM Orders o WHERE o.orderid = :orderid"),
    @NamedQuery(name = "Orders.findByOrdercreateddate", query = "SELECT o FROM Orders o WHERE o.ordercreateddate = :ordercreateddate"),
    @NamedQuery(name = "Orders.findByOrderaddress", query = "SELECT o FROM Orders o WHERE o.orderaddress = :orderaddress"),
    @NamedQuery(name = "Orders.findByOrderdistrict", query = "SELECT o FROM Orders o WHERE o.orderdistrict = :orderdistrict"),
    @NamedQuery(name = "Orders.findByOrdercity", query = "SELECT o FROM Orders o WHERE o.ordercity = :ordercity"),
    @NamedQuery(name = "Orders.findByOrderstatus", query = "SELECT o FROM Orders o WHERE o.orderstatus = :orderstatus"),
    @NamedQuery(name = "Orders.findByOrdernote", query = "SELECT o FROM Orders o WHERE o.ordernote = :ordernote")})
public class Orders implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Order_id", nullable = false)
    private Integer orderid;
    @Basic(optional = false)
    @Column(name = "Order_createddate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date ordercreateddate;
    @Basic(optional = false)
    @Column(name = "Order_address", nullable = false, length = 50)
    private String orderaddress;
    @Basic(optional = false)
    @Column(name = "Order_district", nullable = false, length = 50)
    private String orderdistrict;
    @Basic(optional = false)
    @Column(name = "Order_city", nullable = false, length = 50)
    private String ordercity;
    @Basic(optional = false)
    @Column(name = "Order_status", nullable = false)
    private int orderstatus;
    @Column(name = "Order_note", length = 50)
    private String ordernote;
    @JoinColumn(name = "User_id", referencedColumnName = "User_id", nullable = false)
    @ManyToOne(optional = false)
    private User userid;
    @JoinColumn(name = "Order_voucher", referencedColumnName = "Voucher_id")
    @ManyToOne
    private Voucher ordervoucher;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "orderid")
    private Collection<OrderDetail> orderDetailCollection;

    public Orders() {
    }

    public Orders(Integer orderid) {
        this.orderid = orderid;
    }

    public Orders(Integer orderid, Date ordercreateddate, String orderaddress, String orderdistrict, String ordercity, int orderstatus) {
        this.orderid = orderid;
        this.ordercreateddate = ordercreateddate;
        this.orderaddress = orderaddress;
        this.orderdistrict = orderdistrict;
        this.ordercity = ordercity;
        this.orderstatus = orderstatus;
    }

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public Date getOrdercreateddate() {
        return ordercreateddate;
    }

    public void setOrdercreateddate(Date ordercreateddate) {
        this.ordercreateddate = ordercreateddate;
    }

    public String getOrderaddress() {
        return orderaddress;
    }

    public void setOrderaddress(String orderaddress) {
        this.orderaddress = orderaddress;
    }

    public String getOrderdistrict() {
        return orderdistrict;
    }

    public void setOrderdistrict(String orderdistrict) {
        this.orderdistrict = orderdistrict;
    }

    public String getOrdercity() {
        return ordercity;
    }

    public void setOrdercity(String ordercity) {
        this.ordercity = ordercity;
    }

    public int getOrderstatus() {
        return orderstatus;
    }

    public void setOrderstatus(int orderstatus) {
        this.orderstatus = orderstatus;
    }

    public String getOrdernote() {
        return ordernote;
    }

    public void setOrdernote(String ordernote) {
        this.ordernote = ordernote;
    }

    public User getUserid() {
        return userid;
    }

    public void setUserid(User userid) {
        this.userid = userid;
    }

    public Voucher getOrdervoucher() {
        return ordervoucher;
    }

    public void setOrdervoucher(Voucher ordervoucher) {
        this.ordervoucher = ordervoucher;
    }

    @XmlTransient
    public Collection<OrderDetail> getOrderDetailCollection() {
        return orderDetailCollection;
    }

    public void setOrderDetailCollection(Collection<OrderDetail> orderDetailCollection) {
        this.orderDetailCollection = orderDetailCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (orderid != null ? orderid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Orders)) {
            return false;
        }
        Orders other = (Orders) object;
        if ((this.orderid == null && other.orderid != null) || (this.orderid != null && !this.orderid.equals(other.orderid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.Orders[ orderid=" + orderid + " ]";
    }
    
}
