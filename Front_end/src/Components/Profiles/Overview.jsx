import React from "react";
import { useEffect, useState } from "react";

import ProfileAPI from '../../api/profileAPI';
import PropTypes from 'prop-types'
import moment from "moment";
import { toast } from 'react-toastify';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import "./App.css";
const Page1 = ({ data }) => {

  //Show Hide password
  const [showOrHide, setShowOrHide] = useState("hide");
  //Check error
  const [formErrors, setFormErrors] = useState({});
  //Check is Submit
  const [isSubmit, setIsSubmit] = useState(false);
  //Pattern number
  const Only_number = /^[0-9\b]+$/;
  //Form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
    user_email: "",
    userID: ""
  });

  useEffect(() => {
    setFormData(data)

    return (() => setFormData({}))
  }, [data])


  //Show hide function
  const showHide = () => {
    const action = showOrHide === "show" ? "hide" : "show";
    setShowOrHide(action);
  }
  //Change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "phone") {
      if (Only_number.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  //Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };
  //Update_ request function
  async function Update_profile() {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      await ProfileAPI.Edit(formData.userID, formData).then(res => {
        toast(res.msg);
        setFormData(res.data)
      }).catch(error => {
        alert(error.msg)
      });
      // console.log(formData);
    }
  }
  useEffect(() => {
    Update_profile();
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phone_regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!values.first_name) {
      errors.first_name = "Firstname is required!";
    }
    else if (values.first_name.trim().length <= 0) {
      errors.first_name = "Firstname not be blank";
    }
    if (!values.last_name) {
      errors.last_name = "Lastname is required!";
    } else if (values.last_name.trim().length <= 0) {
      errors.last_name = "Lastname not be blank";
    }
    if (!values.phone) {
      errors.phone = "Phonenumber is required!";
    } else if (!phone_regex.test(values.phone)) {
      errors.phone = "Invalid phone number";
    } else if (values.phone.trim().length <= 0) {
      errors.phone = "Phonenumber not be blank";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 12) {
      errors.password = "Password must be more than 12 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 20 characters";
    } else if (values.password.trim().length <= 0) {
      errors.password = "Password not be blank";
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
                  <label htmlFor="first_name">First name</label>
                  <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleChange} />
                  <p style={{ color: "red" }}>{formErrors.first_name}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="last_name">Last name</label>
                  <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} />
                  <p style={{ color: "red" }}>{formErrors.last_name}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <input type={showOrHide === "show" ? "text" : "password"} className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                  <span className="input-group-addon" style={{ cursor: 'pointer' }} onClick={showHide}>
                    {showOrHide === "show" && (
                      <VisibilityOffIcon />
                    )}
                    {showOrHide === "hide" && (
                      <VisibilityIcon />
                    )}
                  </span>
                </div>
                <p style={{ color: "red" }}>{formErrors.password}</p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
                  <p style={{ color: "red" }}>{formErrors.phone}</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <button style={{ width: "100%", position: "relative", top: "3rem", padding: "10px" }} type="submit" id="button" name="submit" className="btn btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}
Page1.propTypes = {
  data: PropTypes.object
};

Page1.defaultProps = {
  data: {}
};
export default Page1