import React from "react";
import { useEffect, useState, useContext } from "react";
// import styles from './style.module.css';
import userApi from '../../api/Auth';
//Component
import { Link, useLocation } from "react-router-dom";
import Sectionspace from './sectionspace.jsx';
import Releases from './Release.jsx';
import PB_author from './PB_Author.jsx';
import Banner from '../Banner/Banner.jsx';
import BookAPI from '../../api/BookAPI.js';
import BannerAPI from '../../api/BannerAPI.js';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify'
const Home = () => {
    const [action, setAction] = useState("");
    const [book_list, setbook_list] = useState([]);



    return (
        <>
            <main id="tg-main" className="tg-main tg-haslayout">
                {/* Carousel container */}
                <Banner />
                {<Sectionspace></Sectionspace>}
                <Releases />
                {<PB_author></PB_author>}

                {/*************************************
				Main End
		**************************************/}
            </main>
        </>
    )

}
export default Home