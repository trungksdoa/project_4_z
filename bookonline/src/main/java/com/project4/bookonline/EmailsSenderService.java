package com.project4.bookonline;

import com.sun.xml.messaging.saaj.packaging.mime.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.internet.MimeMessage;

@Controller
public class EmailsSenderService {

    @Autowired
    public JavaMailSender emailSender;

    @ResponseBody
    @RequestMapping("/sendHtmlEmail")
    public String sendHtmlEmail() throws MessagingException, javax.mail.MessagingException {

        MimeMessage message = emailSender.createMimeMessage();

        boolean multipart = true;

        MimeMessageHelper helper = null;
        try {
            helper = new MimeMessageHelper(message, multipart, "utf-8");
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }

        String htmlMsg =
                "<p><strong>Hello trung,</strong></p>\n" +
                "\n" +
                "<p><strong>Your account was locked on Friday, February 18, 2022 for the following reasons:</strong></p>\n" +
                "\n" +
                "<blockquote>\n" +
                "<p><strong>Negative behavior</strong></p>\n" +
                "</blockquote>\n" +
                "\n" +
                "<p><strong>SHOP BOOK ONLINE</strong></p>\n";


        try {
            message.setContent(htmlMsg, "text/html");
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }

        helper.setTo("trungksdoa@gmail.com");

        helper.setSubject("Test send HTML email");


        this.emailSender.send(message);

        return "Email Sent!";
    }
}
