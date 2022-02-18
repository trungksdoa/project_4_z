package com.project4.bookonline.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
public class PdetailDTO {
    private Integer pdetailid;
    private String imageLink;
    private String format;
    private Integer pages;
    private String dimensions;
    private String language;
    private String illustrationsnote;
}
