package com.project4.bookonline.Service;

import com.project4.bookonline.Model.Banner;

import java.util.List;

public interface BannerService {
    public List<Banner> getList();
    public Banner findOne(int id);
    public Banner save(Banner banner);
    public Banner Update(int id,Banner banner);
    public boolean Delete(Banner banner);
}
