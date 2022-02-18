import React from 'react';
import { useLayoutEffect, useState, useContext } from 'react';
import { Book } from '../Book/Books.jsx';
import BookAPI from '../../api/BookAPI.js';
import PropTypes from 'prop-types';
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
							{/* {BookList.map((book, index) => {
								if (index == 0) {
									return (
										<div className="item active">
											<h2>2</h2>
										</div>
										// <Book addWishlist={handleAddWishlist} changeAction={action} key={index} {...book} />
									);
								} else {
                                    return (
										<div className="item">
											<h2>2</h2>
										</div>
										// <Book addWishlist={handleAddWishlist} changeAction={action} key={index} {...book} />
									);
								}
							})} */}
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
