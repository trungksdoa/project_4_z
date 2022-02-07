package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Web_information;

public interface WebService {
    public Web_information save(Web_information web);
    public Web_information findOne(int id);
}
