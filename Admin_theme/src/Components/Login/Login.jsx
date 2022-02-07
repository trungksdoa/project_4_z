import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Auth from '../../api/AdminAPI';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
const Login = () => {
    const initialValues = { adminemail: "", adminpassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [cookies, setCookie] = useCookies(['loggin']);
    let navigate = useNavigate();
    const Only_number = /^[0-9\b]+$/;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit")
        setIsSubmit(true);
        setFormErrors(validate(formValues));
    };
    async function Login() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log("Log in success")
            const cookie_data = {
                adminemail: "",
                roles: [],
                loggin: true
            }
            await Auth.Login(formValues).then(response => {
          
                cookie_data.adminemail = response.data.adminemail
                cookie_data.roles.push(response.data.roles)
                console.log(cookie_data)
                setCookie('loggin', JSON.stringify(cookie_data), { path: '/' });
            }).catch(err => alert(err.msg));
        } else {
            setIsSubmit(false);
        }
    }
    useEffect(() => {
        Login();
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.adminemail) {
            errors.adminemail = "Email is required!";
        } else if (!regex.test(values.adminemail)) {
            errors.adminemail = "This is not a valid email format!";
        } else if (values.adminemail.trim().length <= 0) {
            errors.adminemail = "Email not be blank";
        }
        if (!values.adminpassword) {
            errors.adminpassword = "Password is required";
        } else if (values.adminpassword.trim().length <= 0) {
            errors.adminpassword = "Password not be blank";
        }
        return errors;
    };
    return (
        <div>
            <main className="main-content  mt-0">
                <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")', borderRadius: 50 }}>
                    <span className="mask bg-gradient-dark opacity-6" />
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Panel sign in</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form role="form" onSubmit={handleSubmit} className="text-start">
                                            <div className="input-group input-group-outline my-3">
                                                <TextField
                                                    name="adminemail"
                                                    fullWidth
                                                    id="adminemail"
                                                    label="Email"
                                                    value={formValues.adminemail}
                                                    onChange={handleChange}
                                                    autoFocus
                                                />
                                                <p style={{ color: "red" }}>{formErrors.adminemail}</p>
                                            </div>
                                            <div className="input-group input-group-outline mb-3">
                                                <TextField
                                                    name="adminpassword"
                                                    fullWidth
                                                    id="adminpassword"
                                                    label="Passoword"
                                                    value={formValues.adminpassword}
                                                    onChange={handleChange}
                                                    autoFocus
                                                />
                                                <p style={{ color: "red" }}>{formErrors.adminpassword}</p>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login