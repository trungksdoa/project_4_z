import React from "react";
import { Link, NavLink } from "react-router-dom"

const sidebar = () => {
    return (
        <>
            <div className="col-md-3">
                <div className="profile-sidebar">
                    {/* SIDEBAR USER TITLE */}
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">
                            Fistname + Lastname
                        </div>
                        <div className="profile-phonenumber">
                            trungksdoa@gmail.com
                        </div>
                    </div>
                    <div className="profile-usermenu">
                        <ul className="nav profile_sidebar">
                            <li className="active">
                                <NavLink to='/Profile/'>
                                    <i className="glyphicon glyphicon-home" /> Overview
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Profile/Order_tracking'>
                                    <i className="glyphicon glyphicon-user" /> Order tracking
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Profile/Wishlist'>
                                    <i className="glyphicon glyphicon-ok" /> Wishlist
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* END MENU */}
                </div>
            </div>
        </>
    )

}
export default sidebar;