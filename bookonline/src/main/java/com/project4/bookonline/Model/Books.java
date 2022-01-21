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
@Table(name = "Books", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Books.findAll", query = "SELECT b FROM Books b"),
    @NamedQuery(name = "Books.findByBooksid", query = "SELECT b FROM Books b WHERE b.booksid = :booksid"),
    @NamedQuery(name = "Books.findByBookname", query = "SELECT b FROM Books b WHERE b.bookname = :bookname"),
    @NamedQuery(name = "Books.findByBookprice", query = "SELECT b FROM Books b WHERE b.bookprice = :bookprice"),
    @NamedQuery(name = "Books.findByBookdescription", query = "SELECT b FROM Books b WHERE b.bookdescription = :bookdescription"),
    @NamedQuery(name = "Books.findByBookreleasedate", query = "SELECT b FROM Books b WHERE b.bookreleasedate = :bookreleasedate"),
    @NamedQuery(name = "Books.findByBookmodifieddate", query = "SELECT b FROM Books b WHERE b.bookmodifieddate = :bookmodifieddate"),
    @NamedQuery(name = "Books.findByBookcreateddate", query = "SELECT b FROM Books b WHERE b.bookcreateddate = :bookcreateddate"),
    @NamedQuery(name = "Books.findByAmounts", query = "SELECT b FROM Books b WHERE b.amounts = :amounts")})
public class Books implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "Books_id")
    private String booksid;
    @Basic(optional = false)
    @Column(name = "Book_name")
    private String bookname;
    @Basic(optional = false)
    @Column(name = "Book_price")
    private int bookprice;
    @Column(name = "Book_description")
    private String bookdescription;
    @Basic(optional = false)
    @Column(name = "Book_releasedate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date bookreleasedate;
    @Basic(optional = false)
    @Column(name = "Book_modifieddate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date bookmodifieddate;
    @Basic(optional = false)
    @Column(name = "Book_createddate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date bookcreateddate;
    @Basic(optional = false)
    @Column(name = "Amounts")
    private int amounts;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "bookid")
    private Collection<Groupdetail> groupdetailCollection;
    @JoinColumn(name = "Author_id", referencedColumnName = "Author_id")
    @ManyToOne(optional = false)
    private Authors authorid;
    @JoinColumn(name = "PDetail_id", referencedColumnName = "Pdetail_id")
    @ManyToOne(optional = false)
    private PDetail pDetailid;

    public Books() {
    }

    public Books(String booksid) {
        this.booksid = booksid;
    }

    public Books(String booksid, String bookname, int bookprice, Date bookreleasedate, Date bookmodifieddate, Date bookcreateddate, int amounts) {
        this.booksid = booksid;
        this.bookname = bookname;
        this.bookprice = bookprice;
        this.bookreleasedate = bookreleasedate;
        this.bookmodifieddate = bookmodifieddate;
        this.bookcreateddate = bookcreateddate;
        this.amounts = amounts;
    }

    public String getBooksid() {
        return booksid;
    }

    public void setBooksid(String booksid) {
        this.booksid = booksid;
    }

    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    public int getBookprice() {
        return bookprice;
    }

    public void setBookprice(int bookprice) {
        this.bookprice = bookprice;
    }

    public String getBookdescription() {
        return bookdescription;
    }

    public void setBookdescription(String bookdescription) {
        this.bookdescription = bookdescription;
    }

    public Date getBookreleasedate() {
        return bookreleasedate;
    }

    public void setBookreleasedate(Date bookreleasedate) {
        this.bookreleasedate = bookreleasedate;
    }

    public Date getBookmodifieddate() {
        return bookmodifieddate;
    }

    public void setBookmodifieddate(Date bookmodifieddate) {
        this.bookmodifieddate = bookmodifieddate;
    }

    public Date getBookcreateddate() {
        return bookcreateddate;
    }

    public void setBookcreateddate(Date bookcreateddate) {
        this.bookcreateddate = bookcreateddate;
    }

    public int getAmounts() {
        return amounts;
    }

    public void setAmounts(int amounts) {
        this.amounts = amounts;
    }

    @XmlTransient
    public Collection<Groupdetail> getGroupdetailCollection() {
        return groupdetailCollection;
    }

    public void setGroupdetailCollection(Collection<Groupdetail> groupdetailCollection) {
        this.groupdetailCollection = groupdetailCollection;
    }

    public Authors getAuthorid() {
        return authorid;
    }

    public void setAuthorid(Authors authorid) {
        this.authorid = authorid;
    }

    public PDetail getPDetailid() {
        return pDetailid;
    }

    public void setPDetailid(PDetail pDetailid) {
        this.pDetailid = pDetailid;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (booksid != null ? booksid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Books)) {
            return false;
        }
        Books other = (Books) object;
        if ((this.booksid == null && other.booksid != null) || (this.booksid != null && !this.booksid.equals(other.booksid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.Books[ booksid=" + booksid + " ]";
    }
    
}
