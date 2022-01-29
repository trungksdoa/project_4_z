package com.project4.bookonline.UploadController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project4.bookonline.Model.Reviews;
import com.project4.bookonline.Model.UsersDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.project4.bookonline.UploadPayload.Response;
import com.project4.bookonline.UploadService.FileStorageService;

@RestController
public class FileUploadController {

    @Autowired
    private FileStorageService fileStorageService;

    @RequestMapping(value = "/uploadFile", method = RequestMethod.POST, consumes = { "multipart/form-data" })
    public Response uploadFile(@RequestParam("file") MultipartFile file, String params) {


        UsersDTO udto  = null;
        try {
            udto = new ObjectMapper().readValue(params, UsersDTO.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        System.out.print(udto.getUserEmail());
        String fileName = fileStorageService.storeFile(file);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/image/")
                .path(fileName)
                .toUriString();

        return new Response(fileName, fileDownloadUri,
                file.getContentType(), file.getSize());
    }
//    @PostMapping("/uploadFile")
//    public Response uploadFile(@RequestParam("file") MultipartFile file) {
//
//        System.out.print(file);
//        String fileName = fileStorageService.storeFile(file);
//
//        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
//                .path("/downloadFile/")
//                .path(fileName)
//                .toUriString();
//
//        return new Response(fileName, fileDownloadUri,
//                file.getContentType(), file.getSize());
//    }

//    @PostMapping("/uploadMultipleFiles")
//    public List<Response> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
//        return Arrays.asList(files)
//                .stream()
//                .map(file -> uploadFile(file))
//                .collect(Collectors.toList());
//    }
}
