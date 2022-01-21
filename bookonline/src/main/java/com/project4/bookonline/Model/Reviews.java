package com.project4.bookonline.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "Review", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
public class Reviews {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Review_id", nullable = false)
    private String Review_id;
    @Column(name = "Review_title", nullable = false)
    private String Review_title;
    @Column(name = "Review_content", nullable = false)
    private String Review_content;
    @Column(name = "Rating_start", nullable = false)
    private String Rating_start;
    @Column(name = "Active", nullable = false)
    private String Active;
    @Column(name = "Created_date", nullable = false)
    private String Created_date;
    @Column(name = "User_id", nullable = false)
    private String User_id;
    @Column(name = "Book_id", nullable = false)
    private String Book_id;
}
