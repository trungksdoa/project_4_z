import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import WishlistAPI from '../../api/WishlistAPI.js';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify'
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

async function handleAddWishlist(auth, userID, booksid) {
	if (auth) {
		await WishlistAPI.Save(userID, booksid)
			.then((wishlist) => {
				toast(wishlist.msg);
				//   setAction(new Date().toString());
			})
			.catch((error) => {
				alert(error.msg);
			});
	} else {
		alert('You are not logged in');
	}
}
const Book = ({ booksid, bookname, pdetailid, bookprice, bookdescription, bookreleasedate, status, amounts, author, addWishlist, removeWishlist, changeAction }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;

    function handleAddWishlist() {
        handleOnClick.addToWish(auth, cookies.loggin.userID, booksid);
    }
    //const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const [wishlistExist, setSWishlistExist] = useState({});
    // const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    async function fetchData() {
        if (auth) {
            await WishlistAPI.getByBookId(cookies.loggin.userID, booksid).then((wishlist) => {
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
                        <div className="tg-frontcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" /></div>
                        <div className="tg-backcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" /></div>
                    </div>
                    {Object.keys(wishlistExist).length !== 0 ? (
                        <a className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
                            <span>Already in wishlist</span>
                        </a>
                    ) : (
                        <a className="tg-btnaddtowishlist" onLCick={handleAddWishlist} style={{ cursor: 'pointer' }}>
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
                    <div className="tg-booktitle">
                        <h3><Link to={"/Book/" + booksid}>{bookname}</Link></h3>
                    </div>
					{Object.keys(wishlistExist).length !== 0 ? (
						<a className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
							<span>Already in wishlist</span>
						</a>
					) : (
						<a
							className="tg-btnaddtowishlist"
							onClick={() => handleAddWishlist(booksid)}
							style={{ cursor: 'pointer' }}
						>
							<i className="icon-heart" />
							<span>add to wishlist</span>
						</a>
					)}
				</figure>
				<div className="tg-postbookcontent">
					<ul className="tg-bookscategories">
						<li>
							<a href="#!">Adventure</a>
						</li>
						<li>
							<a href="#!">Fun</a>
						</li>
					</ul>
					<div className="tg-themetagbox">
						<span className="tg-themetag">sale</span>
					</div>
					<div className="tg-booktitle">
						<h3>
							<Link to={'/Book/' + booksid}>{bookname}</Link>
						</h3>
					</div>
					<span className="tg-bookwriter">
						By: <a href="#!">{author}</a>
					</span>
					<span className="tg-stars">
						<span />
					</span>
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

const FeatureBook_Author = ({ booksid, pdetailid, bookname, wishlists, authorid, addWishlist }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    const handleWishList = (bookId) => {
        if (addWishlist) {
            addWishlist(bookId)
        }
    }
    console.log(wishlists)
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        <div className="tg-frontcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v" + new Date().getTime()} alt="image description" /></div>
                        <div className="tg-backcover"><img src={"http://localhost:9999/image/" + pdetailid.imageLink + "?v" + new Date().getTime()} alt="image description" /></div>
                    </div>
                    {auth && (
                        wishlists.length !== 0 &&
                        (
                            wishlists.map((wishCheck, index) => {
                                return (
                                    <a key={index} className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
                                        <span>Already in wishlist</span>
                                    </a>
                                )
                            })
                        )
                    )}
                    {auth && (
                        wishlists.length === 0 &&
                        (
                            <a className="tg-btnaddtowishlist" onClick={() => handleWishList(booksid)} style={{ cursor: 'pointer' }}>
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
                    <div className="tg-booktitle">
                        <h3><Link to={"/Book/" + booksid}>{bookname}</Link></h3>
                    </div>
                    <span className="tg-bookwriter">By: <a href="#!">{authorid.authorname}</a></span>
                    <span className="tg-stars"><span /></span>
                    <span className="tg-bookprice">
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                    </span>
                    <a className="tg-btn tg-btnstyletwo" href="#!">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                    </a>
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
						<li>
							<a href="#!">Adventure</a>
						</li>
						<li>
							<a href="#!">Fun</a>
						</li>
					</ul>
					<div className="tg-booktitle">
						<h3>
							<a href="#!">{bookname}</a>
						</h3>
					</div>
					<span className="tg-bookwriter">
						By: <a href="#!">{author}</a>
					</span>
					<span className="tg-stars">
						<span />
					</span>
				</div>
			</div>
		</div>
	);
};
export { Book, FeatureBook_Author, ReleaseBook };
