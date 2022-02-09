/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author PC
 */
@Entity
@Table(name = "Catagorys", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Catagorys.findAll", query = "SELECT c FROM Catagorys c"),
    @NamedQuery(name = "Catagorys.findByCatagoryid", query = "SELECT c FROM Catagorys c WHERE c.catagoryid = :catagoryid"),
    @NamedQuery(name = "Catagorys.findByCatagoryname", query = "SELECT c FROM Catagorys c WHERE c.catagoryname = :catagoryname"),
    @NamedQuery(name = "Catagorys.findByCatagorydescription", query = "SELECT c FROM Catagorys c WHERE c.catagorydescription = :catagorydescription"),
    @NamedQuery(name = "Catagorys.findByCatagorycreateddate", query = "SELECT c FROM Catagorys c WHERE c.catagorycreateddate = :catagorycreateddate"),
    @NamedQuery(name = "Catagorys.findByCatagorymodifieddate", query = "SELECT c FROM Catagorys c WHERE c.catagorymodifieddate = :catagorymodifieddate")})
public class Catagorys implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Catagory_id", nullable = false)
    private Integer catagoryid;
    @Basic(optional = false)
    @Column(name = "Catagory_name", nullable = false, length = 50)
    private String catagoryname;
    @Basic(optional = false)
    @Column(name = "Catagory_description", nullable = false, length = 2147483647)
    private String catagorydescription;
    @Basic(optional = false)
    @Column(name = "Catagory_createddate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private String catagorycreateddate;
    @Basic(optional = false)
    @Column(name = "Catagory_modifieddate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private String catagorymodifieddate;

    public Catagorys() {
    }

    public Catagorys(Integer catagoryid) {
        this.catagoryid = catagoryid;
    }

    public Catagorys(Integer catagoryid, String catagoryname, String catagorydescription, String catagorycreateddate, String catagorymodifieddate) {
        this.catagoryid = catagoryid;
        this.catagoryname = catagoryname;
        this.catagorydescription = catagorydescription;
        this.catagorycreateddate = catagorycreateddate;
        this.catagorymodifieddate = catagorymodifieddate;
    }

    public Integer getCatagoryid() {
        return catagoryid;
    }

    public void setCatagoryid(Integer catagoryid) {
        this.catagoryid = catagoryid;
    }

    public String getCatagoryname() {
        return catagoryname;
    }

    public void setCatagoryname(String catagoryname) {
        this.catagoryname = catagoryname;
    }

    public String getCatagorydescription() {
        return catagorydescription;
    }

    public void setCatagorydescription(String catagorydescription) {
        this.catagorydescription = catagorydescription;
    }

    public String getCatagorycreateddate() {
        return catagorycreateddate;
    }

    public void setCatagorycreateddate(String catagorycreateddate) {
        this.catagorycreateddate = catagorycreateddate;
    }

    public String getCatagorymodifieddate() {
        return catagorymodifieddate;
    }

    public void setCatagorymodifieddate(String catagorymodifieddate) {
        this.catagorymodifieddate = catagorymodifieddate;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (catagoryid != null ? catagoryid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Catagorys)) {
            return false;
        }
        Catagorys other = (Catagorys) object;
        if ((this.catagoryid == null && other.catagoryid != null) || (this.catagoryid != null && !this.catagoryid.equals(other.catagoryid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.Catagorys[ catagoryid=" + catagoryid + " ]";
    }
    
}
