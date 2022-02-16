import React from 'react';

const Book_catagory = () => {

    return (
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
            <aside id="tg-sidebar" className="tg-sidebar">
                <div className="tg-widget tg-widgetsearch" style={{boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px'}}>
                    <form className="tg-formtheme tg-formsearch">
                        <div className="form-group">
                            <button type="submit"><i className="icon-magnifier" /></button>
                            <input type="search" name="search" className="form-group" placeholder="Search by title, author, key..." />
                        </div>
                    </form>
                </div>
                <div className="tg-widget tg-catagories" style={{boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px'}}>
                    <div className="tg-widgettitle">
                        <h3>Categories</h3>
                    </div>
                    <div className="tg-widgetcontent">
                        <ul>
                            <li><a href="#!"><span>Art &amp; Photography</span><em>28245</em></a></li>
                            <li><a href="#!"><span>Biography</span><em>4856</em></a></li>
                            <li><a href="#!"><span>Children’s Book</span><em>8654</em></a></li>
                            <li><a href="#!"><span>Craft &amp; Hobbies</span><em>6247</em></a></li>
                            <li><a href="#!"><span>Crime &amp; Thriller</span><em>888654</em></a></li>
                            <li><a href="#!"><span>Fantasy &amp; Horror</span><em>873144</em></a></li>
                            <li><a href="#!"><span>Fiction</span><em>18465</em></a></li>
                            <li><a href="#!"><span>Fod &amp; Drink</span><em>3148</em></a></li>
                            <li><a href="#!"><span>Graphic, Anime &amp; Manga</span><em>77531</em></a></li>
                            <li><a href="#!"><span>Science Fiction</span><em>9247</em></a></li>
                            <li><a href="#!"><span>View All</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="tg-widget tg-widgettrending" style={{boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px'}}>
                    <div className="tg-widgettitle">
                        <h3>Trending Products</h3>
                    </div>
                    <div className="tg-widgetcontent">
                        <ul>
                            <li>
                                <article className="tg-post">
                                    <figure><a href="#!"><img src="images/products/img-04.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-posttitle">
                                            <h3><a href="#!">Where The Wild Things Are</a></h3>
                                        </div>
                                        <span className="tg-bookwriter">By: <a href="#!">Kathrine Culbertson</a></span>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <article className="tg-post">
                                    <figure><a href="#!"><img src="images/products/img-05.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-posttitle">
                                            <h3><a href="#!">Where The Wild Things Are</a></h3>
                                        </div>
                                        <span className="tg-bookwriter">By: <a href="#!">Kathrine Culbertson</a></span>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <article className="tg-post">
                                    <figure><a href="#!"><img src="images/products/img-06.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-posttitle">
                                            <h3><a href="#!">Where The Wild Things Are</a></h3>
                                        </div>
                                        <span className="tg-bookwriter">By: <a href="#!">Kathrine Culbertson</a></span>
                                    </div>
                                </article>
                            </li>
                            <li>
                                <article className="tg-post">
                                    <figure><a href="#!"><img src="images/products/img-07.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-posttitle">
                                            <h3><a href="#!">Where The Wild Things Are</a></h3>
                                        </div>
                                        <span className="tg-bookwriter">By: <a href="#!">Kathrine Culbertson</a></span>
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    )
}
export default Book_catagory