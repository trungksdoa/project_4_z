import React from "react";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

import moment from "moment";
// import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

import Datepicker from "react-datepicker";

import { NavLink } from 'react-router-dom'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { toast } from 'react-toastify'

import "./App.css";

import Auth from '../../api/Auth'

const sendEmail = (id, name, emails) => {
    return emailjs.send("service_j4mrk0g", "template_4k1mkrn", {
        userName: name,
        userId: id,
        to_email: emails
    },
        'user_vIW7ZVHXfJOIHf3MzglMW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};

const Register = () => {
    // -------------------------
    //State
    // -------------------------
    const initialValues = { Fname: "", Lname: "", Emails: "", Pword: "", Cword: "", Pnum: "" };
    // -------------------------
    //State
    // -------------------------
    const [formValues, setFormValues] = useState(initialValues);
    // -------------------------
    //State
    // -------------------------
    const [formErrors, setFormErrors] = useState({});
    // -------------------------
    //State
    // -------------------------
    const [isSubmit, setIsSubmit] = useState(false);
    // -------------------------
    // State
    // -------------------------
    const [showOrHide, setShowOrHide] = useState("hide");
    const [showOrHideConfirm, setShowOrHideConfirm] = useState("Chide");
    let navigate = useNavigate();
    // -------------------------
    // Regex number
    // -------------------------
    const Only_number = /^[0-9\b]+$/;
    // -------------------------
    // Handle change
    // -------------------------
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == "Pnum") {
            if (Only_number.test(value)) {
                setFormValues({ ...formValues, [name]: value });
            }
        } else if (name == "Pword") {
            setFormValues({ ...formValues, [name]: value.trim() });
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
        // if (e.target != undefined) {

        // }
        // setFormValues({ ...formValues, birthday: e });
    };
    // -------------------------
    // Handle submit
    // -------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    // -------------------------
    // Show hide
    // -------------------------
    const showHide = () => {
        const action = showOrHide === "show" ? "hide" : "show";
        setShowOrHide(action);
    }

    const CshowHide = () => {
        const action = showOrHideConfirm === "Cshow" ? "Chide" : "Cshow";
        setShowOrHideConfirm(action)
    }
    const [isLoading, setIsLoading] = useState(false);
    // -------------------------
    // Handle Register
    // -------------------------
    async function Register() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsLoading(true);
            await Auth.register(formValues).then(response => {
                setIsLoading(false);
                toast.success(response.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate("/login")
            }).catch(e => {
                toast.error(e.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        } else {

        }
    }
    useEffect(() => {
        Register();
    }, [formErrors]);
    // -------------------------
    // Handle change
    // -------------------------
    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phone_regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        if (!values.Fname) {
            errors.Fname = "Firstname is required!";
        }
        else if (values.Fname.trim().length <= 0) {
            errors.Fname = "Firstname not be blank";
        }
        if (!values.Lname) {
            errors.Lname = "Lastname is required!";
        } else if (values.Lname.trim().length <= 0) {
            errors.Lname = "Lastname not be blank";
        }
        if (!values.Pnum) {
            errors.Pnum = "Phone is required!";
        } else if (!phone_regex.test(values.Pnum)) {
            errors.Pnum = "Invalid phone number";
        } else if (values.Pnum.trim().length <= 0) {
            errors.Pnum = "Phone not be blank";
        }
        if (!values.Emails) {
            errors.Emails = "Email is required!";
        } else if (!regex.test(values.Emails)) {
            errors.Emails = "This is not a valid email format!";
        } else if (values.Emails.trim().length <= 0) {
            errors.Emails = "Email not be blank";
        }
        if (!values.Pword) {
            errors.Pword = "Password is required";
        } else if (values.Pword.length < 5) {
            errors.Pword = "Password must be more than 5 characters";
        } else if (values.Pword.length > 20) {
            errors.Pword = "Password cannot exceed more than 20 characters";
        } else if (values.Pword.trim().length <= 0) {
            errors.Pword = "Password not be blank";
        }
        if (!values.Cword) {
            errors.Cword = "Confirm password is required";
        } else if (typeof values.Pword !== "undefined" && typeof values.Cword !== "undefined") {
            if (values.Pword != values.Cword) {
                errors.Cword = "Confirm password don't match password.";
            }
        } else if (values.Cword.trim().length <= 0) {
            errors.Cword = "Confirm Password cannot be blank";
        }
        return errors;
    };

    //Send emails
    return (
        <>
            <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100"
                data-appear-top-offset="600" data-parallax="scroll" data-image-src="/images/parallax/bgparallax-07.jpg">
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
                    {isLoading ? (
                        <h3>On Loading...</h3>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="Fname">First name</label>
                                    <input type="text" className="form-control" name="Fname" value={formValues.Fname} onChange={handleChange} />
                                    <p style={{ color: "red" }}>{formErrors.Fname}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Lname">Last name</label>
                                    <input type="text" className="form-control" name="Lname" value={formValues.Lname} onChange={handleChange} />
                                    <p style={{ color: "red" }}>{formErrors.Lname}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Emails">Email address</label>
                                    <input type="text" className="form-control" name="Emails" value={formValues.Emails} onChange={handleChange} aria-describedby="emailHelp" />
                                    <p style={{ color: "red" }}>{formErrors.Emails}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Pword">Password  (not allow whitespace in password)</label>
                                    <div className="input-group">
                                        <input type={showOrHide === "show" ? "text" : "password"} className="form-control" id="Pword" name="Pword" value={formValues.Pword} onChange={handleChange} />
                                        <span className="input-group-addon" style={{ cursor: 'pointer' }} onClick={showHide}>
                                            {showOrHide === "show" && (
                                                <VisibilityOffIcon />
                                            )}
                                            {showOrHide === "hide" && (
                                                <VisibilityIcon />
                                            )}
                                        </span>
                                    </div>
                                    <p style={{ color: "red" }}>{formErrors.Pword}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Pword">Confirm-password</label>
                                    <div className="input-group">
                                        <input type={showOrHideConfirm === "Cshow" ? "text" : "password"} className="form-control" id="Cword" name="Cword" value={formValues.Cword} onChange={handleChange} />
                                        <span className="input-group-addon" style={{ cursor: 'pointer' }} onClick={CshowHide}>
                                            {showOrHideConfirm === "Cshow" && (
                                                <VisibilityOffIcon />
                                            )}
                                            {showOrHideConfirm === "Chide" && (
                                                <VisibilityIcon />
                                            )}
                                        </span>
                                    </div>
                                    <p style={{ color: "red" }}>{formErrors.Cword}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Pnum">Phone number</label>
                                    <input type="text" className="form-control" name="Pnum" value={formValues.Pnum} onChange={handleChange} />
                                    <p style={{ color: "red" }}>{formErrors.Pnum}</p>
                                </div>
                                <div className="form-group">
                                    <NavLink to="/Login">Have account ? Want log in ?</NavLink>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </>
                    )}

                </div>
            </main>
        </>
    );
}
export default Register;