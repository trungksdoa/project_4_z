import React from "react";
import { Link, NavLink } from "react-router-dom"

const sidebar = ({ChangePage}) => {
    const HandleChange = (e) => {
        const page = e.currentTarget.dataset.page;
        ChangePage(page);
    }

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
                                <a style={{cursor:"pointer"}} data-page="page1" onClick={HandleChange}><i className="glyphicon glyphicon-home"> Overview</i></a>
                            </li>
                            <li>
                                <a style={{cursor:"pointer"}} data-page="page2" onClick={HandleChange}><i className="glyphicon glyphicon-user"> Order tracking</i></a>
                            </li>
                            <li>
                                <a style={{cursor:"pointer"}} data-page="page3" onClick={HandleChange}><i className="glyphicon glyphicon-ok"> Wishlist</i></a>
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