package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Model.Banner;
import com.project4.bookonline.Repository.BannerRespository;
import com.project4.bookonline.Service.BannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BannerImp implements BannerService {

    @Autowired
    BannerRespository service;

    @Override
    public List<Banner> getList() {
        return service.findAll();
    }

    @Override
    public Banner findOne(int id) {
        Banner banner = service.findById(id).get();
        if (banner == null) {
            return null;
        } else {
            return service.findById(id).get();
        }
    }

    @Override
    public Banner save(Banner banner) {
        return service.save(banner);
    }

    @Override
    public Banner Update(int id, Banner banner) {
        Banner  ban = service.findById(id).get();
        if (banner == null) {
            return null;
        } else {
            ban.setBanner_content(banner.getBanner_content());
            ban.setBanner_title(banner.getBanner_title());
            ban.setBanner_modifieddate(banner.getBanner_modifieddate());
            return service.save(ban);
        }
    }

    @Override
    public boolean Delete(Banner banner) {
        try {
            service.delete(banner);
            return true;
        } catch (Exception ex) {
            return false;
        }

    }
}
