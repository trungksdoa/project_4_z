/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.project4.bookonline.Controller.Banner;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.Banner;
import com.project4.bookonline.Model.Message_Respones;
import com.project4.bookonline.Service.BannerService;
import com.project4.bookonline.UploadService.FileStorageService;
import com.project4.bookonline.dto.BannerDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

/**
 * @author trung
 */
@CrossOrigin(origins = "http://localhost:3006")
@RestController
@RequestMapping(value = "/admin/api")
public class BannerManagerController {

    @Autowired
    BannerService bannerService;

    @Autowired
    private FileStorageService fileStorageService;
    //Save ảnh
    Message_Respones<Banner> setMessage = new Message_Respones<Banner>();

    @RequestMapping(value = "/banners", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<Banner>> findALl() {
        setMessage = new Message_Respones<Banner>();
        List<Banner> findAll = bannerService.getList();
        setMessage.setMessage("Update success");
        setMessage.setList(findAll);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Banner>>(setMessage, HttpStatus.OK);
    }

    @RequestMapping(value = "/banners/{id}", method = RequestMethod.GET)
    public ResponseEntity<Message_Respones<BannerDTO>> findOne(@PathVariable String id) {
        setMessage = new Message_Respones<Banner>();
        Message_Respones<BannerDTO> setMessages = new Message_Respones<BannerDTO>();
        Banner findOne = bannerService.findOne(Integer.valueOf(id));
        BannerDTO banner = new BannerDTO();
        banner.setBannerContent(findOne.getBanner_content());
        banner.setBannerTitle(findOne.getBanner_title());
        banner.setBannerImage(findOne.getBanner_Image());
        setMessages.setMessage("Get success");
        setMessages.setObject(banner);
        setMessages.setCode(200);
        return new ResponseEntity<Message_Respones<BannerDTO>>(setMessages, HttpStatus.OK);
    }

    @RequestMapping(value = "/banner/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Message_Respones<Banner>> Delete(@PathVariable String id) {
        setMessage = new Message_Respones<Banner>();
        Banner banner = new Banner();
        banner = bannerService.findOne(Integer.valueOf(id));
        boolean deleted = bannerService.Delete(banner);
        if (deleted) {
            setMessage.setMessage("Delete success");
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Banner>>(setMessage, HttpStatus.OK);
        } else {
            setMessage.setMessage("Delete fail");
            setMessage.setCode(0);
            return new ResponseEntity<Message_Respones<Banner>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @RequestMapping(value = "/banners/image/update/{id}", method = RequestMethod.PUT, consumes = {"multipart/form-data"})
    public ResponseEntity<Message_Respones<Banner>> UploadImage(@PathVariable String id, @RequestParam("file") MultipartFile file) {
        setMessage = new Message_Respones<Banner>();
        String fileName = "";
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Banner banner = new Banner();
        banner = bannerService.findOne(Integer.valueOf(id));
        fileName = fileStorageService.storePreNameFile(file, banner.getBanner_Image());
        banner.setBanner_Image(fileName);
        banner.setBanner_modifieddate(dtf.format(now));
        Banner banner1 = bannerService.save(banner);
        setMessage.setMessage("Update success");
        setMessage.setObject(banner1);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Banner>>(setMessage, HttpStatus.OK);
    }


    @RequestMapping(value = "/banners/{id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Message_Respones<Banner>> update(@PathVariable String id, @RequestBody BannerDTO bannerDTO) {
        setMessage = new Message_Respones<Banner>();
        Banner banner = bannerService.findOne(Integer.valueOf(id));
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        banner.setBanner_content(bannerDTO.getBannerContent());
        banner.setBanner_title(bannerDTO.getBannerTitle());
        banner.setBanner_modifieddate(dtf.format(now));
        try {
            Banner save = bannerService.save(banner);
            String msg = "Update success";
            setMessage.setMessage(msg);
            setMessage.setObject(save);
            setMessage.setCode(200);
            return new ResponseEntity<Message_Respones<Banner>>(setMessage, HttpStatus.OK);
        }catch(Exception e){
            String msg = e.getMessage();
            setMessage.setMessage(msg);
            setMessage.setCode(500);
            return new ResponseEntity<Message_Respones<Banner>>(setMessage, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    @RequestMapping(value = "/banners", method = RequestMethod.POST, consumes = {"multipart/form-data"})
    public ResponseEntity<Message_Respones<Banner>> Save(@RequestParam("file") MultipartFile file, String banner_string) {
        setMessage = new Message_Respones<Banner>();
        Banner banner = new Banner();
        BannerDTO audt = null;
        try {
            audt = new ObjectMapper().readValue(banner_string, BannerDTO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        String fileName = fileStorageService.storeFileBanner(file);
        banner.setBanner_content(audt.getBannerContent());
        banner.setBanner_Image(fileName);
        banner.setBanner_title(audt.getBannerTitle());
        banner.setBanner_modifieddate(dtf.format(now));
        banner.setBanner_createddate(dtf.format(now));
        Banner save = bannerService.save(banner);
        String msg = "Create success";
        setMessage.setMessage(msg);
        setMessage.setObject(save);
        setMessage.setCode(200);
        return new ResponseEntity<Message_Respones<Banner>>(setMessage, HttpStatus.OK);
    }
}
