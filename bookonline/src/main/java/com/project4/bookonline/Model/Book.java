package com.project4.bookonline.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

@Entity
@Table(name = "Book", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
public class Book implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "Books_id", nullable = false)
    private String BookId;
    @Column(name = "Book_name", nullable = false)
    private String BookName;
    @Column(name = "Book_price", nullable = false)
    private String BookPrice;
    @Column(name = "Book_author", nullable = false)
    private String BookAuthor;
    @Column(name = "Book_discount", nullable = false)
    private String BookDiscount;
    @Column(name = "Book_description", nullable = false)
    private String BookDescription;
    @Column(name = "Book_releasedate", nullable = false)
    private String BookReleasedate;
    @Column(name = "Book_modifieddate", nullable = false)
    private String BookModifieddate;
    @Column(name = "Book_catagory", nullable = false)
    private String BookCatagory;
    @Column(name = "Book_inventory", nullable = false)
    private String BookInventory;
    @Column(name = "Book_createddate", nullable = false)
    private String BookCreateddate;
}
