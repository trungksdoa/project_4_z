import React from "react";

import { useEffect, useState } from "react";

import Page1 from "./page1.jsx";
import Page2 from "./page2.jsx";
import Page3 from "./page3.jsx";
import Page4 from "./page4.jsx";
import { useNavigate } from 'react-router-dom';
import Profile_sidebar from './Profile_sidebar.jsx'
import { Link, useSearchParams } from "react-router-dom";


const components = {
    'page1': Page1,
    'page2': Page2,
    'page3': Page3,
    'page4': Page4,
}


const Profile = () => {
    const navigate = useNavigate();
    let [page, setPage] = useState('page1');
    // const HandlePageChange = (newPage) => {
    //     setPage(newPage);
    // }
    // setPage(Page3);
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
                        <Profile_sidebar/>
                        <div className="col-md-9">
                            <div className="profile-content">
                                {/* <components.page/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <strong>Licence profile theme :
                        <a href="https://bootsnipp.com/snippets/M48pA#" target="_blank">https://bootsnipp.com/snippets/M48pA#</a></strong>
                </center>
                <br />
                <br />
            </main>
        </>
    )
}

export default Profile;