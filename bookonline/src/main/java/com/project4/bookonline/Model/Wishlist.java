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

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

/**
 * @author trung
 */
@Entity
@Table(name = "Wishlist")
@XmlRootElement
@Getter
@Setter
@NoArgsConstructor
public class Wishlist implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Wishlist_id")
    private Integer Wishlist_id;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Book_id", nullable = false)
    private Books booksId;
    @ManyToOne
    @JoinColumn(name = "User_id", nullable = false)
    private Users User_id;

    @Basic(optional = false)
    @Column(name = "Wishlist_createddate")
    private String Wishlist_createddate;

    @JsonBackReference(value = "wishlist_book")
    public Books getBooksId() {
        return booksId;
    }

    public void setBooksId(Books booksId) {
        this.booksId = booksId;
    }
    @JsonManagedReference(value = "user_wishlist")
    public Users getUser_id() {
        return User_id;
    }

    public void setUser_id(Users user_id) {
        User_id = user_id;
    }
}
