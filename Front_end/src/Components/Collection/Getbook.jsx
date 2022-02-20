import React from 'react';
import PropType from 'prop-types';
import { Link } from "react-router-dom";

import { useState } from 'react';

import { useCookies } from 'react-cookie';

Getbook.PropType = {
	bookList: PropType.array,
	wishlists: PropType.array,
	addWishlist: PropType.func,
	onAdd: PropType.func
};
Getbook.defaultProps = {
	bookList: [],
	wishlists: [],
	addWishlist: null,
	onAdd: null
};


function Getbook({ bookList, onAdd, addWishlist }) {
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
	return (
		<>
			<div className="tg-productgrid">
				{bookList.map((post, index) => {
					return (
						<>
							<div key={index} className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
								<div className="tg-postbook">
									<figure className="tg-featureimg">
										<div className="tg-bookimg">
											<div className="tg-frontcover">
												<img key={post.booksid} src={"http://localhost:9999/image/" + post.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" />
											</div>
											<div className="tg-backcover">
												<img key={post.booksid} src={"http://localhost:9999/image/" + post.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" />
											</div>
										</div>
										{auth && (
											post.wishlists.length !== 0 &&
											(
												<a className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
													<span key={index}>Already in wishlist</span>
												</a>
											)
										)}
										{auth && (
											post.wishlists.length === 0 &&
											(
												<a className="tg-btnaddtowishlist" onClick={() => handleWishList(post.booksid)} style={{ cursor: 'pointer' }}>
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
											<li>
												<a>Language:{post.pdetailid.language}</a>
											</li>
										</ul>
										{/* <div className="tg-themetagbox">
											<span className="tg-themetag">sale</span>
										</div> */}
										<div className="tg-booktitle">
											<Link to={"/Book/" + post.booksid}>{post.bookname}</Link>
										</div>
										<span className="tg-bookwriter">
											By: <a href={"/author/" + post.authorid.authorid} style={{ cursor: 'pointer' }} key={post.booksid}>{post.authorid.authorname}</a>
										</span>
										<span className="tg-stars">
											<span />
										</span>
										<span className="tg-bookprice">
											<ins key={post.booksid} >${post.bookprice}</ins>

										</span>
										<a className="tg-btn tg-btnstyletwo" style={{ cursor: 'pointer' }}>
											<i className="fa fa-shopping-basket" />
											<em onClick={() => handleAddToCart(post)}>Add To Basket</em>
										</a>
									</div>
								</div>
							</div>
						</>
					)
				})}
			</div>
		</>
	);
}

export default Getbook;
