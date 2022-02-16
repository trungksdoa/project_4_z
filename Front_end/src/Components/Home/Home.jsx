import React from "react";
import { useEffect, useState, useContext } from "react";
// import styles from './style.module.css';
import userApi from '../../api/Auth';
//Component
import { Link, useLocation } from "react-router-dom";
import Sectionspace from './sectionspace.jsx';
import Releases from './Release.jsx';
import Collection from './Collection_count.jsx';
import PB_author from './PB_Author.jsx';

import BookAPI from '../../api/BookAPI.js';
import BannerAPI from '../../api/BannerAPI.js';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify'
const Home = () => {
    const [action, setAction] = useState("");
    const [banner_list, setBanner_list] = useState([]);
    const [book_list, setbook_list] = useState([]);
    async function Fetch() {
        await BannerAPI.getBanner().then((banner) => {
            setBanner_list(banner.data)
        }).catch((error) => {
            alert(error.msg);
        })
    }
    useEffect(() => {
        Fetch();
    }, [])
    async function BFetch() {
        await BookAPI.FindALl().then((book) => {
            setbook_list(book.data);
            console.log(book.data);
        }).catch((error) => {
            alert(error.msg);
        })
    }
    useEffect(() => {
        BFetch();
    }, [])

    return (
        <>
            <main id="tg-main" className="tg-main tg-haslayout">
                {/* Carousel container */}
                <div id="my-pics" className="carousel slide" data-ride="carousel" style={{
                    width: "78%",
                    height: "auto",
                    margin: "1% auto"
                }}>
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#my-pics" data-slide-to={0} className="active" />
                        <li data-target="#my-pics" data-slide-to={1} />
                        <li data-target="#my-pics" data-slide-to={2} />
                    </ol>
                    {/* Content */}
                    <div className="carousel-inner" role="listbox">
                        {/* Slide 1 */}
                        {banner_list.map((banner, index) => {
                            if (index === 0) {
                                return (
                                    <div className="item active" key={index}>
                                        <img src={"http://localhost:9999/image/" + banner.banner_Image + "?v=" + new Date().getTime()} alt="Sunset over beach" />
                                        <div className="carousel-caption"
                                            style={{
                                                color: "white",
                                                fontWeight: "bold",
                                                border: "3px solid rgb(241, 241, 241)",
                                                boxShadow: "rgb(216 207 207) 0px 4px 8px 0px",
                                                background: "rgb(0 0 0 / 60%)",
                                            }}
                                        >
                                            <h3 style={{color: "white"}} >{banner.banner_title}</h3>
                                            <p>{banner.banner_content}</p>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="item" key={index}>
                                        <img src={"http://localhost:9999/image/" + banner.banner_Image + "?v=" + new Date().getTime()} alt="Sunset over beach" />
                                        <div className="carousel-caption"
                                            style={{
                                                color: "white",
                                                fontWeight: "bold",
                                                border: "3px solid rgb(241, 241, 241)",
                                                boxShadow: "rgb(216 207 207) 0px 4px 8px 0px",
                                                background: "rgb(0 0 0 / 60%)",
                                            }}
                                        >
                                            <h3 style={{color: "white"}}>{banner.banner_title}</h3>
                                            <p>{banner.banner_content}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    {/* Previous/Next controls */}
                    <a className="left carousel-control" href="#my-pics" role="button" data-slide="prev">
                        <span className="icon-prev" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#my-pics" role="button" data-slide="next">
                        <span className="icon-next" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                {/*************************************
					Best Selling Start
			**************************************/}
                
                {<Sectionspace handleAddWishlist={handleAddWishlist} action={action} ></Sectionspace>}

                {<Sectionspace action={action} data={book_list}></Sectionspace>}
                {/*************************************
                 * 
					Best Selling End
			**************************************/}
                {/*************************************
					New Release Start
			**************************************/}
                {/* {<Releases data={book_list}></Releases>} */}
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
				Main End
		**************************************/}
            </main>
        </>
    )

}
export default Home