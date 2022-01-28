package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Respone_Book_Author {
    @JsonProperty("Author_id")
    private Integer authorid;
    @JsonProperty("Author_Image")
    private String authorImage;
    @JsonProperty("Author_information")
    private String authorname;
    @JsonProperty("Author_name")
    private int numberpublishedbooks;
    @JsonProperty("Datecreated")
    private String authorinformation;
    @JsonProperty("Modifieddate")
    private String datecreated;
    @JsonProperty("Number_published_books")
    private String modifieddate;
    @JsonProperty("books")
    public List<Books> book_list;
}
