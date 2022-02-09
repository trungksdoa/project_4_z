import React, { useState, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import WishlistAPI from '../../api/WishlistAPI.js';
import { useCookies } from 'react-cookie';

const Book = ({ id, img, title, cate, author, addWishlist, removeWishlist, changeAction }) => {
    function handleAddWishlist(value) {
        if (addWishlist) {
            addWishlist(value);
        }
    }
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const [wishlistExist, setSWishlistExist] = useState({});
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    async function fetchData() {
        if (auth) {
            await WishlistAPI.getByBookId(cookies.loggin.userID, id).then((wishlist) => {
                setSWishlistExist(wishlist.data == null ? {} : wishlist.data);
            }).catch((error) => {
                alert(error.msg);
            })
        }
    }
    useLayoutEffect(() => {
        fetchData();
    }, [cookies, changeAction])
    return (
        <div className="item">
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        <div className="tg-frontcover"><img src={img + "?v=" + new Date().getTime()} alt="image description" /></div>
                        <div className="tg-backcover"><img src={img + "?v=" + new Date().getTime()} alt="image description" /></div>
                    </div>
                    {Object.keys(wishlistExist).length !== 0 ? (
                        <a className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
                            <span>Already in wishlist</span>
                        </a>
                    ) : (
                        <a className="tg-btnaddtowishlist" onClick={() => handleAddWishlist(id)} style={{ cursor: 'pointer' }}>
                            <i className="icon-heart" />
                            <span>add to wishlist</span>
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
                        <h3><Link to={"/Book/" + id}>{title}</Link></h3>
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
    removeWishlist: PropTypes.func
};

Book.defaultProps = {
    addWishlist: null,
    removeWishlist: null
};
const FeatureBook = ({ id, img, title, cate, author }) => {
    return (
        <div className="tg-featureditm">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
                <figure><img src={img + "?v" + new Date().getTime()} alt="image description" /></figure>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="tg-featureditmcontent">
                    <div className="tg-themetagbox"><span className="tg-themetag">featured</span></div>
                    <div className="tg-booktitle">
                        <h3><Link to={"/Book/" + id}>{title}</Link></h3>
                    </div>
                    <span className="tg-bookwriter">By: <a href="#!">{author}</a></span>
                    <span className="tg-stars"><span /></span>
                    <div className="tg-priceandbtn">
                        <span className="tg-bookprice">
                            <ins>$23.18</ins>
                            <del>$30.20</del>
                        </span>
                        <a className="tg-btn tg-btnstyletwo tg-active" href="#!">
                            <i className="fa fa-shopping-basket" />
                            <em>Add To Basket</em>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureBook_Author = ({ booksid, pdetailid, bookname, cate, author }) => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        <div className="tg-frontcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v" + new Date().getTime()} alt="image description" /></div>
                        <div className="tg-backcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v" + new Date().getTime()} alt="image description" /></div>
                    </div>
                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                        <i className="icon-heart" />
                        <span>add to wishlist</span>
                    </a>
                </figure>
                <div className="tg-postbookcontent">
                    <ul className="tg-bookscategories">
                        <li><a href="javascript:void(0);">Art &amp; Photography</a></li>
                    </ul>
                    <div className="tg-themetagbox"><span className="tg-themetag">sale</span></div>
                    <div className="tg-booktitle">
                        <h3><Link to={"/Book/" + booksid}>{bookname}</Link></h3>
                    </div>
                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">{author}</a></span>
                    <span className="tg-stars"><span /></span>
                    <span className="tg-bookprice">
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                    </span>
                    <a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                    </a>
                </div>
            </div>
        </div>
    );
};

const ReleaseBook = ({ id, img, title, cate, author }) => {
    return (
        <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4">
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        <div className="tg-frontcover"><img src={img} alt="image description" /></div>
                        <div className="tg-backcover"><img src={img} alt="image description" /></div>
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
                        <h3><a href="#!">{title}</a></h3>
                    </div>
                    <span className="tg-bookwriter">By: <a href="#!">{author}</a></span>
                    <span className="tg-stars"><span /></span>
                </div>
            </div>
        </div>
    )
}
export { Book, FeatureBook, FeatureBook_Author, ReleaseBook }
