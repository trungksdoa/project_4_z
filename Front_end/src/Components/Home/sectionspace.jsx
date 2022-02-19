import React from 'react';
import { useLayoutEffect, useState, useContext } from 'react';
import { Book } from '../Book/Books.jsx';
import BookAPI from '../../api/BookAPI.js';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import { CartProvider, useCart } from 'react-use-cart';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const Sectionspace = ({ handleAddWishlist, action }) => {
	const [ BookList, setBookList ] = useState([]);
	useLayoutEffect(() => {
		async function BFetch() {
			await BookAPI.FindAll()
				.then((book) => {
					setBookList(book.data);
				})
				.catch((error) => {
					alert(error.msg);
				});
		}
		BFetch();
		return () => setBookList([]);
	}, []);
	function onAdd(params) {}
	function Getbook({ bookList, onAdd, addWishlist }) {
		const [ cookies, setCookie, removeCookie ] = useCookies([ 'loggin' ]);
		const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
	}
	// const handleWishList = (bookId) => {
	// 	if (addWishlist) {
	// 		addWishlist(bookId)
	// 	}
	// }
	console.log(BookList);
	return (
		<section className="tg-sectionspace tg-haslayout">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div className="tg-sectionhead">
							<h2>
								<span>People’s Choice</span>Bestselling Books
							</h2>
							<a className="tg-btn" href="#!">
								View All
							</a>
						</div>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div id="tg-bestsellingbooksslider" className="tg-bestsellingbooksslider tg-bestsellingbooks">
							{/* <OwlCarousel className="owl-theme" loop margin={10}>
								<div class="item ">
									{BookList.map((book, index) => {
										return (
											<div class="item">
											<div className="tg-postbookcontent">
												<ul className="tg-bookscategories">
													<li>
														<a href="javascript:void(0);">
															Language:{book.pdetailid.language}
														</a>
													</li>
												</ul>
												<div className="tg-themetagbox">
													<span className="tg-themetag">sale</span>
												</div>
												<div className="tg-booktitle">
													<h3>
														<a href="javascript:void(0);" key={book.booksid}>
															{book.bookname}
														</a>
													</h3>
												</div>
												<span className="tg-bookwriter">
													By:{' '}
													<a href="javascript:void(0);" key={book.booksid}>
														{book.authorid.authorname}
													</a>
												</span>
												<span className="tg-stars">
													<span />
												</span>
												<span className="tg-bookprice">
													<ins key={book.booksid}>${book.bookprice}</ins>
												</span>
												<a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
													<i className="fa fa-shopping-basket" />
													<em onClick={() => onAdd(book)}>Add To Basket</em>
												</a>
											</div>
											</div>
										);
									})}
								</div>
							</OwlCarousel> */}
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
