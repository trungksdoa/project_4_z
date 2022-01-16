import React from "react";
import PropTypes from 'prop-types'

const Page1 = () => {
  return (
    <>
      <div className="card h-100">
        <div className="card-body">
          <div className="row gutters">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="fullName">Last name</label>
                <input type="text" className="form-control profile_form" id="Lastname" defaultValue="Hoang trung" placeholder="Enter full name" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="fullName">First name</label>
                <input type="text" className="form-control profile_form" id="firstName" defaultValue="Hoang trung" placeholder="Enter full name" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="fullName">Password</label>
                <input type="password" className="form-control profile_form" id="password" defaultValue="Vo" placeholder="Enter full name" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control profile_form" id="phone" defaultValue={12345678} placeholder="Enter phone number" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="website">Birthday</label>
                <input type="datetime-local" className="form-control profile_form" id="website" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <button style = {{width:"100%",position:"relative",top:"3rem",padding:"10px"}} type="button" id="button" name="submit" className="btn btn-primary">Update</button>
              </div>
            </div>
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