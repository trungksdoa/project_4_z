import React from 'react';

const Book_detail = () => {
    return (<div>
        <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index={-100} data-appear-top-offset={600} data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="tg-innerbannercontent">
                            <h1>All Products</h1>
                            <ol className="tg-breadcrumb">
                                <li><a href="javascript:void(0);">home</a></li>
                                <li><a href="javascript:void(0);">Products</a></li>
                                <li className="tg-active">Product Title Here</li>
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
                                    <div className="tg-featurebook alert" role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="tg-featureditm">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
                                                    <figure><img src="images/img-04.png" alt="image description" /></figure>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                                    <div className="tg-featureditmcontent">
                                                        <div className="tg-themetagbox"><span className="tg-themetag">featured</span></div>
                                                        <div className="tg-booktitle">
                                                            <h3><a href="javascript:void(0);">Things To Know About Green Flat Design</a></h3>
                                                        </div>
                                                        <span className="tg-bookwriter">By: <a href="javascript:void(0);">Farrah Whisenhunt</a></span>
                                                        <span className="tg-stars"><span /></span>
                                                        <div className="tg-priceandbtn">
                                                            <span className="tg-bookprice">
                                                                <ins>$23.18</ins>
                                                                <del>$30.20</del>
                                                            </span>
                                                            <a className="tg-btn tg-btnstyletwo tg-active" href="javascript:void(0);">
                                                                <i className="fa fa-shopping-basket" />
                                                                <em>Add To Basket</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tg-productdetail">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div className="tg-postbook">
                                                    <figure className="tg-featureimg"><img src="images/books/img-07.jpg" alt="image description" /></figure>
                                                    <div className="tg-postbookcontent">
                                                        <span className="tg-bookprice">
                                                            <ins>$25.18</ins>
                                                            <del>$27.20</del>
                                                        </span>
                                                        <span className="tg-bookwriter">You save $4.02</span>
                                                        <ul className="tg-delevrystock">
                                                            <li><i className="icon-rocket" /><span>Free delivery worldwide</span></li>
                                                            <li><i className="icon-checkmark-circle" /><span>Dispatch from the USA in 2 working days </span></li>
                                                            <li><i className="icon-store" /><span>Status: <em>In Stock</em></span></li>
                                                        </ul>
                                                        <div className="tg-quantityholder">
                                                            <em className="minus">-</em>
                                                            <input type="text" className="result" defaultValue={0} id="quantity1" name="quantity" />
                                                            <em className="plus">+</em>
                                                        </div>
                                                        <a className="tg-btn tg-active tg-btn-lg" href="javascript:void(0);">Add To Basket</a>
                                                        <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                                                            <span>add to wishlist</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                                <div className="tg-productcontent">
                                                    <ul className="tg-bookscategories">
                                                        <li><a href="javascript:void(0);">Art &amp; Photography</a></li>
                                                    </ul>
                                                    <div className="tg-themetagbox"><span className="tg-themetag">sale</span></div>
                                                    <div className="tg-booktitle">
                                                        <h3>Drive Safely, No Bumping</h3>
                                                    </div>
                                                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">Angela Gunning</a></span>
                                                    <span className="tg-stars"><span /></span>
                                                    <span className="tg-addreviews"><a href="javascript:void(0);">Add Your Review</a></span>
                                                    <div className="tg-share">
                                                        <span>Share:</span>
                                                        <ul className="tg-socialicons">
                                                            <li className="tg-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                                                            <li className="tg-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                                                            <li className="tg-linkedin"><a href="javascript:void(0);"><i className="fa fa-linkedin" /></a></li>
                                                            <li className="tg-googleplus"><a href="javascript:void(0);"><i className="fa fa-google-plus" /></a></li>
                                                            <li className="tg-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="tg-description">
                                                        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdoloreat magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisi nisi ut aliquip ex ea commodo consequat aute.</p>
                                                        <p>Arure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla aetur excepteur sint occaecat cupidatat non proident, sunt in culpa quistan officia serunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus... <a href="javascript:void(0);">More</a></p>
                                                    </div>
                                                    <div className="tg-sectionhead">
                                                        <h2>Product Details</h2>
                                                    </div>
                                                    <ul className="tg-productinfo">
                                                        <li><span>Format:</span><span>Hardback</span></li>
                                                        <li><span>Pages:</span><span>528 pages</span></li>
                                                        <li><span>Dimensions:</span><span>153 x 234 x 43mm | 758g</span></li>
                                                        <li><span>Publication Date:</span><span>June 27, 2017</span></li>
                                                        <li><span>Publisher:</span><span>Sunshine Orlando</span></li>
                                                        <li><span>Language:</span><span>English</span></li>
                                                        <li><span>Illustrations note:</span><span>b&amp;w images thru-out; 1 x 16pp colour plates</span></li>
                                                        <li><span>ISBN10:</span><span>1234567890</span></li>
                                                        <li><span>ISBN13:</span><span>1234567890000</span></li>
                                                        <li><span>Other Fomate:</span><span>CD-Audio, Paperback, E-Book</span></li>
                                                    </ul>
                                                    <div className="tg-alsoavailable">
                                                        <figure>
                                                            <img src="images/img-02.jpg" alt="image description" />
                                                            <figcaption>
                                                                <h3>Also Available in:</h3>
                                                                <ul>
                                                                    <li><span>CD-Audio $18.30</span></li>
                                                                    <li><span>Paperback $20.10</span></li>
                                                                    <li><span>E-Book $11.30</span></li>
                                                                </ul>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tg-productdescription">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div className="tg-sectionhead">
                                                        <h2>Product Description</h2>
                                                    </div>
                                                    <ul className="tg-themetabs" role="tablist">
                                                        <li role="presentation" className="active"><a href="#description" data-toggle="tab">Description</a></li>
                                                        <li role="presentation"><a href="#review" data-toggle="tab">Reviews</a></li>
                                                    </ul>
                                                    <div className="tg-tab-content tab-content">
                                                        <div role="tabpanel" className="tg-tab-pane tab-pane active" id="description">
                                                            <div className="tg-description">
                                                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenden
                                                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                                <figure className="tg-alignleft">
                                                                    <img src="images/placeholdervtwo.jpg" alt="image description" />
                                                                    <iframe src="https://www.youtube.com/embed/aLwpuDpZm1k?rel=0&controls=0&showinfo=0" />
                                                                </figure>
                                                                <ul className="tg-liststyle">
                                                                    <li><span>Sed do eiusmod tempor incididunt ut labore et dolore</span></li>
                                                                    <li><span>Magna aliqua enim ad minim veniam</span></li>
                                                                    <li><span>Quis nostrud exercitation ullamco laboris nisi ut</span></li>
                                                                    <li><span>Aliquip ex ea commodo consequat aute dolor reprehenderit</span></li>
                                                                    <li><span>Voluptate velit esse cillum dolore eu fugiat nulla pariatur</span></li>
                                                                    <li><span>Magna aliqua enim ad minim veniam</span></li>
                                                                    <li><span>Quis nostrud exercitation ullamco laboris nisi ut</span></li>
                                                                </ul>
                                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remmata aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enimsam
                                                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quistatoa.</p>
                                                            </div>
                                                        </div>
                                                        <div role="tabpanel" className="tg-tab-pane tab-pane" id="review">
                                                            <div className="tg-description">
                                                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenden
                                                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                                <figure className="tg-alignleft">
                                                                    <img src="images/placeholdervtwo.jpg" alt="image description" />
                                                                    <iframe src="https://www.youtube.com/embed/aLwpuDpZm1k?rel=0&controls=0&showinfo=0" />
                                                                </figure>
                                                                <ul className="tg-liststyle">
                                                                    <li><span>Sed do eiusmod tempor incididunt ut labore et dolore</span></li>
                                                                    <li><span>Magna aliqua enim ad minim veniam</span></li>
                                                                    <li><span>Quis nostrud exercitation ullamco laboris nisi ut</span></li>
                                                                    <li><span>Aliquip ex ea commodo consequat aute dolor reprehenderit</span></li>
                                                                    <li><span>Voluptate velit esse cillum dolore eu fugiat nulla pariatur</span></li>
                                                                    <li><span>Magna aliqua enim ad minim veniam</span></li>
                                                                    <li><span>Quis nostrud exercitation ullamco laboris nisi ut</span></li>
                                                                </ul>
                                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remmata aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enimsam
                                                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quistatoa.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tg-aboutauthor">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div className="tg-sectionhead">
                                                        <h2>About Author</h2>
                                                    </div>
                                                    <div className="tg-authorbox">
                                                        <figure className="tg-authorimg">
                                                            <img src="images/author/imag-24.jpg" alt="image description" />
                                                        </figure>
                                                        <div className="tg-authorinfo">
                                                            <div className="tg-authorhead">
                                                                <div className="tg-leftarea">
                                                                    <div className="tg-authorname">
                                                                        <h2>Kathrine Culbertson</h2>
                                                                        <span>Author Since: June 27, 2017</span>
                                                                    </div>
                                                                </div>
                                                                <div className="tg-rightarea">
                                                                    <ul className="tg-socialicons">
                                                                        <li className="tg-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                                                                        <li className="tg-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                                                                        <li className="tg-linkedin"><a href="javascript:void(0);"><i className="fa fa-linkedin" /></a></li>
                                                                        <li className="tg-googleplus"><a href="javascript:void(0);"><i className="fa fa-google-plus" /></a></li>
                                                                        <li className="tg-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="tg-description">
                                                                <p>Laborum sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis etation.</p>
                                                            </div>
                                                            <a className="tg-btn tg-active" href="javascript:void(0);">View All Books</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tg-relatedproducts">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div className="tg-sectionhead">
                                                        <h2><span>Related Products</span>You May Also Like</h2>
                                                        <a className="tg-btn" href="javascript:void(0);">View All</a>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                    <div id="tg-relatedproductslider" className="tg-relatedproductslider tg-relatedbooks owl-carousel">
                                                        <div className="item">
                                                            <div className="tg-postbook">
                                                                <figure className="tg-featureimg">
                                                                    <div className="tg-bookimg">
                                                                        <div className="tg-frontcover"><img src="images/books/img-01.jpg" alt="image description" /></div>
                                                                        <div className="tg-backcover"><img src="images/books/img-01.jpg" alt="image description" /></div>
                                                                    </div>
                                                                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                                                                        <i className="icon-heart" />
                                                                        <span>add to wishlist</span>
                                                                    </a>
                                                                </figure>
                                                                <div className="tg-postbookcontent">
                                                                    <ul className="tg-bookscategories">
                                                                        <li><a href="javascript:void(0);">Adventure</a></li>
                                                                        <li><a href="javascript:void(0);">Fun</a></li>
                                                                    </ul>
                                                                    <div className="tg-themetagbox"><span className="tg-themetag">sale</span></div>
                                                                    <div className="tg-booktitle">
                                                                        <h3><a href="javascript:void(0);">Help Me Find My Stomach</a></h3>
                                                                    </div>
                                                                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">Angela Gunning</a></span>
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
                                                        <div className="item">
                                                            <div className="tg-postbook">
                                                                <figure className="tg-featureimg">
                                                                    <div className="tg-bookimg">
                                                                        <div className="tg-frontcover"><img src="images/books/img-02.jpg" alt="image description" /></div>
                                                                        <div className="tg-backcover"><img src="images/books/img-02.jpg" alt="image description" /></div>
                                                                    </div>
                                                                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                                                                        <i className="icon-heart" />
                                                                        <span>add to wishlist</span>
                                                                    </a>
                                                                </figure>
                                                                <div className="tg-postbookcontent">
                                                                    <ul className="tg-bookscategories">
                                                                        <li><a href="javascript:void(0);">Adventure</a></li>
                                                                        <li><a href="javascript:void(0);">Fun</a></li>
                                                                    </ul>
                                                                    <div className="tg-themetagbox"><span className="tg-themetag">sale</span></div>
                                                                    <div className="tg-booktitle">
                                                                        <h3><a href="javascript:void(0);">Drive Safely, No Bumping</a></h3>
                                                                    </div>
                                                                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">Angela Gunning</a></span>
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
                                                        <div className="item">
                                                            <div className="tg-postbook">
                                                                <figure className="tg-featureimg">
                                                                    <div className="tg-bookimg">
                                                                        <div className="tg-frontcover"><img src="images/books/img-03.jpg" alt="image description" /></div>
                                                                        <div className="tg-backcover"><img src="images/books/img-03.jpg" alt="image description" /></div>
                                                                    </div>
                                                                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                                                                        <i className="icon-heart" />
                                                                        <span>add to wishlist</span>
                                                                    </a>
                                                                </figure>
                                                                <div className="tg-postbookcontent">
                                                                    <ul className="tg-bookscategories">
                                                                        <li><a href="javascript:void(0);">Adventure</a></li>
                                                                        <li><a href="javascript:void(0);">Fun</a></li>
                                                                    </ul>
                                                                    <div className="tg-themetagbox" />
                                                                    <div className="tg-booktitle">
                                                                        <h3><a href="javascript:void(0);">Let The Good Times Roll Up</a></h3>
                                                                    </div>
                                                                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">Angela Gunning</a></span>
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
                                                        <div className="item">
                                                            <div className="tg-postbook">
                                                                <figure className="tg-featureimg">
                                                                    <div className="tg-bookimg">
                                                                        <div className="tg-frontcover"><img src="images/books/img-04.jpg" alt="image description" /></div>
                                                                        <div className="tg-backcover"><img src="images/books/img-04.jpg" alt="image description" /></div>
                                                                    </div>
                                                                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                                                                        <i className="icon-heart" />
                                                                        <span>add to wishlist</span>
                                                                    </a>
                                                                </figure>
                                                                <div className="tg-postbookcontent">
                                                                    <ul className="tg-bookscategories">
                                                                        <li><a href="javascript:void(0);">Adventure</a></li>
                                                                        <li><a href="javascript:void(0);">Fun</a></li>
                                                                    </ul>
                                                                    <div className="tg-themetagbox"><span className="tg-themetag">sale</span></div>
                                                                    <div className="tg-booktitle">
                                                                        <h3><a href="javascript:void(0);">Our State Fair Is A Great State Fair</a></h3>
                                                                    </div>
                                                                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">Angela Gunning</a></span>
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
                                                        <div className="item">
                                                            <div className="tg-postbook">
                                                                <figure className="tg-featureimg">
                                                                    <div className="tg-bookimg">
                                                                        <div className="tg-frontcover"><img src="images/books/img-05.jpg" alt="image description" /></div>
                                                                        <div className="tg-backcover"><img src="images/books/img-05.jpg" alt="image description" /></div>
                                                                    </div>
                                                                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                                                                        <i className="icon-heart" />
                                                                        <span>add to wishlist</span>
                                                                    </a>
                                                                </figure>
                                                                <div className="tg-postbookcontent">
                                                                    <ul className="tg-bookscategories">
                                                                        <li><a href="javascript:void(0);">Adventure</a></li>
                                                                        <li><a href="javascript:void(0);">Fun</a></li>
                                                                    </ul>
                                                                    <div className="tg-themetagbox" />
                                                                    <div className="tg-booktitle">
                                                                        <h3><a href="javascript:void(0);">Put The Petal To The Metal</a></h3>
                                                                    </div>
                                                                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">Angela Gunning</a></span>
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
                                                        <div className="item">
                                                            <div className="tg-postbook">
                                                                <figure className="tg-featureimg">
                                                                    <div className="tg-bookimg">
                                                                        <div className="tg-frontcover"><img src="images/books/img-06.jpg" alt="image description" /></div>
                                                                        <div className="tg-backcover"><img src="images/books/img-06.jpg" alt="image description" /></div>
                                                                    </div>
                                                                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                                                                        <i className="icon-heart" />
                                                                        <span>add to wishlist</span>
                                                                    </a>
                                                                </figure>
                                                                <div className="tg-postbookcontent">
                                                                    <ul className="tg-bookscategories">
                                                                        <li><a href="javascript:void(0);">Adventure</a></li>
                                                                        <li><a href="javascript:void(0);">Fun</a></li>
                                                                    </ul>
                                                                    <div className="tg-themetagbox"><span className="tg-themetag">sale</span></div>
                                                                    <div className="tg-booktitle">
                                                                        <h3><a href="javascript:void(0);">Help Me Find My Stomach</a></h3>
                                                                    </div>
                                                                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">Angela Gunning</a></span>
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
                                                        <div className="item">
                                                            <div className="tg-postbook">
                                                                <figure className="tg-featureimg">
                                                                    <div className="tg-bookimg">
                                                                        <div className="tg-frontcover"><img src="images/books/img-03.jpg" alt="image description" /></div>
                                                                        <div className="tg-backcover"><img src="images/books/img-03.jpg" alt="image description" /></div>
                                                                    </div>
                                                                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                                                                        <i className="icon-heart" />
                                                                        <span>add to wishlist</span>
                                                                    </a>
                                                                </figure>
                                                                <div className="tg-postbookcontent">
                                                                    <ul className="tg-bookscategories">
                                                                        <li><a href="javascript:void(0);">Adventure</a></li>
                                                                        <li><a href="javascript:void(0);">Fun</a></li>
                                                                    </ul>
                                                                    <div className="tg-themetagbox" />
                                                                    <div className="tg-booktitle">
                                                                        <h3><a href="javascript:void(0);">Let The Good Times Roll Up</a></h3>
                                                                    </div>
                                                                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">Angela Gunning</a></span>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
                                <aside id="tg-sidebar" className="tg-sidebar">
                                    <div className="tg-widget tg-widgetsearch">
                                        <form className="tg-formtheme tg-formsearch">
                                            <div className="form-group">
                                                <button type="submit"><i className="icon-magnifier" /></button>
                                                <input type="search" name="search" className="form-group" placeholder="Search by title, author, key..." />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tg-widget tg-catagories">
                                        <div className="tg-widgettitle">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="tg-widgetcontent">
                                            <ul>
                                                <li><a href="javascript:void(0);"><span>Art &amp; Photography</span><em>28245</em></a></li>
                                                <li><a href="javascript:void(0);"><span>Biography</span><em>4856</em></a></li>
                                                <li><a href="javascript:void(0);"><span>Children’s Book</span><em>8654</em></a></li>
                                                <li><a href="javascript:void(0);"><span>Craft &amp; Hobbies</span><em>6247</em></a></li>
                                                <li><a href="javascript:void(0);"><span>Crime &amp; Thriller</span><em>888654</em></a></li>
                                                <li><a href="javascript:void(0);"><span>Fantasy &amp; Horror</span><em>873144</em></a></li>
                                                <li><a href="javascript:void(0);"><span>Fiction</span><em>18465</em></a></li>
                                                <li><a href="javascript:void(0);"><span>Fod &amp; Drink</span><em>3148</em></a></li>
                                                <li><a href="javascript:void(0);"><span>Graphic, Anime &amp; Manga</span><em>77531</em></a></li>
                                                <li><a href="javascript:void(0);"><span>Science Fiction</span><em>9247</em></a></li>
                                                <li><a href="javascript:void(0);"><span>View All</span></a></li>
                                            </ul>
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
                                                        <figure><a href="javascript:void(0);"><img src="images/products/img-04.jpg" alt="image description" /></a></figure>
                                                        <div className="tg-postcontent">
                                                            <div className="tg-posttitle">
                                                                <h3><a href="javascript:void(0);">Where The Wild Things Are</a></h3>
                                                            </div>
                                                            <span className="tg-bookwriter">By: <a href="javascript:void(0);">Kathrine Culbertson</a></span>
                                                        </div>
                                                    </article>
                                                </li>
                                                <li>
                                                    <article className="tg-post">
                                                        <figure><a href="javascript:void(0);"><img src="images/products/img-05.jpg" alt="image description" /></a></figure>
                                                        <div className="tg-postcontent">
                                                            <div className="tg-posttitle">
                                                                <h3><a href="javascript:void(0);">Where The Wild Things Are</a></h3>
                                                            </div>
                                                            <span className="tg-bookwriter">By: <a href="javascript:void(0);">Kathrine Culbertson</a></span>
                                                        </div>
                                                    </article>
                                                </li>
                                                <li>
                                                    <article className="tg-post">
                                                        <figure><a href="javascript:void(0);"><img src="images/products/img-06.jpg" alt="image description" /></a></figure>
                                                        <div className="tg-postcontent">
                                                            <div className="tg-posttitle">
                                                                <h3><a href="javascript:void(0);">Where The Wild Things Are</a></h3>
                                                            </div>
                                                            <span className="tg-bookwriter">By: <a href="javascript:void(0);">Kathrine Culbertson</a></span>
                                                        </div>
                                                    </article>
                                                </li>
                                                <li>
                                                    <article className="tg-post">
                                                        <figure><a href="javascript:void(0);"><img src="images/products/img-07.jpg" alt="image description" /></a></figure>
                                                        <div className="tg-postcontent">
                                                            <div className="tg-posttitle">
                                                                <h3><a href="javascript:void(0);">Where The Wild Things Are</a></h3>
                                                            </div>
                                                            <span className="tg-bookwriter">By: <a href="javascript:void(0);">Kathrine Culbertson</a></span>
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
                                                        <img src="images/instagram/img-01.jpg" alt="image description" />
                                                        <figcaption><a href="javascript:void(0);"><i className="icon-heart" /><em>50,134</em></a></figcaption>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img src="images/instagram/img-02.jpg" alt="image description" />
                                                        <figcaption><a href="javascript:void(0);"><i className="icon-heart" /><em>50,134</em></a></figcaption>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img src="images/instagram/img-03.jpg" alt="image description" />
                                                        <figcaption><a href="javascript:void(0);"><i className="icon-heart" /><em>50,134</em></a></figcaption>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img src="images/instagram/img-04.jpg" alt="image description" />
                                                        <figcaption><a href="javascript:void(0);"><i className="icon-heart" /><em>50,134</em></a></figcaption>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img src="images/instagram/img-05.jpg" alt="image description" />
                                                        <figcaption><a href="javascript:void(0);"><i className="icon-heart" /><em>50,134</em></a></figcaption>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img src="images/instagram/img-06.jpg" alt="image description" />
                                                        <figcaption><a href="javascript:void(0);"><i className="icon-heart" /><em>50,134</em></a></figcaption>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img src="images/instagram/img-07.jpg" alt="image description" />
                                                        <figcaption><a href="javascript:void(0);"><i className="icon-heart" /><em>50,134</em></a></figcaption>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img src="images/instagram/img-08.jpg" alt="image description" />
                                                        <figcaption><a href="javascript:void(0);"><i className="icon-heart" /><em>50,134</em></a></figcaption>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure>
                                                        <img src="images/instagram/img-09.jpg" alt="image description" />
                                                        <figcaption><a href="javascript:void(0);"><i className="icon-heart" /><em>50,134</em></a></figcaption>
                                                    </figure>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tg-widget tg-widgetblogers">
                                        <div className="tg-widgettitle">
                                            <h3>Top Bloogers</h3>
                                        </div>
                                        <div className="tg-widgetcontent">
                                            <ul>
                                                <li>
                                                    <div className="tg-author">
                                                        <figure><a href="javascript:void(0);"><img src="images/author/imag-03.jpg" alt="image description" /></a></figure>
                                                        <div className="tg-authorcontent">
                                                            <h2><a href="javascript:void(0);">Jude Morphew</a></h2>
                                                            <span>21,658 Published Books</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="tg-author">
                                                        <figure><a href="javascript:void(0);"><img src="images/author/imag-04.jpg" alt="image description" /></a></figure>
                                                        <div className="tg-authorcontent">
                                                            <h2><a href="javascript:void(0);">Jude Morphew</a></h2>
                                                            <span>21,658 Published Books</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="tg-author">
                                                        <figure><a href="javascript:void(0);"><img src="images/author/imag-05.jpg" alt="image description" /></a></figure>
                                                        <div className="tg-authorcontent">
                                                            <h2><a href="javascript:void(0);">Jude Morphew</a></h2>
                                                            <span>21,658 Published Books</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="tg-author">
                                                        <figure><a href="javascript:void(0);"><img src="images/author/imag-06.jpg" alt="image description" /></a></figure>
                                                        <div className="tg-authorcontent">
                                                            <h2><a href="javascript:void(0);">Jude Morphew</a></h2>
                                                            <span>21,658 Published Books</span>
                                                        </div>
                                                    </div>
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
        {/*************************************
				Main End
		**************************************/}
    </div>
    )
}
export default Book_detail;