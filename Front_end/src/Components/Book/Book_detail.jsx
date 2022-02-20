import React, { useLayoutEffect, useState, useRef } from 'react';
import ReviewAPI from '../../api/ReviewAPI';
import BookAPI from '../../api/BookAPI.js';
//-----------------------
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { CartProvider, useCart } from "react-use-cart";
import { useParams } from 'react-router-dom';
import AddToWishlist from '../FolderAction/AddToWishlist';
//----------------------
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
//-----------------------
//----------------------
import Book_catagory from './Book_catagory.jsx';
import Same_book from './Same_book.jsx';
import { Reviews, List_review, Single_review, Reviews_edit } from './Book_reviews.jsx'
import './reviews.css'

import './App.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    cursor: 'pointer',
    position: "relative",
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
    width: '70%',
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
        groupdetail: [
            //             catagoryid:
            // catagorycreateddate: "2022-02-02 00:00:00.0"
            // catagorydescription: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\""
            // catagoryid: 2
            // catagorymodifieddate: "2022-02-02 00:00:00.0"
            // catagoryname: "Foreign Language Books"
            // [[Prototype]]: Object
            // groupcreateddate: "2022-02-02 00:00:00.0"
            // groupmodifieddate: "2022-02-02 00:00:00.0"
            // id: 1
        ],
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
    async function handleAddWishlist(booksId) {
        await AddToWishlist.AddToWishlist(cookies, booksId).then(result => {
            fetchbook();
            setCookie('action', JSON.stringify({ doChange: new Date().getTime() }), { path: '/' });
        }).catch(err => {
            alert(err.msg)
        })
    }

    const [books, setBooks] = useState([
    ]);
    async function LoadBookByAuthor() {
        if (book.authorid.authorid !== undefined) {
            await BookAPI.LoadByAuthor(book.authorid.authorid).then(result => {
                setBooks(result.data)
            }).catch(err => {
                console.log(err.msg)
            })
        }
    }
    useEffect(() => {
        LoadBookByAuthor()
    }, [book])
    // console.log(book)
    // --------------End Books-----------------

    // --------------SameBook-----------------
    const [sameBooks, setSameBooks] = useState([
    ]);
    async function LoadByCatagory() {
        if (book.groupdetail.length !== 0) {
            await BookAPI.findByCatagory(book.groupdetail[0].catagoryid.catagoryid).then(result => {
                setSameBooks(result.data)
            }).catch(err => {
                console.log(err.msg)
            })
        }
    }
    useEffect(() => {
        LoadByCatagory()
    }, [book])
    // --------------End SameBook-----------------


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
                    <Box sx={style} className="well well-white mini-profile-widget bootdey.com">
                        <div className="col-md-6" >
                            <div className="image-container">
                                <img src={"http://localhost:9999/image/" + book.authorid.authorImage + "?v=" + new Date().getTime()} className="avatar img-responsive" alt="avatar" />
                            </div>
                            <div className="tg-widget tg-widgettrending" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
                                <div className="tg-widgettitle">
                                    <h3>There own book</h3>
                                </div>
                                <div className="tg-widgetcontent">
                                    <ul style={{
                                        color: "black",
                                        height: "40rem",
                                        overflow: "scroll"
                                    }}>
                                        {books.length !== 0 && books.map((book_b, index) => {
                                            return (
                                                <li key={index}>
                                                    <article className="tg-post">
                                                        <figure><a style={{
                                                            width: 120,
                                                            height: 120
                                                        }}><img src={"http://localhost:9999/image/" + book_b.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="image description" /></a></figure>
                                                        <div className="tg-postcontent">
                                                            <div className="tg-posttitle">
                                                                <h3><a href="#!">{book_b.bookname}</a></h3>
                                                            </div>
                                                            <span className="tg-bookwriter">
                                                                {"$" + book_b.bookprice}
                                                                <span style={{ padding: 30 }}>
                                                                    <Stack direction="row" spacing={2} style={{ margin: "auto" }}>
                                                                        <Item>
                                                                            <a style={{ cursor: 'pointer', fontSize: 15, padding: 15 }} onClick={() => onClick(book_b)} >Add To Basket</a>
                                                                        </Item>
                                                                        <Item>
                                                                            {auth && (
                                                                                book_b.wishlists.length !== 0 &&
                                                                                (
                                                                                    book.wishlists.map((wishCheck, index) => {
                                                                                        return (
                                                                                            <a style={{ backgroundColor: 'green' }}>
                                                                                                <span>Already in wishlist</span>
                                                                                            </a>
                                                                                        )
                                                                                    })
                                                                                )
                                                                            )}
                                                                            {auth && (
                                                                                book_b.wishlists.length === 0 &&
                                                                                (
                                                                                    <a onClick={() => handleAddWishlist(book.booksid)} style={{ cursor: 'pointer', fontSize: 15, padding: 15 }}>
                                                                                        <span>Add to wishlist</span>
                                                                                    </a>
                                                                                )
                                                                            )}
                                                                            {!auth && (
                                                                                <a style={{ cursor: 'pointer', fontSize: 15, padding: 15 }}>
                                                                                    <span>Please login..</span>
                                                                                </a>
                                                                            )}
                                                                        </Item>
                                                                    </Stack>
                                                                </span>
                                                            </span>
                                                        </div>

                                                    </article>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="details">
                                <h4 style={{
                                    color: "black"
                                }}>{book.authorid.authorname}</h4>
                                <hr style={{ color: "#333", backgroundColor: "#333" }} />
                                <div style={{
                                    color: "black",
                                    height: "60rem",
                                    overflow: "scroll"
                                }} className="author_information" dangerouslySetInnerHTML={{ __html: book.authorid.authorinformation }} />
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
                                                        <span className="tg-bookwriter">By: <a onMouseEnter={() => setTimeout(setOpen(true), 99999999999)} >{book.authorid.authorname}</a></span>
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
                                                <Same_book data={sameBooks} addWishlist={handleAddWishlist} onAdd={onClick} />
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