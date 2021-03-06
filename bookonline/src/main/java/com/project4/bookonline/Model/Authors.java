/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 * @author PC
 */
@Entity
@Table(name = "Authors", catalog = "Project_4", schema = "dbo")
@XmlRootElement
public class Authors implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Author_id", nullable = false)
    private Integer authorid;
    @Basic(optional = false)
    @Column(name = "Author_Image", nullable = false, length = 50)
    private String authorImage;
    @Basic(optional = false)
    @Column(name = "Author_name", nullable = false, length = 50)
    private String authorname;
    @Basic(optional = false)
    @Column(name = "Number_published_books", nullable = false)
    private Integer numberpublishedbooks;
    @Basic(optional = false)
    @Column(name = "Author_information", nullable = false, length = 2147483647)
    private String authorinformation;
    @Basic(optional = false)
    @Column(name = "Datecreated", nullable = false)
    private String datecreated;
    @Basic(optional = false)
    @Column(name = "Modifieddate", nullable = false)
    private String modifieddate;

    @Column(name = "status")
    private int status;
    //    @JsonIgnore

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "authorid")
    private Collection<Books> booksCollection;

    public Authors() {
    }

    public Authors(Integer authorid) {
        this.authorid = authorid;
    }

    public Authors(Integer authorid, String authorImage, String authorname, int numberpublishedbooks, String authorinformation, String datecreated, String modifieddate) {
        this.authorid = authorid;
        this.authorImage = authorImage;
        this.authorname = authorname;
        this.numberpublishedbooks = numberpublishedbooks;
        this.authorinformation = authorinformation;
        this.datecreated = datecreated;
        this.modifieddate = modifieddate;
    }


    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Integer getAuthorid() {
        return authorid;
    }

    public void setAuthorid(Integer authorid) {
        this.authorid = authorid;
    }

    public String getAuthorImage() {
        return authorImage;
    }

    public void setAuthorImage(String authorImage) {
        this.authorImage = authorImage;
    }

    public String getAuthorname() {
        return authorname;
    }

    public void setAuthorname(String authorname) {
        this.authorname = authorname;
    }

    public int getNumberpublishedbooks() {
        return numberpublishedbooks;
    }

    public void setNumberpublishedbooks(int numberpublishedbooks) {
        this.numberpublishedbooks = numberpublishedbooks;
    }

    public String getAuthorinformation() {
        return authorinformation;
    }

    public void setAuthorinformation(String authorinformation) {
        this.authorinformation = authorinformation;
    }

    public String getDatecreated() {
        return datecreated;
    }

    public void setDatecreated(String datecreated) {
        this.datecreated = datecreated;
    }

    public String getModifieddate() {
        return modifieddate;
    }

    public void setModifieddate(String modifieddate) {
        this.modifieddate = modifieddate;
    }

    @JsonBackReference(value="Author_book")
    @XmlTransient
    public Collection<Books> getBooksCollection() {
        return booksCollection;
    }

    public void setBooksCollection(Collection<Books> booksCollection) {
        this.booksCollection = booksCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (authorid != null ? authorid.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Authors)) {
            return false;
        }
        Authors other = (Authors) object;
        if ((this.authorid == null && other.authorid != null) || (this.authorid != null && !this.authorid.equals(other.authorid))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.project4.bookonline.Model.Authors[ authorid=" + authorid + " ]";
    }
}