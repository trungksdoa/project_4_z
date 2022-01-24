import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Auth from '../../api/CustomerApi';
const Login = () => {
    const initialValues = { Emails: "", Pword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [cookies, setCookie] = useCookies(['loggin']);
    let navigate = useNavigate();
    const Only_number = /^[0-9\b]+$/;
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const vallidate = validate(formValues);

        setIsSubmit(false);
        setFormErrors(vallidate);
    };
    async function Login() {
        // setCookie('loggin', JSON.stringify({
        //     roles: ["admin"],
        //     loggin: true
        // }), { path: '/' });
      
    }
    useEffect(() => {
        // Login();
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        errors.status = true;
        if (!values.Emails) {
            errors.Emails = "Email is required!";
            errors.status = false;
        } else if (!regex.test(values.Emails)) {
            errors.Emails = "This is not a valid email format!";
            errors.status = false;
        } else if (values.Emails.trim().length <= 0) {
            errors.Emails = "Email not be blank";
            errors.status = false;
        }
        if (!values.Pword) {
            errors.Pword = "Password is required";
            errors.status = false;
        } else if (values.Pword.trim().length <= 0) {
            errors.Pword = "Password not be blank";
            errors.status = false;
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
                                                <label className="form-label">Email</label>
                                                <input type="email" name="Emails" className="form-control" />
                                            </div>
                                            <div>
                                                <p style={{ color: "red" }}>{formErrors.Emails}</p>
                                            </div>
                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="password" name="Pword" className="form-control" />
                                            </div>
                                            <div>
                                                <p style={{ color: "red" }}>{formErrors.Pword}</p>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" onClick={Login} className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer position-absolute bottom-2 py-2 w-100">
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-12 col-md-6 my-auto">
                                    <div className="copyright text-center text-sm text-white text-lg-start">
                                        © ,
                                        made with <i className="fa fa-heart" aria-hidden="true" /> by
                                        <a href="https://www.creative-tim.com" className="font-weight-bold text-white" target="_blank">Creative Tim</a>
                                        for a better web.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com" className="nav-link text-white" target="_blank">Creative Tim</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/presentation" className="nav-link text-white" target="_blank">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/blog" className="nav-link text-white" target="_blank">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-white" target="_blank">License</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default Login