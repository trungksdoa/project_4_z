package com.project4.bookonline.dto;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Catagorys;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
public class GDetailDTO {
    private String books;
    private int catagory;
}
