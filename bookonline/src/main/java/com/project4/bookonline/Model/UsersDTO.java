package com.project4.bookonline.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
public class UsersDTO {
    private String UserID;
    private String first_name;
    private String last_name;
    private String UserEmail;
    private String Birthday;
    private int Phone;
}
