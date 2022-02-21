import React from 'react';
import { useLayoutEffect, useState, useContext } from 'react';
import AddToWishlist from '../FolderAction/AddToWishlist';
import Rating from '@mui/material/Rating';
import { Book } from '../Book/Books.jsx';
import BookAPI from '../../api/BookAPI.js';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import { CartProvider, useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import Slider from 'react-slick'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
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
const Sectionspace = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		// autoplay: true,
		speed: 2000,
		// autoplaySpeed: 2000,
		className: "slider variable-width",
		variableWidth: true,
		cssEase: "linear"
	};
	const [BookList, setBookList] = useState([]);
	async function BFetch() {
		await BookAPI.FindAll()
			.then((book) => {
				setBookList(book.data);
			})
			.catch((error) => {
				alert(error.msg);
			});
	}
	useLayoutEffect(() => {
		BFetch();
	}, []);
	const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
	const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;


	async function handleSameBookAddWishlist(booksId) {
		await AddToWishlist.AddToWishlist(cookies, booksId).then(result => {
			BFetch();
			setCookie('action', JSON.stringify({ doChange: new Date().getTime() }), { path: '/' });
			toast.success("Adding item to wishlist", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}).catch(err => {
			alert(err.msg)
		})
	}
	const { addItem } = useCart();
	function onClick(props) {
		const { booksid, bookprice, pdetailid, bookname } = props;
		const newObject = { id: "", price: 0, img: "", name: "" };
		newObject.id = booksid;
		newObject.price = bookprice;
		newObject.img = pdetailid.imageLink;
		newObject.name = bookname;
		addItem(newObject);
		toast.success("Add item #" + newObject.name + " to basket", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}
	return (
		<section className="tg-sectionspace tg-haslayout" style={{
			padding: "100px 0 0 0"
		}}>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="tg-relatedproducts">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div className="tg-sectionhead">
									<h2><span>Peopel's choice</span>Bestselling Books</h2>
									<a className="tg-btn" href="/Collection">View All</a>
								</div>
							</div>
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<div className=" tg-relatedbooks" style={{
									paddingBottom: "10%"
								}}>
									<Slider {...settings}>
										{
											BookList.map((item, index) => {
												// 
												let wishlistArray;
												if (auth) {
													wishlistArray = item.wishlists.filter(wishlist => wishlist.user_id.userid.includes(cookies.loggin.userID))
												}
												return (
													<div className="item" key={index} style={{ width: 250 }}>
														<div className="tg-postbook">
															<figure className="tg-featureimg" style={{
																margin: 0,
																width: "85%"
															}}>
																<div className="tg-bookimg">
																	<div className="tg-frontcover"><img src={"http://localhost:9999/image/" + item.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" /></div>
																	<div className="tg-backcover"><img src={"http://localhost:9999/image/" + item.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" /></div>
																</div>
																{auth && (
																	wishlistArray.length !== 0 && (
																		<a key={index} className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
																			<span>Already in wishlist</span>
																		</a>
																	)
																)}
																{auth && wishlistArray.length === 0 && (
																	<a key={index} className="tg-btnaddtowishlist" onClick={() => handleSameBookAddWishlist(item.booksid)} style={{ cursor: 'pointer' }}>
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
																<br></br>
																<a className="tg-btn tg-btnstyletwo" onClick={() => onClick(item)} style={{ cursor: 'pointer' }}>
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
					</div>
				</div>
			</div>
		</section>
	);
};
Sectionspace.propTypes = {
	data: PropTypes.array.isRequired,
	handleAddWishlist: PropTypes.func
};
Sectionspace.defaultProps = {
	data: [],
	handleAddWishlist: null
};
export default Sectionspace;
