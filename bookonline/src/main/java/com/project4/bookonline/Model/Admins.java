/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 * @author trung
 */
@Entity
@Table(name = "Admins")
@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
public class Admins implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Admin_id")
    private Integer adminid;
    @Basic(optional = false)
    @Column(name = "Admin_email")
    private String adminemail;
    @Basic(optional = false)
    @Column(name = "Admin_password")
    private String adminpassword;
    @Basic(optional = false)
    @Column(name = "Admin_createddate")
    private String admincreateddate;
    @Basic(optional = false)
    @Column(name = "Admin_modifieddate")
    private String adminmodifieddate;
    @Column(name = "Admin_roles")
    private String roles;
}
