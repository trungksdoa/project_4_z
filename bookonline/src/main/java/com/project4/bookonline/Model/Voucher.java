/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
@Table(name = "Voucher", catalog = "Project_4", schema = "dbo")
@Getter
@Setter
@NoArgsConstructor
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Voucher.findAll", query = "SELECT v FROM Voucher v"),
    @NamedQuery(name = "Voucher.findByVoucherid", query = "SELECT v FROM Voucher v WHERE v.voucherid = :voucherid"),
    @NamedQuery(name = "Voucher.findByVouchertitle", query = "SELECT v FROM Voucher v WHERE v.vouchertitle = :vouchertitle"),
    @NamedQuery(name = "Voucher.findByVoucherdescription", query = "SELECT v FROM Voucher v WHERE v.voucherdescription = :voucherdescription"),
    @NamedQuery(name = "Voucher.findByVoucherstatus", query = "SELECT v FROM Voucher v WHERE v.voucherstatus = :voucherstatus"),
    @NamedQuery(name = "Voucher.findByVoucherfrom", query = "SELECT v FROM Voucher v WHERE v.voucherfrom = :voucherfrom"),
    @NamedQuery(name = "Voucher.findByVoucherto", query = "SELECT v FROM Voucher v WHERE v.voucherto = :voucherto")})
public class Voucher implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "Voucher_id", nullable = false, length = 50)
    private String voucherid;
    @Basic(optional = false)
    @Column(name = "Voucher_title", nullable = false, length = 50)
    private String vouchertitle;
    @Basic(optional = false)
    @Column(name = "Voucher_description", nullable = false, length = 255)
    private String voucherdescription;
    @Basic(optional = false)
    @Column(name = "Voucher_status", nullable = false)
    private int voucherstatus;
    @Basic(optional = false)
    @Column(name = "Voucher_value", nullable = false)
    private int vouchervalue;
    @Basic(optional = false)
    @Column(name = "Voucher_from", nullable = false)
    private String voucherfrom;
    @Basic(optional = false)
    @Column(name = "Voucher_to", nullable = false)
    private String voucherto;
    @Basic(optional = false)
    @Column(name = "Voucher_used", nullable = false)
    private int Voucherused;
    @OneToMany(mappedBy = "ordervoucher")
    private Collection<Orders> ordersCollection;

    @JsonBackReference(value="voucher_order")
    public Collection<Orders> getOrdersCollection() {
        return ordersCollection;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.Voucher[ voucherid=" + voucherid + " ]";
    }
    
}
