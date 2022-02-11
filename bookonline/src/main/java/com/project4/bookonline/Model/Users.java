/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.project4.bookonline.dto.ReviewDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
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
 * @author trung
 */
@Entity
@Table(name = "Users", catalog = "Project_4", schema = "dbo")

@Getter
@Setter
@NoArgsConstructor
@XmlRootElement
public class Users implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "User_id")
    private String userid;
    @Basic(optional = false)
    @Column(name = "first_name")
    private String firstName;
    @Basic(optional = false)
    @Column(name = "last_name")
    private String lastName;
    @Basic(optional = false)
    @Column(name = "User_email")
    private String useremail;
    @Basic(optional = false)
    @Column(name = "User_password")
    private String userpassword;
    @Basic(optional = false)
    @Column(name = "Phone")
    private String phone;
    @Basic(optional = false)
    @Column(name = "Status")
    private int status;
    @Basic(optional = false)
    @Column(name = "User_createddate")
    private String usercreateddate;
    @Basic(optional = false)
    @Column(name = "User_modifieddate")
    private String usermodifieddate;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userid")
    private Collection<Reviews> reviewCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "userid")
    private Collection<Orders> orderCollection;


    @JsonBackReference(value="user_order")
    public Collection<Orders> getOrderCollection() {
        return orderCollection;
    }

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "User_id")
    private Collection<Wishlist> wishlistCollection;

    public Users(String userid) {
        this.userid = userid;
    }

    @JsonBackReference(value="user_review")
    public Collection<Reviews> getReviewCollection() {
        return reviewCollection;
    }

    public void setReviewCollection(Collection<Reviews> reviewCollection) {
        this.reviewCollection = reviewCollection;
    }

    @JsonBackReference(value = "user_wishlist")
    public Collection<Wishlist> getWishlistCollection() {
        return wishlistCollection;
    }

    public void setWishlistCollection(Collection<Wishlist> wishlistCollection) {
        this.wishlistCollection = wishlistCollection;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.Users[ userid=" + userid + " ]";
    }

}
