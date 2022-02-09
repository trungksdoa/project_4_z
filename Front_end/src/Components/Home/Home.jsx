import React from "react";
import { useEffect, useState, useContext } from "react";
// import styles from './style.module.css';
import userApi from '../../api/Auth';
//Component
import { Link, useLocation } from "react-router-dom";
import Sectionspace from './sectionspace.jsx';
import FeatureBook from './Feature_book.jsx';
import Releases from './Release.jsx';
import Collection from './Collection_count.jsx';
import PB_author from './PB_Author.jsx';
import Testimonials from './Testimonials.jsx';
import Index_news from './Index_news.jsx';

import { data } from './arrays';
import { objectData } from './Object';
import WishlistAPI from '../../api/WishlistAPI.js';
import { useCookies } from 'react-cookie';
import {toast } from 'react-toastify'
const Home = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const [action,setAction] = useState("");
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    async function handleAddWishlist(value) {
        if(auth){
            await WishlistAPI.Save(cookies.loggin.userID,value).then((wishlist) => {
                toast(wishlist.msg)
                setAction(new Date().toString());
            }).catch((error) => {
                alert(error.msg);
            })
        }else{
            alert("You are not logged in")
        }
    }
    return (
        <>
            <main id="tg-main" className="tg-main tg-haslayout">
                {/*************************************
					Best Selling Start
			**************************************/}
                {<Sectionspace handleAddWishlist={handleAddWishlist} action={action} data={data}></Sectionspace>}
                {/*************************************
					Best Selling End
			**************************************/}
                {/*************************************
					Featured Item Start
			**************************************/}
                {<FeatureBook lasted_book={objectData}></FeatureBook>}
                {/*************************************
					Featured Item End
			**************************************/}
                {/*************************************
					New Release Start
			**************************************/}
                {<Releases data={data}></Releases>}
                {/*************************************
					New Release End
			**************************************/}
                {/*************************************
					Collection Count Start
			**************************************/}
                {<Collection></Collection>}
                {/*************************************
					Collection Count End
			**************************************/}
                {/*************************************
					Picked By Author Start
			**************************************/}

                {<PB_author></PB_author>}

                {/*************************************
					Picked By Author End
			**************************************/}
                {/*************************************
					Testimonials Start
			**************************************/}
                {<Testimonials></Testimonials>}
                {/*************************************
					Testimonials End
			**************************************/}
                {/* Latest News Start */}
                {/* **************************************/}
                {<Index_news></Index_news>}
                {/*************************************
					Latest News End
			**************************************/}
                {/*************************************
				Main End
		**************************************/}
            </main>
        </>
    )

}
export default Home