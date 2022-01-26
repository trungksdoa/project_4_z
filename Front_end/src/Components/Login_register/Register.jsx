import React from "react";
import { useEffect, useState } from "react";


import moment from "moment";
// import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

import Datepicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

import "./App.css";

import Auth from '../../api/Auth'



const Register = () => {
    const initialValues = { Fname: "", Lname: "", Emails: "", Pword: "", Cword: "", Pnum: "", birthday: new Date(moment().subtract(16, "years").toString()) };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    let navigate = useNavigate();
    const Only_number = /^[0-9\b]+$/;
    const handleChange = (e) => {

        if (e.target === undefined) {
            const parse = new Date(e);
            console.log(parse.toLocaleDateString())
            setFormValues({ ...formValues, birthday: e });
        } else {
            const { name, value } = e.target;
            if (name == "Pnum") {
                if (Only_number.test(value)) {
                    setFormValues({ ...formValues, [name]: value });
                }
            } else {
                setFormValues({ ...formValues, [name]: value });
            }
        }
        // if (e.target != undefined) {

        // }
        // setFormValues({ ...formValues, birthday: e });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    async function Register() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            await Auth.register(formValues).then(response => {
                alert(response.msg);
                // sendEmail(response.data.userID,"vohoangtrung")
                navigate("/login")
            }).catch(e => {
                alert(e.msg);
            });
        }
    }
    useEffect(() => {
        Register();
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
            errors.Pnum = "Phonenumber is required!";
        } else if (!phone_regex.test(values.Pnum)) {
            errors.Pnum = "Invalid phone number";
        } else if (values.Pnum.trim().length <= 0) {
            errors.Pnum = "Phonenumber not be blank";
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
        } else if (values.Pword.length < 12) {
            errors.Pword = "Password must be more than 12 characters";
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
            errors.Cword = "Confirm password not be blank";
        }

        if (!values.birthday) {
            errors.birthday = "Birthday is required!";
        }
        return errors;
    };

    //Send emails
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
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Result:</label>
                            {Object.keys(formErrors).length === 0 && isSubmit ? (
                                <div className="ui message success">Signed in successfully</div>
                            ) : (
                                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                            )}
                            <label>Error:</label>
                            <pre>{JSON.stringify(formErrors, undefined, 2)}</pre>
                        </div>
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
                            <label htmlFor="Pword">Password</label>
                            <input type="password" className="form-control" name="Pword" value={formValues.Pword} onChange={handleChange} />
                            <p style={{ color: "red" }}>{formErrors.Pword}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Pword">Confirm-password</label>
                            <input type="password" className="form-control" name="Cword" value={formValues.Cword} onChange={handleChange} />
                            <p style={{ color: "red" }}>{formErrors.Cword}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Pnum">Phone number</label>
                            <input type="text" className="form-control" name="Pnum" value={formValues.Pnum} onChange={handleChange} />
                            <p style={{ color: "red" }}>{formErrors.Pnum}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Bday">Birthday</label>
                            <Datepicker className='form-control'
                                selected={formValues.birthday}

                                minDate={new Date(moment().subtract(100, "years"))}
                                maxDate={new Date(moment().subtract(16, "years"))}
                                // customInput={<ExampleCustomInput />}
                                withPortal
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                placeholderText="Click to select a your birthday"
                                onChange={(date) => handleChange(date)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </main>
        </>
    );
}
export default Register;