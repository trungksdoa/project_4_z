package com.project4.bookonline.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

@Entity
@Table(name = "Admins", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
public class Admins implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Admin_id;
    @Column(name = "Admin_email", nullable = false)
    private String AdminEmail;
    @Column(name = "Admin_password", nullable = false)
    private String AdminPassword;
    @Column(name = "Admin_type", nullable = false)
    private String AdminType;
    @Column(name = "Admin_createddate", nullable = false)
    private String AdminCreateddate;
    @Column(name = "Admin_modifieddate", nullable = false)
    private String AdminModifieddate;
}
