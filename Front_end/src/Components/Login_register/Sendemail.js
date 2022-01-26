import React, { useRef, useEffect, } from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from "react-router-dom";
export const ContactUs = () => {
    const form = useRef();
    let { userId, userName } = useParams();
    const sendEmail = (props) => {
        emailjs.send("service_j4mrk0g", "template_4k1mkrn", {
            userName: userName,
            userId: userId
        },
            'user_vIW7ZVHXfJOIHf3MzglMW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    sendEmail()
    return (
        <h3 style={{ textAlign: 'center', marginTop: 30 }}>Emails have been send</h3>
    );
};

export default ContactUs;