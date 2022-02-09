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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "Group_detail")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Groupdetail.findAll", query = "SELECT g FROM Groupdetail g"),
    @NamedQuery(name = "Groupdetail.findById", query = "SELECT g FROM Groupdetail g WHERE g.id = :id"),
    @NamedQuery(name = "Groupdetail.findByGroupcreateddate", query = "SELECT g FROM Groupdetail g WHERE g.groupcreateddate = :groupcreateddate"),
    @NamedQuery(name = "Groupdetail.findByGroupmodifieddate", query = "SELECT g FROM Groupdetail g WHERE g.groupmodifieddate = :groupmodifieddate")})
public class Groupdetail implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @Column(name = "Group_createddate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date groupcreateddate;
    @Basic(optional = false)
    @Column(name = "Group_modifieddate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date groupmodifieddate;
    @JoinColumn(name = "Book_id", referencedColumnName = "Books_id")
    @ManyToOne(optional = false)
    private Books bookid;
    @JoinColumn(name = "Catagory_id", referencedColumnName = "Catagory_id")
    @ManyToOne(optional = false)
    private Catagorys catagoryid;

    public Groupdetail() {
    }

    public Groupdetail(Integer id) {
        this.id = id;
    }

    public Groupdetail(Integer id, Date groupcreateddate, Date groupmodifieddate) {
        this.id = id;
        this.groupcreateddate = groupcreateddate;
        this.groupmodifieddate = groupmodifieddate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getGroupcreateddate() {
        return groupcreateddate;
    }

    public void setGroupcreateddate(Date groupcreateddate) {
        this.groupcreateddate = groupcreateddate;
    }

    public Date getGroupmodifieddate() {
        return groupmodifieddate;
    }

    public void setGroupmodifieddate(Date groupmodifieddate) {
        this.groupmodifieddate = groupmodifieddate;
    }

    public Books getBookid() {
        return bookid;
    }

    public void setBookid(Books bookid) {
        this.bookid = bookid;
    }

    public Catagorys getCatagoryid() {
        return catagoryid;
    }

    public void setCatagoryid(Catagorys catagoryid) {
        this.catagoryid = catagoryid;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Groupdetail)) {
            return false;
        }
        Groupdetail other = (Groupdetail) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.Groupdetail[ id=" + id + " ]";
    }
    
}
