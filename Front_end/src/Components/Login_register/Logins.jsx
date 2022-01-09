import React from "react";
import { useEffect, useState } from "react";

import { store, useGlobalState } from 'state-pool';
// import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';


import userApi from "../../api/employeeApi";



const Login_page = () => {
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
    
    const HandleLogin = async (e) => {
        try {
            e.preventDefault();
            alert("OK");
            const response = await userApi.login(Emails, Passwords);

            for (let index = 0; index < response.length; index++) {
                const element = response[index];
                tempData.push(element.func_name);
                // console.log(element.func_name);
            }
            const emptys = localStorage.getItem("rolse");
            localStorage.setItem('rolse', tempData);

            navigate('/author')

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={HandleLogin}>
            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" value={Emails} onChange={(e) => setEmails(e.target.value)} name="uname" required />
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" value={Passwords} onChange={(e) => setPasswords(e.target.value)} name="psw" required /><br />
                <button type="submit">Login</button>
            </div>
        </form>
    );
}
export default Login_page;