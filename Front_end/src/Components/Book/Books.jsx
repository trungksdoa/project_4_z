import React, { useState, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import WishlistAPI from '../../api/WishlistAPI.js';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify'
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

async function handleAddWishlist(auth, userID, booksid) {
    if (auth) {
        await WishlistAPI.Save(userID, booksid).then((wishlist) => {
            toast(wishlist.msg)
            //   setAction(new Date().toString());
        }).catch((error) => {
            alert(error.msg);
        })
    } else {
        alert("You are not logged in")
    }
}

const handleOnClick = {
    addToWish: (auth, userID, booksid) => {
        return handleAddWishlist(auth, userID, booksid);
    },
    addToBasket: () => {

    }
}
const Book = ({ booksid, bookname, pdetailid, bookprice, bookdescription, bookreleasedate, status, amounts, author, addWishlist, removeWishlist, changeAction }) => {

    return (
        <div className="item">
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        <div className="tg-frontcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" /></div>
                        <div className="tg-backcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" /></div>
                    </div>
                </figure>
                <div className="tg-postbookcontent">
                    <ul className="tg-bookscategories">
                        <li><a href="#!">Adventure</a></li>
                        <li><a href="#!">Fun</a></li>
                    </ul>
                    <div className="tg-booktitle">
                        <h3><Link to={"/Book/" + booksid}>{bookname}</Link></h3>
                    </div>
                    <span className="tg-bookwriter">By: <a href="#!">{author}</a></span>
                    <span className="tg-stars"><span /></span>
                    <span className="tg-bookprice">
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                    </span>
                    <a className="tg-btn tg-btnstyletwo">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                    </a>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    addWishlist: PropTypes.func,
    removeWishlist: PropTypes.func,
    onAdd: PropTypes.func
};

Book.defaultProps = {
    addWishlist: null,
    removeWishlist: null,
    onAdd: null
};

const FeatureBook_Author = (props) => {
    const { booksid, pdetailid, bookprice, bookname, wishlists, reviews, authorid, onAdd, addWishlist } = props
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
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
    let wishlistArray;
    if (auth) {
        wishlistArray = wishlists.filter(wishlist => wishlist.user_id.userid.includes(cookies.loggin.userID))
    }
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        <div className="tg-frontcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v" + new Date().getTime()} alt="image description" /></div>
                        <div className="tg-backcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v" + new Date().getTime()} alt="image description" /></div>
                    </div>
                    {auth && (
                        wishlistArray.length !== 0 && (
                            <a key={booksid} className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
                                <span>Already in wishlist</span>
                            </a>
                        )
                    )}
                    {auth && wishlistArray.length === 0 && (
                        <a key={booksid} className="tg-btnaddtowishlist" onClick={() => handleWishList(booksid)} style={{ cursor: 'pointer' }}>
                            <i className="icon-heart" />
                            <span>add to wishlist</span>
                        </a>
                    )}
                </figure>
                <div className="tg-postbookcontent">
                    <div className="tg-booktitle">
                        <h3
                            style={{
                                whiteSpace: "nowrap",
                                width: "80%",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            }}
                        ><a href={"/Book/" + booksid}>{bookname}</a></h3>
                    </div>
                    <span className="tg-bookwriter">By: <a href={"/author/" + authorid.authorid}>{authorid.authorname}</a></span>
                    <span>
                        <Rating name="read-only" size="large" precision={0.5} value={caculator(reviews)} readOnly />
                    </span>
                    <span className="tg-bookprice">
                        <p>${bookprice}</p>
                    </span>
                    {props.status === 3 ? (
                        <a className="tg-btn tg-btnstyletwo">
                            <i className="fa fa-shopping-basket" />
                            <em >Out stock</em>
                        </a>
                    ) : (
                        <a className="tg-btn tg-btnstyletwo" onClick={() => handleAddToCart(props)} style={{ cursor: 'pointer' }}>
                            <i className="fa fa-shopping-basket" />
                            <em >Add To Basket</em>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
FeatureBook_Author.propTypes = {
    wishlists: PropTypes.array,
    groupdetail: PropTypes.array,
    addWishlist: PropTypes.func
};

FeatureBook_Author.defaultProps = {
    wishlists: [],
    addWishlist: null
};

const ReleaseBook = ({ booksid, bookname, bookprice, bookdescription, bookreleasedate, status, amounts, author }) => {
    return (
        <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4">
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        {/* <div className="tg-frontcover"><img src={img} alt="image description" /></div>
                        <div className="tg-backcover"><img src={img} alt="image description" /></div> */}
                    </div>
                    <a className="tg-btnaddtowishlist" href="#!">
                        <i className="icon-heart" />
                        <span>add to wishlist</span>
                    </a>
                </figure>
                <div className="tg-postbookcontent">
                    <ul className="tg-bookscategories">
                        <li><a href="#!">Adventure</a></li>
                        <li><a href="#!">Fun</a></li>
                    </ul>
                    <div className="tg-booktitle">
                        <h3><a href="#!">{bookname}</a></h3>
                    </div>
                    <span className="tg-bookwriter">By: <a href="#!">{author}</a></span>
                    <span className="tg-stars"><span /></span>
                </div>
            </div>
        </div>
    )
}
export { Book, FeatureBook_Author, ReleaseBook }