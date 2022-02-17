package com.project4.bookonline.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "ProductView")
@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
public class View_Product_Rank {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "Books_id")
    private String Books_id;
    @Column(name = "Book_name")
    private String Book_name;
    @Column(name = "total_review")
    private Integer total_review;
}
