package com.project4.bookonline.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Basic;
import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
public class AuthorDTO {
    private String authorname;
    private int numberpublishedbooks;
    private String authorinformation;
}
