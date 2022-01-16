import React from "react";
import { useEffect, useState } from "react";

import { store, useGlobalState } from 'state-pool';
// import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';


import userApi from "../../api/employeeApi";



const Register = () => {
    const tempData = [];
    const [adminRole, setAdminRole] = useState([]);
    const [Emails, setEmails] = useState('');
    const [Passwords, setPasswords] = useState('');
    const navigate = useNavigate();

    const Roles_list = localStorage.getItem("rolse");
    const checkLogin = () => {
        if (Roles_list != null) {
            navigate('/author')
        }
    }
    // useEffect(() => {
    //     checkLogin();
    // })

    const HandleRegister = async (e) => {
        try {


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100"
                data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="tg-innerbannercontent">
                                <h1>Register</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main id="tg-main" className="tg-main tg-haslayout profile_main">
                <div className="login_form" style={{
                    padding: "15px",
                    margin: "2rem auto 0px auto",
                    width: "40rem"
                }}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">First name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Last name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Phone number</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Birthday</label>
                            <input type="datetime-local" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </main>
        </>
    );
}
export default Register;