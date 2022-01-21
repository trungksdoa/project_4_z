package com.project4.bookonline.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Message_Respones<T> {
    @JsonProperty("data_array")
    private List<T> list;
    @JsonProperty("data_object")
    private T object;
    @JsonProperty("msg")
    private String message;

    // A default constructor is required for serialization/deserialization to work
    public Message_Respones() {
    }
}
