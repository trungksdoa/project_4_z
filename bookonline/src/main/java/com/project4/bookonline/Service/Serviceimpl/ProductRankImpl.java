package com.project4.bookonline.Service.Serviceimpl;

import com.project4.bookonline.Repository.View_RankingRespository;
import com.project4.bookonline.Service.ProductRankService;
import com.project4.bookonline.Model.View_Product_Rank;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductRankImpl implements ProductRankService {
    @Autowired
    View_RankingRespository service;
    @Override
    public List<View_Product_Rank> loadRanks() {
        return service.loadRanks();
    }
}
