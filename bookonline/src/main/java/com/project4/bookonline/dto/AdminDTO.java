package com.project4.bookonline.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Basic;
import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
public class AdminDTO {
    private String adminemail;
    private String adminpassword;
    private String roles;
}
