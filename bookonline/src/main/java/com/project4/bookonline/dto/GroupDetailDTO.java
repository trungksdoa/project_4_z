package com.project4.bookonline.dto;

import com.project4.bookonline.Model.Books;
import com.project4.bookonline.Model.Catagorys;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@Setter
@NoArgsConstructor
public class GroupDetailDTO {
    private Integer id;
    private String groupcreateddate;
    private String groupmodifieddate;
    private Books bookid;
    private String catagoryid;
}
