import React from 'react';
import BookAPI from '../../api/BookAPI.js';
import { useEffect, useState } from 'react';
import Getbook from './Getbook.jsx';
import AddToWishlist from '../FolderAction/AddToWishlist';
import { useCookies } from 'react-cookie';
import { CartProvider, useCart } from "react-use-cart";
import { toast } from 'react-toastify';
import Book_catagory from '../Book/Book_catagory.jsx';
import { useParams } from 'react-router-dom';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Pagination from '../Pagination/pagination'
// import './App.css'

const Collection = () => {
	const [bookList, setbookList] = useState([]);
	const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
	const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
	const { addItem } = useCart();
	const { cataId } = useParams();
	async function fetchbookList() {
		await BookAPI.FindAll().then(result => {
			setbookList(result.data)
		}).catch(err => {
			alert(err.msg)
		})
	}
	async function fetchBookByCate() {
		await BookAPI.findByCatagory(cataId).then(result => {
			setbookList(result.data)
		}).catch(err => {
			alert(err.msg)
		})
	}
	useEffect(() => {
		if (cataId === undefined) {
			fetchbookList();
		}
	}, [cataId])
	useEffect(() => {
		if (cataId !== undefined) {
			fetchBookByCate()
		}
	}, [cataId])
	async function handleAddWishlist(booksId) {
		await AddToWishlist.AddToWishlist(cookies, booksId).then(result => {
			fetchbookList();
			setCookie('action', JSON.stringify({ doChange: new Date().getTime() }), { path: '/' });
			toast.success(result.msg, {
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
	function handleCart(props) {
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
	const [sortType, setSortType] = useState("");
	useEffect(() => {
		if (sortType.toLowerCase().includes("Price from low to high".toLowerCase())) {
			setbookList(bookList.sort((a, b) => (a.bookprice > b.bookprice ? -1 : 1)))
		} else if (sortType.toLowerCase().includes("Price from high to low".toLowerCase())) {
			setbookList(bookList.sort((a, b) => (a.bookprice > b.bookprice ? 1 : -1)))
		}
	}, [sortType, bookList])




	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 8;

	const itemOfLast = currentPage * itemsPerPage;
	const itemOfFirst = itemOfLast - itemsPerPage;
	const currentItem = bookList.slice(itemOfFirst, itemOfLast)


	const paginate = page => {
		setCurrentPage(page)
	}
	return (
		<div>
			<div
				className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner"
				data-z-index={-100}
				data-appear-top-offset={600}
				data-parallax="scroll"
				data-image-src="images/parallax/bgparallax-07.jpg"
			>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div className="tg-innerbannercontent">
								<h1>All Products</h1>
								<ol className="tg-breadcrumb">
									<li>
										<a >home</a>
									</li>
									<li className="tg-active">Products</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*************************************
                  Inner Banner End
          **************************************/}
			{/*************************************
                  Main Start
          **************************************/}
			<main id="tg-main" className="tg-main tg-haslayout">
				{/*************************************
                      News Grid Start
              **************************************/}

				<div className="tg-sectionspace tg-haslayout">
					<div className="container">
						<div className="row">
							<div id="tg-twocolumns" className="tg-twocolumns">
								<div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 pull-right">
									<div id="tg-content" className="tg-content">
										<div className="tg-products">
											<div className="tg-productgrid">
												<div className="tg-refinesearch">
													<span>showing {itemOfFirst + 1} to {itemOfLast - 1} of {bookList.length} total</span>
													<form className="tg-formtheme tg-formsortshoitems">
														<fieldset>
															<div className="form-group">
																<FormControl fullWidth>
																	<InputLabel id="type-select-label" style={{ fontSize: 15 }}>Sort by</InputLabel>
																	<Select
																		labelId="type-select-label"
																		id="type-simple-select"
																		value={sortType}
																		style={{ fontSize: 15, width: 300 }}
																		onChange={(e) => setSortType(e.target.value)}
																	>
																		<MenuItem value={"Price from low to high"}>Price from low to high</MenuItem>
																		<MenuItem value={"Price from high to low"}>Price from high to low</MenuItem>
																	</Select>
																</FormControl>
															</div>
														</fieldset>
													</form>
												</div>
												{bookList.length === 0 && (
													<h3>No book have been found</h3>
												)}
												{bookList.length !== 0 && (
													<>
														<Getbook addWishlist={handleAddWishlist} onAdd={handleCart} bookList={currentItem}></Getbook>
													</>
												)}
											</div>
											<div className="col-lg-12">
												<Pagination PerPage={itemsPerPage} total={bookList.length} paginate={paginate} currenPages={currentPage} />
											</div>
										</div>
									</div>
								</div>
								<Book_catagory />
							</div>
						</div>
					</div>
				</div>
				{/*************************************
                      News Grid End
              **************************************/}
			</main>
		</div>
	);
};
export default Collection;
