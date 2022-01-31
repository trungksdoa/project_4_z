/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 * @author PC
 */
@Entity
@Table(name = "PDetail", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@NamedQueries({
        @NamedQuery(name = "PDetail.findAll", query = "SELECT p FROM PDetail p"),
        @NamedQuery(name = "PDetail.findByPdetailid", query = "SELECT p FROM PDetail p WHERE p.pdetailid = :pdetailid"),
        @NamedQuery(name = "PDetail.findByImageLink", query = "SELECT p FROM PDetail p WHERE p.imageLink = :imageLink"),
        @NamedQuery(name = "PDetail.findByFormat", query = "SELECT p FROM PDetail p WHERE p.format = :format"),
        @NamedQuery(name = "PDetail.findByPages", query = "SELECT p FROM PDetail p WHERE p.pages = :pages"),
        @NamedQuery(name = "PDetail.findByDimensions", query = "SELECT p FROM PDetail p WHERE p.dimensions = :dimensions"),
        @NamedQuery(name = "PDetail.findByLanguage", query = "SELECT p FROM PDetail p WHERE p.language = :language"),
        @NamedQuery(name = "PDetail.findByIllustrationsnote", query = "SELECT p FROM PDetail p WHERE p.illustrationsnote = :illustrationsnote")})
public class PDetail implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Pdetail_id", nullable = false)
    private Integer pdetailid;
    @Column(name = "image_link", length = 50)
    private String imageLink;
    @Column(name = "Format", length = 50)
    private String format;
    @Column(name = "Pages")
    private Integer pages;
    @Column(name = "Dimensions", length = 50)
    private String dimensions;
    @Column(name = "Language", length = 50)
    private String language;
    @Column(name = "Illustrations_note", length = 50)
    private String illustrationsnote;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pDetailid")
    private Books book;

    public PDetail() {
    }

    public PDetail(Integer pdetailid) {
        this.pdetailid = pdetailid;
    }

    public Integer getPdetailid() {
        return pdetailid;
    }

    public void setPdetailid(Integer pdetailid) {
        this.pdetailid = pdetailid;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public Integer getPages() {
        return pages;
    }

    public void setPages(Integer pages) {
        this.pages = pages;
    }

    public String getDimensions() {
        return dimensions;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getIllustrationsnote() {
        return illustrationsnote;
    }

    public void setIllustrationsnote(String illustrationsnote) {
        this.illustrationsnote = illustrationsnote;
    }

    @JsonBackReference(value = "pdetail_book")
    @XmlTransient
    public Books getBook() {
        return book;
    }

    public void setBook(Books book) {
        this.book = book;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (pdetailid != null ? pdetailid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PDetail)) {
            return false;
        }
        PDetail other = (PDetail) object;
        if ((this.pdetailid == null && other.pdetailid != null) || (this.pdetailid != null && !this.pdetailid.equals(other.pdetailid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.PDetail[ pdetailid=" + pdetailid + " ]";
    }

}
