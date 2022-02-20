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

const Collection = () => {
	const [bookList, setbookList] = useState([]);
	const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
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
	console.log(cataId)
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
											<div className="tg-sectionhead">
												<h2>
													<span>People’s Choice</span>Bestselling Books
												</h2>
											</div>
											{bookList.length === 0 && (
												<h3>No data have been found</h3>
											)}
											{bookList.length !== 0 && (
												<Getbook addWishlist={handleAddWishlist} onAdd={handleCart} bookList={bookList}></Getbook>
											)}
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
