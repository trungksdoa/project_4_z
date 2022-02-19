import React, { useLayoutEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Book_catagory from './Book_catagory.jsx';
import Same_book from './Same_book.jsx';
import { Reviews, List_review, Single_review, Reviews_edit } from './Book_reviews.jsx'
import { useCookies } from 'react-cookie';
import './reviews.css'
import ReviewAPI from '../../api/ReviewAPI';
import BookAPI from '../../api/BookAPI.js';
import { useEffect } from 'react';
import { CartProvider, useCart } from "react-use-cart";
import AddToWishlist from '../FolderAction/AddToWishlist';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

import './App.css'

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

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'auto',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const Book_detail = () => {
    const [open, setOpen] = useState(false);



    const handleClose = () => setOpen(false);

    // --------------Books-----------------


    const [book, setbook] = useState({
        amounts: 0,
        authorid: {},
        bookcreateddate: "",
        bookdescription: "",
        bookmodifieddate: "",
        bookname: "",
        bookprice: 0,
        bookreleasedate: "",
        booksid: "",
        groupdetail: [],
        pdetailid: {
            dimensions: "",
            format: "",
            illustrationsnote: "",
            imageLink: "",
            language: "",
            pages: 0,
            pdetailid: 0
        },
        wishlists: [],
        status: 2
    });

    async function fetchbook() {
        await BookAPI.findPdetails(id).then(result => {
            setbook(result.data)
        }).catch(err => {
            alert(err.msg)
        })
    }
    useEffect(() => {
        fetchbook();
    }, [])
    const { addItem } = useCart();
    function onClick(props) {
        const { booksid, bookprice, pdetailid, bookname } = props;
        const newObject = { id: "", price: 0, img: "", name: "" };
        newObject.id = booksid;
        newObject.price = bookprice;
        newObject.img = pdetailid.imageLink;
        newObject.name = bookname;
        addItem(newObject);
        console.log(newObject);
    }
    async function handleAddWishlist(booksId) {
        await AddToWishlist.AddToWishlist(cookies, booksId).then(result => {
            fetchbook();
            setCookie('action', JSON.stringify({ doChange: new Date().getTime() }), { path: '/' });
        }).catch(err => {
            alert(err.msg)
        })
    }

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
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className="well well-purple mini-profile-widget bootdey.com">
                        <div className="col-md-6">
                            <div className="image-container">
                                <img src={"http://localhost:9999/image/" + book.authorid.authorImage + "?v=" + new Date().getTime()} className="avatar img-responsive" alt="avatar" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="details">
                                <h4>{book.authorid.authorname}</h4>
                                <hr />
                                <div>Works at Bootdey</div>
                                <div>Attended University of Technology</div>
                                <div>Lives in Miami, Florida</div>
                                <p className="mg-top-20">
                                    <a href="javascript:void(0);" className="btn btn-blue">
                                        <i className="fa fa-facebook fa-fw" />
                                    </a>
                                    <a href="javascript:void(0);" className="btn btn-info">
                                        <i className="fa fa-twitter fa-fw" />
                                    </a>
                                    <a href="javascript:void(0);" className="btn btn-red">
                                        <i className="fa fa-google-plus fa-fw" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
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
                                        <div className="tg-productdetail">
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                    <div className="tg-postbook">
                                                        <figure className="tg-featureimg">
                                                            <img key={book.booksid} src={"http://localhost:9999/image/" + book.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" />
                                                        </figure>
                                                        <div className="tg-postbookcontent">
                                                            <span className="tg-bookprice">
                                                                <ins>{book.bookprice}$</ins>
                                                                {/* <del>$27.20</del> */}
                                                            </span>
                                                            <a className="tg-btn tg-active tg-btn-lg" onClick={() => onClick(book)}>Add To Basket</a>
                                                            {auth && (
                                                                book.wishlists.length !== 0 &&
                                                                (
                                                                    book.wishlists.map((wishCheck, index) => {
                                                                        return (
                                                                            <a key={index} className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
                                                                                <span>Already in wishlist</span>
                                                                            </a>
                                                                        )
                                                                    })
                                                                )
                                                            )}
                                                            {auth && (
                                                                book.wishlists.length === 0 &&
                                                                (
                                                                    <a className="tg-btnaddtowishlist" onClick={() => handleAddWishlist(book.booksid)} style={{ cursor: 'pointer' }}>
                                                                        <i className="icon-heart" />
                                                                        <span>add to wishlist</span>
                                                                    </a>
                                                                )
                                                            )}
                                                            {!auth && (
                                                                <a className="tg-btnaddtowishlist" style={{ cursor: 'pointer' }}>
                                                                    <span>Please login to use</span>
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                                    <div className="tg-productcontent">
                                                        <ul className="tg-bookscategories">
                                                            {/* <li><a href="#!">Art &amp; Photography</a></li> */}
                                                        </ul>
                                                        <div className="tg-booktitle">
                                                            <h3>{book.bookname}</h3>
                                                        </div>
                                                        <span className="tg-bookwriter">By: <a  onMouseEnter={() => setOpen(true)} >{book.authorid.authorname}</a></span>
                                                        <span className="tg-addreviews"></span>
                                                        <div className="tg-sectionhead">
                                                            <h2>Book Details</h2>
                                                        </div>
                                                        <ul className="tg-productinfo" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
                                                            <li><span>Format:</span><span>{book.pdetailid.format}</span></li>
                                                            <li><span>Pages:</span><span>{book.pdetailid.pages}</span></li>
                                                            <li><span>Dimensions:</span><span>{book.pdetailid.dimensions}</span></li>
                                                            <li><span>Publication Date:</span><span>{book.bookreleasedate}</span></li>
                                                            <li><span>Publisher:</span><span>{book.authorid.authorname}</span></li>
                                                            <li><span>Language:</span><span>{book.pdetailid.language}</span></li>
                                                            <li><span>Illustrations note:</span><span>{book.pdetailid.illustrationsnote}</span></li>
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