import React from 'react';
import PropType from 'prop-types';
import { Link } from "react-router-dom";

import { useState } from 'react';
import Rating from '@mui/material/Rating';
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
			{bookList.map((post, index) => {
				let wishlistArray;
				if (auth) {
					wishlistArray = post.wishlists.filter(wishlist => wishlist.user_id.userid.includes(cookies.loggin.userID))
				}
				return (
					<div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
						<div className="tg-postbook">
							<figure className="tg-featureimg" style={{
								margin: 0,
								width: "100%"
							}}>
								<div className="tg-bookimg">
									<div className="tg-frontcover" style={{width:160 ,height:200}}><img src={"http://localhost:9999/image/" + post.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" /></div>
									<div className="tg-backcover" style={{width:160 ,height:200}}><img src={"http://localhost:9999/image/" + post.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" /></div>
								</div>
								{auth && (
									wishlistArray.length !== 0 && (
										<a key={index} className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
											<span>Already in wishlist</span>
										</a>
									)
								)}
								{auth && wishlistArray.length === 0 && (
									<a key={index} className="tg-btnaddtowishlist" onClick={() => handleWishList(post.booksid)} style={{ cursor: 'pointer' }}>
										<i className="icon-heart" />
										<span>add to wishlist</span>
									</a>
								)}
							</figure>
							<div className="tg-postbookcontent">
								<ul className="tg-bookscategories">
									{post.groupdetail.length !== 0 && post.groupdetail.map((category, index) => {
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
									{post.groupdetail.length === 0 && (
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
									><a href={"/Book/" + post.booksid}>{post.bookname}</a></h3>
								</div>
								<span className="tg-bookwriter">By: <a href={"/author/" + post.authorid.authorid}>{post.authorid.authorname}</a></span>
								<span className="tg-bookwriter">Release: {post.bookreleasedate}</span>
								<span>
									<Rating name="read-only" size="large" precision={0.5} value={caculator(post.reviews)} readOnly />
								</span>
								<span className="tg-bookprice">
									<p>${post.bookprice}</p>

								</span>
								{post.status === 3 ? (
									<a className="tg-btn tg-btnstyletwo">
										<i className="fa fa-shopping-basket" />
										<em >Out stock</em>
									</a>
								) : (
									<a className="tg-btn tg-btnstyletwo" onClick={() => handleAddToCart(post)} style={{ cursor: 'pointer' }}>
										<i className="fa fa-shopping-basket" />
										<em >Add To Basket</em>
									</a>
								)}

							</div>
						</div>
					</div>
				)
			})}
		</>
	);
}

export default Getbook;
