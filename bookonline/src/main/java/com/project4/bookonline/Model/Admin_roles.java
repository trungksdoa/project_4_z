package com.project4.bookonline.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;


@Entity
@Table(name = "Admin_Roles", catalog = "Project_4", schema = "dbo")
@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
public class Admin_roles implements Serializable {

        private static final long serialVersionUID = 1L;
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", nullable = false)
        private int id;
        @Column(name = "Admin_id", nullable = false)
        private int Admin_id;
        @Column(name = "Func_Name", nullable = false)
        private String Func_name;

}
