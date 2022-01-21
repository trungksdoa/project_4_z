package com.project4.bookonline.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

@Entity
@Table(name = "Users", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
public class User implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "User_id", nullable = false)
    private String UserID;
    @Column(name = "first_name", nullable = false)
    private String first_name;
    @Column(name = "last_name", nullable = false)
    private String last_name;
    @Column(name = "User_email", nullable = false)
        private String UserEmail;
    @Column(name = "User_password", nullable = false)
    private String UserPassword;
    @Column(name = "User_createddate", nullable = false)
    private String UserCreatedDate;
    @Column(name = "User_modifieddate", nullable = false)
    private String UserModifiedDate;
}
