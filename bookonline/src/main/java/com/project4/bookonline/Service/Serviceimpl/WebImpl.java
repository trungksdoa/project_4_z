package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Web_information;
import com.project4.bookonline.Repository.WebRespository;
import com.project4.bookonline.Service.WebService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WebImpl implements WebService {
    @Autowired
    WebRespository service;

    @Override
    public Web_information save(Web_information web) {
        return service.save(web);
    }

    @Override
    public Web_information findOne(int id) {
        if (service.findById(id).get() == null) {
            return null;
        } else {
            return service.findById(id).get();
        }
    }
}
