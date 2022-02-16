import {
    Outlet,
} from 'react-router-dom';
import React, { useLayoutEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import "./App.css";
//End page1
import Profile_sidebar from './Profile_sidebar.jsx'

const Profile = () => {
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
                        <Profile_sidebar/>
                        <div className="col-md-9">
                            <div className="profile-content">
                                <Outlet/>
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