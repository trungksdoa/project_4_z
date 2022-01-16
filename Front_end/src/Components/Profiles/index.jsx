import React from "react";

import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";

import Overview from "./Overview.jsx";
import Order_tracking from "./Order_tracking.jsx";
import Wishlist from "./Wishlist.jsx";
import Page4 from "./page4.jsx";
import { useNavigate } from 'react-router-dom';
import Profile_sidebar from './Profile_sidebar.jsx'
import { Link, useSearchParams } from "react-router-dom";
import ButtonGroup from './button.jsx';



const Profile = () => {
    const navigate = useNavigate();
    let { page } = useParams();
    const [pages, setPages] = useState(<Overview />);
    useEffect(() => {
        if (page === "Order_tracking") {
            setPages(<Order_tracking />)
        } else if (page === "Wishlist") {
            setPages(<Wishlist />)
        } else {
            setPages(<Overview />)
        }
    },[page])
    const [selectedDashboard, setSelectedDashboard] = useState("overview")
    return (
        <>
            <div class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="tg-innerbannercontent">
                                <h1>Profile</h1>
                                <ol class="tg-breadcrumb">
                                    <li><a href="javascript:void(0);">home</a></li>
                                    <li class="tg-active">profile</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main id="tg-main" className="tg-main tg-haslayout">
                <div className="container">
                    <div className="row profile">
                        <Profile_sidebar />
                        <div className="col-md-9">
                            <div className="profile-content">
                                {pages}
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