package com.project4.bookonline;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.project4"
})
public class BookonlineApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookonlineApplication.class, args);
    }

}
