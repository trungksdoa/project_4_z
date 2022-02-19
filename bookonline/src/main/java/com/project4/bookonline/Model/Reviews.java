/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

//import static com.project4.bookonline.Model.Books_.reviews;

/**
 *
 * @author trung
 */
@Entity
@Table(name = "Review", catalog = "Project_4", schema = "dbo")
@Getter
@Setter
@NoArgsConstructor
@XmlRootElement
public class Reviews implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Review_id")
    private Integer reviewid;
    @Basic(optional = false)
    @Column(name = "Review_title")
    private String reviewtitle;
    @Basic(optional = false)
    @Column(name = "Review_content")
    private String reviewcontent;
    @Basic(optional = false)
    @Column(name = "Rating_start")
    private int ratingstart;
    @Basic(optional = false)
    @Column(name = "Active")
    private int active;
    @Basic(optional = false)
    @Column(name = "Created_date")
    private String createddate;
    @JoinColumn(name = "User_id", referencedColumnName = "User_id")
    @ManyToOne(optional = false)
    private Users userid;

    @JoinColumn(name = "Book_id", referencedColumnName = "Books_id")
    @ManyToOne(optional = false)
    private Books BooksId;

    @JsonManagedReference(value="user_review")
    public Users getUserid() {
        return userid;
    }

    public void setUserid(Users userid) {
        this.userid = userid;
    }

    @JsonManagedReference(value="ReviewID")
    public Books getBooksId() {
        return BooksId;
    }

    public void setBooksId(Books booksId) {
        BooksId = booksId;
    }

    public Reviews NewReview(Reviews param){
        Reviews reviews = new Reviews();
        reviews.setReviewtitle(param.getReviewtitle());
        reviews.setReviewcontent(param.getReviewcontent());
        reviews.setActive(param.getActive());
        reviews.setRatingstart(param.getRatingstart());
        reviews.setCreateddate(param.getCreateddate());
        reviews.setReviewid(param.getReviewid());
        return reviews;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.Review[ reviewid=" + reviewid + " ]";
    }
    
}
