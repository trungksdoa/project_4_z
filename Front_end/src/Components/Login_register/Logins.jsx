import React from "react";
import { useEffect, useState, useContext, useMemo } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useLocalStorage from 'react-use-localstorage';
import { useNavigate, useLocation } from 'react-router-dom';


import Auth from "../../api/Auth";




const Login_page = () => {
    const initialValues = { Emails: "", Pword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    let navigate = useNavigate();
    const Only_number = /^[0-9\b]+$/;
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    async function Login() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            await Auth.login(formValues.Emails, formValues.Pword).then(response => {

                localStorage.setItem('users', JSON.stringify(response.data));
                alert(response.msg);
                // navigate("/")
            }).catch(e => {
                alert(e.msg);
            });
        }
    }
    useEffect(() => {
        Login();
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.Emails) {
            errors.Emails = "Email is required!";
        } else if (!regex.test(values.Emails)) {
            errors.Emails = "This is not a valid email format!";
        } else if (values.Emails.trim().length <= 0) {
            errors.Emails = "Email not be blank";
        }
        if (!values.Pword) {
            errors.Pword = "Password is required";
        } else if (values.Pword.trim().length <= 0) {
            errors.Pword = "Password not be blank";
        }
        return errors;
    };
    // var property_name = "first_name";
    // alert(person[property_name]); //Dynamically access object property with bracket notation
    return (
        <>
            <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100"
                data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="tg-innerbannercontent">
                                <h1>Login</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main id="tg-main" className="tg-main tg-haslayout profile_main">
                <div className="login_form"
                    style={{
                        padding: "15px",
                        margin: "2rem auto",
                        width: "40rem"
                    }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="Emails">Email address</label>
                            <input type="text" className="form-control" name="Emails" value={formValues.Emails} onChange={handleChange} aria-describedby="emailHelp" />
                            <p style={{ color: "red" }}>{formErrors.Emails}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Pword">Password</label>
                            <input type="password" className="form-control" name="Pword" value={formValues.Pword} onChange={handleChange} />
                            <p style={{ color: "red" }}>{formErrors.Pword}</p>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </main>
        </>
    );
}
export default Login_page;