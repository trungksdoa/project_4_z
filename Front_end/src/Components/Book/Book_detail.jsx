import React, { useLayoutEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Book_catagory from './Book_catagory.jsx';
import Same_book from './Same_book.jsx';
import { Reviews, List_review, Single_review, Reviews_edit } from './Book_reviews.jsx'
import { useCookies } from 'react-cookie';
import './reviews.css'
import ReviewAPI from '../../api/ReviewAPI';
// import './App.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>
                        {children}
                    </div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Book_detail = () => {


    // --------------Books-----------------






    // --------------End Books-----------------



    // --------------Reviews-----------------
    const [value, setValue] = useState(0);
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    const [isReviewd, setIsReviewd] = useState(true);
    const { id } = useParams();
    const [user_review, setUserReview] = useState({
        active: 0,
        createddate: "",
        ratingstart: 0,
        reviewcontent: "",
        reviewid: 0,
        reviewtitle: "",
        userid: {
            userid: "",
            firstName: "",
            lastName: "",
            useremail: "",
            userpassword: "responseresponse",
            birthday: "",
            phone: "",
            status: 0,
            usercreateddate: "",
            usermodifieddate: ""
        }
    });
    const [data, setData] = useState([{
        active: 0,
        createddate: "",
        ratingstart: 0,
        reviewcontent: "",
        reviewid: 0,
        reviewtitle: "",
        userid: {
            userid: "",
            firstName: "",
            lastName: "",
            useremail: "",
            userpassword: "responseresponse",
            birthday: "",
            phone: "",
            status: 0,
            usercreateddate: "",
            usermodifieddate: ""
        },
        booksId: {
            booksid: ""
        }
    }]);
    const [action, setAction] = useState("view");
    const [searchRating, setSearchRating] = useState("");
    const [filterd, setFiltered] = useState([]);
    const numbeRating = useRef();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleEdit_Reviews = (target, reviewId) => {
        const action_ = action === "view" ? "edit" : "view";
        setAction(action_)
        // console.log(target, reviewId)
    };
    const HandleBackToView = () => {
        setAction("view")
    }
    async function Fetch(id) {
        return await ReviewAPI.FindALl(id)
    }

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

        numbeRating.current = counts

        const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
        const sum = sumValues(counts); // gives 5

        return total_rating / sum;
    }

    useLayoutEffect(() => {
        if (auth) {
            const interval = setInterval(() => {
                Fetch(id).then(res => {
                    setData(res.data);
                    let obj = res.data.find(o => o.userid.userid === cookies.loggin.userID);
                    if (obj === undefined) {
                        setIsReviewd(false);
                        setUserReview({
                            active: 0,
                            createddate: "",
                            ratingstart: 0,
                            reviewcontent: "",
                            reviewid: 0,
                            reviewtitle: "",
                            userid: {
                                userid: "",
                                firstName: "",
                                lastName: "",
                                useremail: "",
                                userpassword: "responseresponse",
                                birthday: "",
                                phone: "",
                                status: 0,
                                usercreateddate: "",
                                usermodifieddate: ""
                            }
                        })
                    } else {
                        setIsReviewd(true);
                        setUserReview(obj)
                    }
                })
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [])

    useLayoutEffect(() => {
        setFiltered(data.filter(review =>
            review.ratingstart.toString().includes(searchRating)
        ))
    }, [data, searchRating])
    // --------------End Reviews-----------------
    return (<div>
        <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index={-100} data-appear-top-offset={600} data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="tg-innerbannercontent">
                            <h1>All Products</h1>
                            <ol className="tg-breadcrumb">
                                <li><a href="#!">home</a></li>
                                <li><a href="#!">Products</a></li>
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
                                <div id="tg-content" className="tg-content" >
                                    {/* <div className="tg-featurebook alert" role="alert">
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
                                                            <h3><a href="#!">Things To Know About Green Flat Design</a></h3>
                                                        </div>
                                                        <span className="tg-bookwriter">By: <a href="#!">Farrah Whisenhunt</a></span>
                                                        <span className="tg-stars"><span /></span>
                                                        <div className="tg-priceandbtn">
                                                            <span className="tg-bookprice">
                                                                <ins>$23.18</ins>
                                                                <del>$30.20</del>
                                                            </span>
                                                            <a className="tg-btn tg-btnstyletwo tg-active" href="#!">
                                                                <i className="fa fa-shopping-basket" />
                                                                <em>Add To Basket</em>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
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
                                                        <a className="tg-btn tg-active tg-btn-lg" href="#!">Add To Basket</a>
                                                        <a className="tg-btnaddtowishlist" href="#!">
                                                            <span>add to wishlist</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                                <div className="tg-productcontent">
                                                    <ul className="tg-bookscategories">
                                                        <li><a href="#!">Art &amp; Photography</a></li>
                                                    </ul>
                                                    <div className="tg-booktitle">
                                                        <h3>Drive Safely, No Bumping</h3>
                                                    </div>
                                                    <span className="tg-bookwriter">By: <a href="#!">Angela Gunning</a></span>
                                                    <span className="tg-addreviews"></span>
                                                    <div className="tg-sectionhead">
                                                        <h2>Product Details</h2>
                                                    </div>
                                                    <ul className="tg-productinfo" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
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

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tg-productdescription product-ratings" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
                                                <Box sx={{ width: '100%' }}>
                                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                            <Tab
                                                                label="Description"
                                                                {...a11yProps(0)} />
                                                            <Tab label="Review" {...a11yProps(1)} />
                                                        </Tabs>
                                                    </Box>
                                                    {auth ? (
                                                        <>
                                                            <TabPanel value={value} index={0}>
                                                                {action === "view" ? (
                                                                    <>
                                                                        <div className="product-rating-overview">
                                                                            <div className="product-rating-overview__briefing">
                                                                                <div className="product-rating-overview__score-wrapper">
                                                                                    <span class="product-rating-overview__rating-score">{Math.round(caculator(data) * 100) / 100}</span>
                                                                                    <span class="product-rating-overview__rating-score-out-of"> trên 5 </span>
                                                                                </div>
                                                                                <div className="shopee-rating-stars product-rating-overview__stars">
                                                                                    <div className="shopee-rating-stars__stars">
                                                                                        <Rating name="read-only" size="large" value={caculator(data)} readOnly />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-rating-overview__filters">
                                                                                <div className="product-rating-overview__filter product-rating-overview__filter--active product-rating-overview__filter--all" onClick={() => setSearchRating("")}>All</div>
                                                                                <div className="product-rating-overview__filter" onClick={() => setSearchRating("5")}>5 star ({numbeRating.current[5]})</div>
                                                                                <div className="product-rating-overview__filter" onClick={() => setSearchRating("4")}>4 star ({numbeRating.current[4]})</div>
                                                                                <div className="product-rating-overview__filter" onClick={() => setSearchRating("3")}>3 star ({numbeRating.current[3]})</div>
                                                                                <div className="product-rating-overview__filter" onClick={() => setSearchRating("2")}>2 star ({numbeRating.current[2]})</div>
                                                                                <div className="product-rating-overview__filter" onClick={() => setSearchRating("1")}>1 star ({numbeRating.current[1]})</div>
                                                                            </div>
                                                                        </div>
                                                                        <Single_review data={user_review} OnEdit={handleEdit_Reviews} />
                                                                        {filterd.length === 0 ? (
                                                                            <p> No reviews found</p>
                                                                        ) : (
                                                                            <List_review data={filterd} customerId={user_review.userid.userid} />
                                                                        )}
                                                                    </>
                                                                ) : (
                                                                    <Reviews_edit onBack={HandleBackToView} bookId={id} customerId={user_review.userid.userid} data={user_review} changeView={() => setAction("view")} />
                                                                )}
                                                                <hr></hr>
                                                            </TabPanel>
                                                            <TabPanel value={value} index={1}>
                                                                {isReviewd && (
                                                                    <h3>Bạn đã đánh giá</h3>
                                                                )}
                                                                {!isReviewd && (
                                                                    <Reviews bookId={id} customerId={cookies.loggin.userID} />
                                                                )}
                                                            </TabPanel>
                                                        </>
                                                    ) : (
                                                        <h3>Please loggin</h3>
                                                    )}

                                                </Box>
                                            </div>
                                            <Same_book />
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
        </main >
        {/*************************************
				Main End
		**************************************/}
    </div >
    )
}
export default Book_detail;