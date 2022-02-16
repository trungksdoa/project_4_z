import React,{ useLayoutEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import ProfileAPI from '../../api/profileAPI';
const Sidebar = () => {
    const { pathname } = useLocation();
    const getNavLinkClass = (path) => {
        return pathname === path ? 'active' : '';
    }
    
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        user_email: "",
    });

    //Cookie
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    //Check is loggin
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;


    //Fetch data
    async function fetchData(id) {
        return await ProfileAPI.findOne(id);
    }

    //Do function when render success
    useLayoutEffect(() => {
        if (auth) {
            // console.log(cookies.loggin.userID)
            fetchData(cookies.loggin.userID).then(response => {
                setFormData(response.data)
            }).catch(error => {
                alert(error)
            })
        }
    }, [])
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
                            <li className={getNavLinkClass("/Profile/setting")}>
                                <Link to="/Profile/setting" ><i className="glyphicon glyphicon-home"> Setting</i></Link>
                            </li>
                            <li className={getNavLinkClass("/Profile/Order")}>
                                <Link to="/Profile/Order" ><i className="glyphicon glyphicon-user"> Order</i></Link>
                            </li>
                            <li className={getNavLinkClass("/Profile/Wishlist")}>
                                <Link to="/Profile/Wishlist" ><i className="glyphicon glyphicon-ok"> Wishlist</i></Link>
                            </li>
                        </ul>
                    </div>
                    {/* END MENU */}
                </div>
            </div>
        </>
    )

}
export default Sidebar;