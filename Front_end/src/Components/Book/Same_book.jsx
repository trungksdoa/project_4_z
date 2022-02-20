import React, { Component } from "react";
import PropType from 'prop-types';
import Slider from 'react-slick'
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';


const Same_book = ({ data, onAdd, addWishlist }) => {
    var sliderItem = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg'];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 10000,
        className: "slider variable-width",
        variableWidth: true,
        cssEase: "linear"
    };
    const handleWishList = (bookId) => {
        if (addWishlist) {
            addWishlist(bookId)
        }
    }
    const handleAddToCart = (props) => {
        if (onAdd) {
            onAdd(props)
        }
    }
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;

    return (

        <div className="tg-relatedproducts" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="tg-sectionhead">
                    <h2><span>Related Products</span>You May Also Like</h2>
                    <a className="tg-btn" href="#!">View All</a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className=" tg-relatedbooks">
                    <Slider {...settings}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className="item" key={index} style={{ width: 180 }}>
                                        <div className="tg-postbook">
                                            <figure className="tg-featureimg">
                                                <div className="tg-bookimg">
                                                    <div className="tg-frontcover"><img src="images/books/img-01.jpg" alt="image description" /></div>
                                                    <div className="tg-backcover"><img src="images/books/img-01.jpg" alt="image description" /></div>
                                                </div>
                                                {auth && (
                                                    item.wishlists.length !== 0 &&
                                                    (
                                                        <a  className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
                                                            <span>Already in wishlist</span>
                                                        </a>
                                                    )
                                                )}
                                                {auth && (
                                                    item.wishlists.length === 0 &&
                                                    (
                                                        <a className="tg-btnaddtowishlist" onClick={() => handleWishList(item.booksid)} style={{ cursor: 'pointer' }}>
                                                            <i className="icon-heart" />
                                                            <span>add to wishlist</span>
                                                        </a>
                                                    )
                                                )}
                                                {!auth && (
                                                    <a className="tg-btnaddtowishlist" style={{ cursor: 'pointer' }}>
                                                        <span>Please login to use</span>
                                                    </a>
                                                )}
                                            </figure>
                                            <div className="tg-postbookcontent">
                                                <ul className="tg-bookscategories">
                                                    <li><a href="#!">Adventure</a></li>
                                                    <li><a href="#!">Fun</a></li>
                                                </ul>
                                                <div className="tg-themetagbox"><span className="tg-themetag">sale</span></div>
                                                <div className="tg-booktitle">
                                                    <h3><a href="#!">{item.bookname}</a></h3>
                                                </div>
                                                <span className="tg-bookwriter">By: <a href="#!">Angela Gunning</a></span>
                                                <span className="tg-stars"><span /></span>
                                                <span className="tg-bookprice">
                                                    <ins>$25.18</ins>
                                                    <del>$27.20</del>
                                                </span>
                                                <a className="tg-btn tg-btnstyletwo" style={{ cursor: 'pointer' }}>
                                                    <i className="fa fa-shopping-basket" />
                                                    <em onClick={() => handleAddToCart(item)}>Add To Basket</em>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>

                </div>
            </div>
        </div>
    )
}
Same_book.PropType = {
    data: PropType.array,
    addWishlist: PropType.func,
    onAdd: PropType.func
};
Same_book.defaultProps = {
    data: [],
    addWishlist: null,
    onAdd: null
};
export default Same_book
