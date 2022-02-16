import React from 'react';
import BookAPI from '../../api/BookAPI.js';
import CategoryAPI from '../../api/CategoryAPI.js';
import { useEffect, useState } from 'react';
import Getbook from './Getbook.jsx';
import Getcategory from './Getcategory.jsx';
const Collection = () => {
	//const [book, setBooks] = useState({ booksid:"", bookname: "", bookprice: "", bookdescription: "", bookreleasedate: "",bookmodifieddate:"",bookcreateddate:"",amounts:0,authorid:0,wishlists:"",groupdetail:"",status:0,pdetailid:0 });
	const[bookList,setbookList] = useState([]);
	const[categoryList,setcategoryList] = useState([]);
	useEffect(()=>{
		async function fetchbookList(){
			await BookAPI.FindAll().then(result => {
				setbookList(result.data)
			  }).catch(err => {
				alert(err.msg)
			  })
			// const requesUrl ='http://localhost:9999/admin/api/book/findAll';
			// const reponse = await fetch(requesUrl);
			// const reponseJSON = await reponse.json();
			// console.log(reponseJSON);
			// setbookList(reponseJSON);
		}
		fetchbookList();
	},[])
	useEffect(()=>{
		async function fetchcategoryList(){
			await CategoryAPI.FindALl().then(result => {
				setcategoryList(result.data)
			  }).catch(err => {
				alert(err.msg)
			  })
		}
		fetchcategoryList();
	},[])
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
										<a href="javascript:void(0);">home</a>
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
											<div className="tg-featurebook alert" role="alert">
												<button
													type="button"
													className="close"
													data-dismiss="alert"
													aria-label="Close"
												>
													<span aria-hidden="true">×</span>
												</button>
												<div className="tg-featureditm">
													<div className="row">
														<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
															<figure>
																<img src="images/img-04.png" alt="image description" />
															</figure>
														</div>
														<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
															<div className="tg-featureditmcontent">
																<div className="tg-themetagbox">
																	<span className="tg-themetag">featured</span>
																</div>
																<div className="tg-booktitle">
																	<h3>
																		<a href="javascript:void(0);">
																			Things To Know About Green Flat Design
																		</a>
																	</h3>
																</div>
																<span className="tg-bookwriter">
																	By:{' '}
																	<a href="javascript:void(0);">Farrah Whisenhunt</a>
																</span>
																<span className="tg-stars">
																	<span />
																</span>
																<div className="tg-priceandbtn">
																	<span className="tg-bookprice">
																		<ins>$23.18</ins>
																		<del>$30.20</del>
																	</span>
																	<a
																		className="tg-btn tg-btnstyletwo tg-active"
																		href="javascript:void(0);"
																	>
																		<i className="fa fa-shopping-basket" />
																		<em>Add To Basket</em>
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
												<Getbook bookList={bookList}></Getbook>
											
										</div>
									</div>
								</div>
								<div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
									<aside id="tg-sidebar" className="tg-sidebar">
										<div className="tg-widget tg-widgetsearch">
											<form className="tg-formtheme tg-formsearch">
												<div className="form-group">
													<button type="submit">
														<i className="icon-magnifier" />
													</button>
													<input
														type="search"
														name="search"
														className="form-group"
														placeholder="Search by title, book, key..."
													/>
												</div>
											</form>
										</div>
										<div className="tg-widget tg-catagories">
											<div className="tg-widgettitle">
												<h3>Categories</h3>
											</div>
											<div className="tg-widgetcontent">
												<Getcategory categoryList={categoryList}></Getcategory>
											</div>
										</div>
										<div className="tg-widget tg-widgettrending">
											<div className="tg-widgettitle">
												<h3>Trending Products</h3>
											</div>
											<div className="tg-widgetcontent">
												<ul>
													<li>
														<article className="tg-post">
															<figure>
																<a href="javascript:void(0);">
																	<img
																		src="images/products/img-04.jpg"
																		alt="image description"
																	/>
																</a>
															</figure>
															<div className="tg-postcontent">
																<div className="tg-posttitle">
																	<h3>
																		<a href="javascript:void(0);">
																			Where The Wild Things Are
																		</a>
																	</h3>
																</div>
																<span className="tg-bookwriter">
																	By:{' '}
																	<a href="javascript:void(0);">Kathrine Culbertson</a>
																</span>
															</div>
														</article>
													</li>
													<li>
														<article className="tg-post">
															<figure>
																<a href="javascript:void(0);">
																	<img
																		src="images/products/img-05.jpg"
																		alt="image description"
																	/>
																</a>
															</figure>
															<div className="tg-postcontent">
																<div className="tg-posttitle">
																	<h3>
																		<a href="javascript:void(0);">
																			Where The Wild Things Are
																		</a>
																	</h3>
																</div>
																<span className="tg-bookwriter">
																	By:{' '}
																	<a href="javascript:void(0);">Kathrine Culbertson</a>
																</span>
															</div>
														</article>
													</li>
													<li>
														<article className="tg-post">
															<figure>
																<a href="javascript:void(0);">
																	<img
																		src="images/products/img-06.jpg"
																		alt="image description"
																	/>
																</a>
															</figure>
															<div className="tg-postcontent">
																<div className="tg-posttitle">
																	<h3>
																		<a href="javascript:void(0);">
																			Where The Wild Things Are
																		</a>
																	</h3>
																</div>
																<span className="tg-bookwriter">
																	By:{' '}
																	<a href="javascript:void(0);">Kathrine Culbertson</a>
																</span>
															</div>
														</article>
													</li>
													<li>
														<article className="tg-post">
															<figure>
																<a href="javascript:void(0);">
																	<img
																		src="images/products/img-07.jpg"
																		alt="image description"
																	/>
																</a>
															</figure>
															<div className="tg-postcontent">
																<div className="tg-posttitle">
																	<h3>
																		<a href="javascript:void(0);">
																			Where The Wild Things Are
																		</a>
																	</h3>
																</div>
																<span className="tg-bookwriter">
																	By:{' '}
																	<a href="javascript:void(0);">Kathrine Culbertson</a>
																</span>
															</div>
														</article>
													</li>
												</ul>
											</div>
										</div>
										<div className="tg-widget tg-widgetinstagram">
											<div className="tg-widgettitle">
												<h3>Instagram</h3>
											</div>
											<div className="tg-widgetcontent">
												<ul>
													<li>
														<figure>
															<img
																src="images/instagram/img-02.jpg"
																alt="image description"
															/>
															<figcaption>
																<a href="javascript:void(0);">
																	<i className="icon-heart" />
																	<em>50,134</em>
																</a>
															</figcaption>
														</figure>
													</li>
													<li>
														<figure>
															<img
																src="images/instagram/img-03.jpg"
																alt="image description"
															/>
															<figcaption>
																<a href="javascript:void(0);">
																	<i className="icon-heart" />
																	<em>50,134</em>
																</a>
															</figcaption>
														</figure>
													</li>
													<li>
														<figure>
															<img
																src="images/instagram/img-04.jpg"
																alt="image description"
															/>
															<figcaption>
																<a href="javascript:void(0);">
																	<i className="icon-heart" />
																	<em>50,134</em>
																</a>
															</figcaption>
														</figure>
													</li>
													<li>
														<figure>
															<img
																src="images/instagram/img-05.jpg"
																alt="image description"
															/>
															<figcaption>
																<a href="javascript:void(0);">
																	<i className="icon-heart" />
																	<em>50,134</em>
																</a>
															</figcaption>
														</figure>
													</li>
													<li>
														<figure>
															<img
																src="images/instagram/img-06.jpg"
																alt="image description"
															/>
															<figcaption>
																<a href="javascript:void(0);">
																	<i className="icon-heart" />
																	<em>50,134</em>
																</a>
															</figcaption>
														</figure>
													</li>
													<li>
														<figure>
															<img
																src="images/instagram/img-07.jpg"
																alt="image description"
															/>
															<figcaption>
																<a href="javascript:void(0);">
																	<i className="icon-heart" />
																	<em>50,134</em>
																</a>
															</figcaption>
														</figure>
													</li>
													<li>
														<figure>
															<img
																src="images/instagram/img-08.jpg"
																alt="image description"
															/>
															<figcaption>
																<a href="javascript:void(0);">
																	<i className="icon-heart" />
																	<em>50,134</em>
																</a>
															</figcaption>
														</figure>
													</li>
													<li>
														<figure>
															<img
																src="images/instagram/img-09.jpg"
																alt="image description"
															/>
															<figcaption>
																<a href="javascript:void(0);">
																	<i className="icon-heart" />
																	<em>50,134</em>
																</a>
															</figcaption>
														</figure>
													</li>
												</ul>
											</div>
										</div>
										
									</aside>
								</div>
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
