/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.project4.bookonline.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

/**
 * @author trung
 */
@Entity
@Table(name = "Banners")
@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
public class Banner implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "Banner_id")
    private Integer Banner_id;
    @Basic(optional = false)
    @Column(name = "Banner_Image")
    private String Banner_Image;
    @Basic(optional = false)
    @Column(name = "Banner_title")
    private String Banner_title;
    @Basic(optional = false)
    @Column(name = "Banner_content")
    private String Banner_content;
    @Basic(optional = false)
    @Column(name = "Banner_createddate")
    private String Banner_createddate;
    @Column(name = "Banner_modifieddate")
    private String Banner_modifieddate;
}
