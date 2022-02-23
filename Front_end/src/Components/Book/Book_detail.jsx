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
import './reviews.css'

import './App.css'
import Review from './reviews';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    cursor: 'pointer',
    position: "relative",
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


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

    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    const { id } = useParams();
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
    useEffect(() => {
        const refresh = setInterval(() => {
            fetchbook();
        }, 10000);
        return () => clearInterval(refresh);
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
            toast.success("Adding item to wishlist", {
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
    }, [])

    async function handleAddBookInAuthor(booksId) {
        await AddToWishlist.AddToWishlist(cookies, booksId).then(result => {
            LoadBookByAuthor();
            setCookie('action', JSON.stringify({ doChange: new Date().getTime() }), { path: '/' });
            toast.success("Adding item to wishlist", {
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
    // console.log(book)
    // --------------End Books-----------------

    // --------------SameBook-----------------
    const [sameBooks, setSameBooks] = useState([
    ]);
    async function LoadByCatagory() {
        const newArrays = [];
        book.groupdetail.map(respone => newArrays.push(respone.catagoryid.catagoryid))

        // console.log(newArrays)

        if (book.groupdetail.length !== 0) {
            await BookAPI.getSameBook(newArrays).then(result => {
                const key = 'booksid';

                const arrayUniqueByKey = [...new Map(result.data.map(item =>
                    [item[key], item])).values()];
                setSameBooks(arrayUniqueByKey)
            }).catch(err => {
                console.log(err.msg)
            })
        }
    }

    async function handleSameBookAddWishlist(booksId) {
        await AddToWishlist.AddToWishlist(cookies, booksId).then(result => {
            LoadByCatagory();
            setCookie('action', JSON.stringify({ doChange: new Date().getTime() }), { path: '/' });
            toast.success("Adding item to wishlist", {
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


    useEffect(() => {
        LoadByCatagory()
    }, [book])
    // --------------End SameBook-----------------

    const [delayHandler, setDelayHandler] = useState(null)

    const handleMouseEnter = event => {
        setDelayHandler(setTimeout(() => {
            setOpen(true)
            LoadBookByAuthor()
        }, 500))
    }
    const handleMouseLeave = () => {
        clearTimeout(delayHandler)
    }
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
                            <div className="tg-widget tg-widgettrending">
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
                                            let wishlistArray;
                                            if (auth) {
                                                wishlistArray = book_b.wishlists.filter(wishlist => wishlist.user_id.userid.includes(cookies.loggin.userID))
                                            }
                                            return (
                                                <li key={index}>
                                                    <article className="tg-post">
                                                        <figure><a style={{
                                                            width: 120,

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
                                                                            {book_b.status === 3 ? (
                                                                                <a style={{ fontSize: 15, padding: 15 }} >Out stock</a>
                                                                            ) : (
                                                                                book_b.amounts !== 0 ? (
                                                                                    <a style={{ cursor: 'pointer', fontSize: 15, padding: 15 }} onClick={() => onClick(book_b)} >Add To Basket</a>
                                                                                ) : (
                                                                                    <a style={{ fontSize: 15, padding: 15 }} >Out stock</a>
                                                                                )
                                                                            )}
                                                                        </Item>
                                                                        <Item>
                                                                            {auth && (
                                                                                wishlistArray.length !== 0 && (
                                                                                    <a style={{ cursor: 'default', fontSize: 15, padding: 15 }}><span style={{ color: "green" }}>Already in  wishlist</span></a>
                                                                                )
                                                                            )}
                                                                            {auth && wishlistArray.length === 0 && (
                                                                                <a onClick={() => handleAddBookInAuthor(book_b.booksid)} style={{ cursor: 'pointer', fontSize: 15, padding: 15 }}>
                                                                                    <span>Add to wishlist</span>
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
                                    <li><a href="/">home</a></li>
                                    <li><a >Detail</a></li>
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
                                                                <ins>${book.bookprice}</ins>
                                                                {/* <del>$27.20</del> */}
                                                            </span>
                                                            {book.status === 3 ? (
                                                                <a className="tg-btn tg-active tg-btn-lg" >Out stock</a>
                                                            ) : (
                                                                <a className="tg-btn tg-active tg-btn-lg" onClick={() => onClick(book)}>Add To Basket</a>
                                                            )}

                                                            {auth && (
                                                                book.wishlists.length !== 0 &&
                                                                (
                                                                    <a className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
                                                                        <span>Already in wishlist</span>
                                                                    </a>
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
                                                        <div className="tg-booktitle">
                                                            <h3>{book.bookname}</h3>
                                                        </div>
                                                        <span className="tg-bookwriter">By: <a
                                                            style={{ cursor: 'progress' }}
                                                            onMouseLeave={handleMouseLeave}
                                                            onMouseEnter={handleMouseEnter} >{book.authorid.authorname}</a></span>
                                                        <span className="tg-addreviews"></span>
                                                        <div class="tg-description">
                                                            <p>{book.bookdescription}</p>
                                                           
                                                        </div>
                                                        <div className="tg-sectionhead">
                                                            <h2>Book Details</h2>
                                                        </div>
                                                        <ul className="tg-productinfo" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
                                                            <li><span>Pages:</span><span>{book.pdetailid.pages}</span></li>
                                                            <li><span>Dimensions:</span><span>{book.pdetailid.dimensions}</span></li>
                                                            <li><span>Publication Date:</span><span>{book.bookreleasedate}</span></li>
                                                            <li><span>Publisher:</span><span>{book.authorid.authorname}</span></li>
                                                            <li><span>Language:</span><span>{book.pdetailid.language}</span></li>
                                                            <li><span>Illustrations note:</span><span dangerouslySetInnerHTML={{ __html: book.pdetailid.illustrationsnote }}/></li>
                                                        </ul>
                                                        <div className="tg-alsoavailable">
                                                            <figure>
                                                                <img src="images/img-02.jpg" alt="image description" />
                                                                <figcaption>
                                                                    <h3>Catagory:</h3>
                                                                    <ul style={{ height: 120, overflowY: "scroll" }}>
                                                                        {book.groupdetail.length !== 0 && book.groupdetail.map((category, index) => {
                                                                            return (
                                                                                <li key={index} style={{ listStyleType: "none" }}>
                                                                                    <a style={{ color: "black" }} href={"/Collection/" + category.catagoryid.catagoryid}>
                                                                                        <small>{category.catagoryid.catagoryname}</small>
                                                                                    </a>
                                                                                </li>
                                                                            )
                                                                        })}
                                                                        {book.groupdetail.length === 0 && (
                                                                            <li><span>On update</span></li>
                                                                        )}
                                                                    </ul>
                                                                </figcaption>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tg-productdescription product-ratings" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
                                                    <Review />
                                                </div>
                                                <Same_book data={sameBooks} addWishlist={handleSameBookAddWishlist} onAdd={onClick} />
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