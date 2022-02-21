import React, { Component } from "react";
import PropType from 'prop-types';
import Slider from 'react-slick'
import { useCookies } from 'react-cookie';
import Rating from '@mui/material/Rating';

function caculator(data) {
    //Tóm tắt
    //1: thuộc tính star nằm trong đối tượng
    //2: lấy tổng số đánh giá
    //3: công thức (1 x SUM(WHERE rating = 1) + 2 x total_rate_2 + 3 x total_rate_3 + 4 x total_rate_4 + 5 x total_rate_5) / total_rating
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    var average = 0;
    const newArray = data.filter(review => review.active === 1)
    var total_rating = newArray.map(item => item.ratingstart).reduce((prev, curr) => prev + curr, 0);

    data.forEach(function (x) { counts[x.ratingstart] = (counts[x.ratingstart] || 0) + 1; });

    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
    const sum = sumValues(counts); // gives 5

    return total_rating / sum;
}


const Same_book = ({ data, onAdd, addWishlist }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 2000,
        // autoplaySpeed: 2000,
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
                    <a className="tg-btn" href="/Collection">View All</a>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className=" tg-relatedbooks" style={{
                    paddingBottom: "10%"
                }}>
                    <Slider {...settings}>
                        {
                            data.map((item, index) => {
                                let wishlistArray;
                                if(auth){
                                    wishlistArray = item.wishlists.filter(wishlist => wishlist.user_id.userid.includes(cookies.loggin.userID))
                                }
                                return (
                                    <div className="item" key={index} style={{ width: 180 }}>
                                        <div className="tg-postbook">
                                            <figure className="tg-featureimg">
                                                <div className="tg-bookimg">
                                                    <div className="tg-frontcover"><img src="images/books/img-01.jpg" alt="image description" /></div>
                                                    <div className="tg-backcover"><img src="images/books/img-01.jpg" alt="image description" /></div>
                                                </div>
                                                {auth && (
                                                    wishlistArray.length !== 0 && (
                                                        <a key={index} className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
                                                            <span>Already in wishlist</span>
                                                        </a>
                                                    )
                                                )}
                                                {auth && wishlistArray.length === 0 && (
                                                    <a key={index} className="tg-btnaddtowishlist" onClick={() => handleWishList(item.booksid)} style={{ cursor: 'pointer' }}>
                                                        <i className="icon-heart" />
                                                        <span>add to wishlist</span>
                                                    </a>
                                                )}
                                            </figure>
                                            <div className="tg-postbookcontent">
                                                <ul className="tg-bookscategories">
                                                    {item.groupdetail.length !== 0 && item.groupdetail.map((category, index) => {
                                                        if (index < 2) {
                                                            return (
                                                                <li key={index}>
                                                                    <a href={"/Collection/" + category.catagoryid.catagoryid}>
                                                                        <small>{category.catagoryid.catagoryname}</small>
                                                                    </a>
                                                                </li>
                                                            )
                                                        }
                                                    })}
                                                    {item.groupdetail.length === 0 && (
                                                        <li>On update</li>
                                                    )}
                                                </ul>
                                                <div className="tg-booktitle">
                                                    <h3
                                                        style={{
                                                            whiteSpace: "nowrap",
                                                            width: "80%",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis"
                                                        }}
                                                    ><a href={"/Book/" + item.booksid}>{item.bookname}</a></h3>
                                                </div>
                                                <span className="tg-bookwriter">By: <a href={"/author/" + item.authorid.authorid}>{item.authorid.authorname}</a></span>
                                                <span>
                                                    <Rating name="read-only" size="large" precision={0.5} value={caculator(item.reviews)} readOnly />
                                                </span>
                                                <span className="tg-bookprice">
                                                    <p>${item.bookprice}</p>
                                                </span>
                                                <a className="tg-btn tg-btnstyletwo" onClick={() => handleAddToCart(item)} style={{ cursor: 'pointer' }}>
                                                    <i className="fa fa-shopping-basket" />
                                                    <em>Add To Basket</em>
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
