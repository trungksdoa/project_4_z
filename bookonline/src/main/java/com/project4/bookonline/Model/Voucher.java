/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

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
    @Column(name = "Voucher_id")
    private String voucherid;
    @Basic(optional = false)
    @Column(name = "Voucher_title")
    private String vouchertitle;
    @Basic(optional = false)
    @Column(name = "Voucher_description")
    private String voucherdescription;
    @Basic(optional = false)
    @Column(name = "Voucher_status")
    private int voucherstatus;
    @Basic(optional = false)
    @Column(name = "Voucher_from")
    @Temporal(TemporalType.TIMESTAMP)
    private Date voucherfrom;
    @Basic(optional = false)
    @Column(name = "Voucher_to")
    @Temporal(TemporalType.TIMESTAMP)
    private Date voucherto;
    @OneToMany(mappedBy = "ordervoucher")
    private Collection<Orders> ordersCollection;

    public Voucher() {
    }

    public Voucher(String voucherid) {
        this.voucherid = voucherid;
    }

    public Voucher(String voucherid, String vouchertitle, String voucherdescription, int voucherstatus, Date voucherfrom, Date voucherto) {
        this.voucherid = voucherid;
        this.vouchertitle = vouchertitle;
        this.voucherdescription = voucherdescription;
        this.voucherstatus = voucherstatus;
        this.voucherfrom = voucherfrom;
        this.voucherto = voucherto;
    }

    public String getVoucherid() {
        return voucherid;
    }

    public void setVoucherid(String voucherid) {
        this.voucherid = voucherid;
    }

    public String getVouchertitle() {
        return vouchertitle;
    }

    public void setVouchertitle(String vouchertitle) {
        this.vouchertitle = vouchertitle;
    }

    public String getVoucherdescription() {
        return voucherdescription;
    }

    public void setVoucherdescription(String voucherdescription) {
        this.voucherdescription = voucherdescription;
    }

    public int getVoucherstatus() {
        return voucherstatus;
    }

    public void setVoucherstatus(int voucherstatus) {
        this.voucherstatus = voucherstatus;
    }

    public Date getVoucherfrom() {
        return voucherfrom;
    }

    public void setVoucherfrom(Date voucherfrom) {
        this.voucherfrom = voucherfrom;
    }

    public Date getVoucherto() {
        return voucherto;
    }

    public void setVoucherto(Date voucherto) {
        this.voucherto = voucherto;
    }

    @XmlTransient
    public Collection<Orders> getOrdersCollection() {
        return ordersCollection;
    }

    public void setOrdersCollection(Collection<Orders> ordersCollection) {
        this.ordersCollection = ordersCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (voucherid != null ? voucherid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Voucher)) {
            return false;
        }
        Voucher other = (Voucher) object;
        if ((this.voucherid == null && other.voucherid != null) || (this.voucherid != null && !this.voucherid.equals(other.voucherid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.Voucher[ voucherid=" + voucherid + " ]";
    }
    
}
