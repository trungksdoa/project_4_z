import React from "react";

import { useParams } from 'react-router-dom';
import { useLayoutEffect, useState } from "react";
import ProfileAPI from '../../api/profileAPI';
import { useCookies } from 'react-cookie';

//Page1
import moment from "moment";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
//End page1

import Overview from "./Overview.jsx";
import Order_tracking from "./Order_tracking.jsx";
import Wishlist from "./Wishlist.jsx";
import { useNavigate } from 'react-router-dom';
import Profile_sidebar from './Profile_sidebar.jsx'
import { Link, useSearchParams } from "react-router-dom";
function Ov1({data}) {
    return <Overview data={data}/>
}
function Ov2() {
    return <Order_tracking />
}
function Ov3() {
    return <Wishlist />
}

const Profile = () => {
    const [pages, setPages] = useState("page1");
    const [formData, setFormData] = useState({
        birthday: new Date(),
        first_name: "",
        last_name: "",
        phone: "",
        password: "",
        user_email: "",
        userID: ""
      });

    //Cookie
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    //Check is loggin
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;

    //Get param of user on url
    const { id } = useParams();

    //Fetch data
    async function fetchData(id) {
        return await ProfileAPI.findOne(id);
    }

    //Do function when render success
    useLayoutEffect(() => {
        if (auth) {
            // console.log(cookies.loggin.userID)
            fetchData(cookies.loggin.userID).then(response => {
                console.log(response)
                setFormData(response.data)
            }).catch(error => {
                alert(error)
            })
        }
    }, [])
  
    return (
        <>
            <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="tg-innerbannercontent">
                                <h1>Profile</h1>
                                <ol className="tg-breadcrumb">
                                    <li><a href="#!">home</a></li>
                                    <li className="tg-active">profile</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main id="tg-main" className="tg-main tg-haslayout">
                <div className="container">
                    <div className="row profile">
                        <Profile_sidebar ChangePage={(page) => setPages(page)} formData={formData} />
                        <div className="col-md-9">
                            <div className="profile-content">
                                {
                                    pages === "page1" ? (<Ov1 data={formData} />) : (pages === "page2" ? (<Ov2 />) : (<Ov3 />))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </main>
        </>
    )
}

export default Profile;