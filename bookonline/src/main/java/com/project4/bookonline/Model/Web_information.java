package com.project4.bookonline.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "Web_information", catalog = "Project_4", schema = "dbo")

@Getter
@Setter
@NoArgsConstructor
@XmlRootElement
public class Web_information {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private int id;
    @Column(name = "Logo_name_path")
    private String Logo_name_path;
    @Column(name = "address")
    private String address;
    @Column(name = "phonenum")
    private String phonenum;
    @Column(name = "timeservice")
    private String timeservice;
    @Column(name = "email")
    private String email;
}
