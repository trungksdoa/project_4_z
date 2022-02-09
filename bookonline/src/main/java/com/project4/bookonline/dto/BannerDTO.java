package com.project4.bookonline.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Basic;
import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
public class BannerDTO {
    private String Banner_Image;
    private String Banner_title;
    private String Banner_content;
}
