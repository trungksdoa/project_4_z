import React, { useLayoutEffect, useState } from 'react';
import CategoryAPI from '../../api/CategoryAPI.js';
import { Link } from 'react-router-dom';
const Book_catagory = () => {
    const [categoryList, setcategoryList] = useState([]);
    useLayoutEffect(() => {
        async function fetchcategoryList() {
            await CategoryAPI.FindALl().then(result => {
                setcategoryList(result.data)
            }).catch(err => {
                alert(err.msg)
            })
        }
        fetchcategoryList();
    }, [])
    return (
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
            <aside id="tg-sidebar" className="tg-sidebar">
                <div className="tg-widget tg-catagories" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
                    <div className="tg-widgettitle">
                        <h3>Categories</h3>
                    </div>
                    <div className="tg-widgetcontent">
                        <ul>
                            {categoryList.map((post, index) => {

                                return (
                                    <li key={index}>
                                        <Link to={"/Collection/" + post.catagoryid}>
                                            <span key={post.catagoryid}>{post.catagoryname}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                            <li><Link to={"/Collection"}><span>View All</span></Link></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="tg-widget tg-widgettrending" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
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
                </div> */}
            </aside>
        </div>
    )
}
export default Book_catagory