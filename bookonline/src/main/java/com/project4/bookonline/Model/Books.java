/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
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
    @Column(name = "Books_id", nullable = false, length = 50)
    private String booksid;
    @Basic(optional = false)
    @Column(name = "Book_name", nullable = false, length = 50)
    private String bookname;
    @Basic(optional = false)
    @Column(name = "Book_price", nullable = false)
    private int bookprice;
    @Column(name = "Book_description", length = 2147483647)
    private String bookdescription;
    @Basic(optional = false)
    @Column(name = "Book_releasedate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date bookreleasedate;
    @Basic(optional = false)
    @Column(name = "Book_modifieddate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date bookmodifieddate;
    @Basic(optional = false)
    @Column(name = "Book_createddate", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date bookcreateddate;
    @Basic(optional = false)
    @Column(name = "Amounts", nullable = false)
    private int amounts;

    @ManyToOne
    @JoinColumn(name = "Author_id", nullable = false)
    private Authors authorid;
    @JoinColumn(name = "PDetail_id", referencedColumnName = "Pdetail_id", nullable = false)
    @OneToOne(optional = false)
    private PDetail pDetailid;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "bookid")
    @JsonIgnore
    private Collection<OrderDetail> orderDetailCollection;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "BooksId")
    private Collection<Reviews> reviews;

    @Column(name = "status")
    private int status;

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

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
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

    @JsonBackReference(value = "Author_book")
    public Authors getAuthorid() {
        return authorid;
    }

    public void setAuthorid(Authors authorid) {
        this.authorid = authorid;
    }

    @JsonManagedReference(value = "pdetail_book")
    public PDetail getPDetailid() {
        return pDetailid;
    }

    public void setPDetailid(PDetail pDetailid) {
        this.pDetailid = pDetailid;
    }

    @JsonBackReference(value="ReviewID")
    public Collection<Reviews> getReviews() {
        return reviews;
    }

    public void setReviews(Collection<Reviews> reviews) {
        this.reviews = reviews;
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
