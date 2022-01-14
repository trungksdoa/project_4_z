import React from "react";
import { Link } from "react-router-dom"
const sidebar = () => {
    const HandleChangePage = (newPage) => {

    }
    return (
        <div className="col-md-3">
            <div className="profile-sidebar">
                {/* SIDEBAR USER TITLE */}
                <div className="profile-usertitle">
                    <div className="profile-usertitle-name">
                        Trung
                    </div>
                    <div className="profile-phonenumber">
                        003
                    </div>
                </div>
                {/* END SIDEBAR USER TITLE */}
                {/* SIDEBAR BUTTONS */}
                <div className="profile-userbuttons">
                    <Link to='/profile/Edit'>
                        <button type="button" className="btn btn-success btn-sm" >
                            Edit
                        </button>
                    </Link>
                    {/* <button type="button" className="btn btn-danger btn-sm">
            Message
        </button> */}
                </div>
                {/* END SIDEBAR BUTTONS */}
                {/* SIDEBAR MENU */}
                <div className="profile-usermenu">
                    <ul className="nav">
                        <li className="active">
                            <a href="#">
                                <i className="glyphicon glyphicon-home" /> Overview
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="glyphicon glyphicon-user" /> Account Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <i className="glyphicon glyphicon-ok" /> Tasks
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="glyphicon glyphicon-flag" /> Help
                            </a>
                        </li>
                    </ul>
                </div>
                {/* END MENU */}
            </div>
        </div>
    )

}
export default sidebar;