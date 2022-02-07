import React from "react";
import { Link, NavLink } from "react-router-dom"

const sidebar = ({ ChangePage, formData }) => {
    const HandleChange = (e) => {
        const page = e.currentTarget.dataset.page;
        var target = e.currentTarget;
        var li = target.parentNode;

        document.querySelector('ul.profile_sidebar > li.active').classList.remove("active");;
        // return element ? element.classList.value : undefined;
        li.classList.add("active");
        ChangePage(page);
    }
    const setActive = () => {

    }
    return (
        <>
            <div className="col-md-3">
                <div className="profile-sidebar">
                    {/* SIDEBAR USER TITLE */}
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">
                            {formData.first_name} {formData.last_name}
                        </div>
                        <div className="profile-phonenumber">
                            {formData.user_email}
                        </div>
                    </div>
                    <div className="profile-usermenu">
                        <ul className="nav profile_sidebar">
                            <li className="active">
                                <a style={{ cursor: "pointer" }} data-page="page1" onClick={HandleChange}><i className="glyphicon glyphicon-home"> Overview</i></a>
                            </li>
                            <li>
                                <a style={{ cursor: "pointer" }} data-page="page2" onClick={HandleChange}><i className="glyphicon glyphicon-user"> Order tracking</i></a>
                            </li>
                            <li>
                                <a style={{ cursor: "pointer" }} data-page="page3" onClick={HandleChange}><i className="glyphicon glyphicon-ok"> Wishlist</i></a>
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