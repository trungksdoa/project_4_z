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
import WishlistAPI from '../../api/WishlistAPI.js';
import BannerAPI from '../../api/BannerAPI.js';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify'
const Home = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const [action, setAction] = useState("");
    const [banner_list, setBanner_list] = useState([]);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    async function handleAddWishlist(value) {
        if (auth) {
            await WishlistAPI.Save(cookies.loggin.userID, value).then((wishlist) => {
                toast(wishlist.msg)
                setAction(new Date().toString());
            }).catch((error) => {
                alert(error.msg);
            })
        } else {
            alert("You are not logged in")
        }
    }
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
                                    <div className="item active">
                                        <img src={"http://localhost:9999/image/" + banner.banner_Image + "?v=" + new Date().getTime()} alt="Sunset over beach" />
                                        <div className="carousel-caption"
                                            style={{
                                                backgroundColor: "rgba(0,0,0, 0.4) !important",
                                                color: "yellow",
                                                fontWeight: "bold",
                                                border: "3px solid #f1f1f1"
                                            }}
                                        >
                                            <h3 >{banner.banner_title}</h3>
                                            <p>{banner.banner_content}</p>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="item">
                                        <img src={"http://localhost:9999/image/" + banner.banner_Image + "?v=" + new Date().getTime()} alt="Sunset over beach" />
                                        <div className="carousel-caption"
                                            style={{
                                                backgroundColor: "rgba(0,0,0, 0.4) !important",
                                                color: "yellow",
                                                fontWeight: "bold",
                                                border: "3px solid #f1f1f1"
                                            }}>
                                            <h3>{banner.banner_title}</h3>
                                            <p>{banner.banner_content}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}

                        {/* <div className="item">
                            <img src="https://f24-zpc.zdn.vn/4464342945787128752/f95523de4fdd8383dacc.jpg" alt="Sunset over beach" />
                            <div className="carousel-caption">
                                <h3>Boracay</h3>
                                <p>White Sand Beach.</p>
                            </div>
                        </div>
                        <div className="item">
                            <img src="https://f24-zpc.zdn.vn/4464342945787128752/f95523de4fdd8383dacc.jpg" alt="Sunset over beach" />
                            <div className="carousel-caption">
                                <h3>Boracay</h3>
                                <p>White Sand Beach.</p>
                            </div>
                        </div> */}
                        {/* {banner_list.map((book, index) => {
                            console.log(book)
                            return (
                              
                            )
                        })} */}
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
                {<Sectionspace handleAddWishlist={handleAddWishlist} action={action} data={data}></Sectionspace>}
                {/*************************************
					Best Selling End
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
				Main End
		**************************************/}
            </main>
        </>
    )

}
export default Home