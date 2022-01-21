import React from "react";
import { useEffect, useState } from "react";

import PropTypes from 'prop-types'
import moment from "moment";
import Datepicker from "react-datepicker";

import Auth from '../../api/Auth'

import "react-datepicker/dist/react-datepicker.css";

import "./App.css";
const Page1 = () => {
  const initialValues = { Fname: "", Lname: "", Pword: "", Pnum: "", birthday: new Date(moment().subtract(16, "years").toString()) };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
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
  async function Update_profile() {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }
  useEffect(() => {
    Update_profile();
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
    if (!values.Pword) {
      errors.Pword = "Password is required";
    } else if (values.Pword.length < 12) {
      errors.Pword = "Password must be more than 12 characters";
    } else if (values.Pword.length > 20) {
      errors.Pword = "Password cannot exceed more than 20 characters";
    } else if (values.Pword.trim().length <= 0) {
      errors.Pword = "Password not be blank";
    }
    if (!values.birthday) {
      errors.birthday = "Birthday is required!";
    }
    return errors;
  };
  return (
    <>
      <div className="card h-100">
        <div className="card-body">
          <div className="row gutters">
            <form onSubmit={handleSubmit}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label>Result:</label>
                  {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">Update successfully</div>
                  ) : (
                    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                  )}
                  <label>Error:</label>
                  <pre>{JSON.stringify(formErrors, undefined, 2)}</pre>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="Fname">First name</label>
                  <input type="text" className="form-control" name="Fname" value={formValues.Fname} onChange={handleChange} />
                  <p style={{ color: "red" }}>{formErrors.Fname}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="Lname">Last name</label>
                  <input type="text" className="form-control" name="Lname" value={formValues.Lname} onChange={handleChange} />
                  <p style={{ color: "red" }}>{formErrors.Lname}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="Pword">Password</label>
                  <input type="password" className="form-control" name="Pword" value={formValues.Pword} onChange={handleChange} />
                  <p style={{ color: "red" }}>{formErrors.Pword}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="Pnum">Phone number</label>
                  <input type="text" className="form-control" name="Pnum" value={formValues.Pnum} onChange={handleChange} />
                  <p style={{ color: "red" }}>{formErrors.Pnum}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
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
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <button style={{ width: "100%", position: "relative", top: "3rem", padding: "10px" }} type="submit" id="button" name="submit" className="btn btn-primary">Update</button>
                </div>
              </div>
            </form>
          </div>
          {/* <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-right">
                <button type="button" id="submit" name="submit" className="btn btn-primary">Update</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>

  );
}

export default Page1