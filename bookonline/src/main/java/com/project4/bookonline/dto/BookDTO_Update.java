package com.project4.bookonline.dto;

import com.project4.bookonline.Model.Groupdetail;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class BookDTO_Update {
    private String booksId;
    private String bookname;
    private int bookprice;
    private String bookdescription;
    private String bookreleasedate;
    private String bookmodifieddate;
    private int amounts;
    private int authorid;

    private List<Groupdetail> groupdto;
}
