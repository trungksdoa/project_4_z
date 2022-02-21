import React, { useState, useLayoutEffect } from 'react';
import BookAPI from '../../api/BookAPI.js';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddToWishlist from '../FolderAction/AddToWishlist';
import { useCookies } from 'react-cookie';
import { CartProvider, useCart } from "react-use-cart";
import { toast } from 'react-toastify';
import Rating from '@mui/material/Rating';

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

    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
    const sum = sumValues(counts); // gives 5

    return total_rating / sum;
}


const Release = () => {

    const [BookList, setBookList] = useState([]);
    const { addItem } = useCart();
    async function BFetch() {
        await BookAPI.FindAll()
            .then((book) => {
                setBookList(book.data);
            })
            .catch((error) => {
                alert(error.msg);
            });
    }
    useLayoutEffect(() => {
        BFetch();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;

    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = BookList.slice(itemOfFirst, itemOfLast)

    const arrLength = BookList.length;

    const paginate = page => {
        setCurrentPage(page)
    }
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;

    async function handleAddWishlist(booksId) {
        await AddToWishlist.AddToWishlist(cookies, booksId).then(result => {
            setCurrentPage(currentPage);
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
    return (<section className="tg-sectionspace tg-haslayout" style={{
        padding: 20
    }}>
        <div className="container">
            <div className="row">
                <div className="tg-newrelease">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="tg-sectionhead">
                            <h2><span>Taste The New Spice</span>New Release Books</h2>
                        </div>

                        <div className="tg-description">
                            <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat cupidatat.</p>
                        </div>
                        <div className="tg-btns">
                            <a className="tg-btn tg-active" href="/Collection">View All</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="tg-sectionhead">
                                {itemOfFirst < arrLength - 1 ? (
                                    <a className="tg-btn" style={{ cursor: 'pointer' }} onClick={() => paginate(currentPage + 1)} ><ArrowForwardIosIcon /></a>
                                ) : (
                                    <a className="tg-btn" style={{ pointerEvents: "none", cursor: "not-allowed", background: "darkgrey" }}><ArrowForwardIosIcon /></a>
                                )}
                                {itemOfLast === 3 && (
                                    <a className="tg-btn" style={{ pointerEvents: "none", cursor: "not-allowed", background: "darkgrey" }}><ArrowBackIosNewIcon /></a>
                                )}
                                {itemOfLast !== 3 && (
                                    <a className="tg-btn" style={{ cursor: 'pointer' }} onClick={() => paginate(currentPage - 1)}><ArrowBackIosNewIcon /></a>
                                )}
                            </div>
                            <div className="tg-newreleasebooks">
                                {currentItem.length > 0 && (
                                    currentItem.map((book, index) => {
                                        let wishlistArray;
                                        if (auth) {
                                            wishlistArray = book.wishlists.filter(wishlist => wishlist.user_id.userid.includes(cookies.loggin.userID))
                                        }
                                        if (index < 3) {
                                            return (
                                                <div className="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                                                    <div className="tg-postbook">
                                                        <figure className="tg-featureimg">
                                                            <div className="tg-bookimg">
                                                                <div className="tg-frontcover"><img src="images/books/img-10.jpg" alt="image description" /></div>
                                                                <div className="tg-backcover"><img src="images/books/img-10.jpg" alt="image description" /></div>
                                                            </div>
                                                            {auth && (
                                                                wishlistArray.length !== 0 && (
                                                                    <a key={index} className="tg-btnaddtowishlist" style={{ backgroundColor: 'green' }}>
                                                                        <span>Already in wishlist</span>
                                                                    </a>
                                                                )
                                                            )}
                                                            {auth && wishlistArray.length === 0 && (
                                                                <a key={index} className="tg-btnaddtowishlist" onClick={() => handleAddWishlist(book.booksid)} style={{ cursor: 'pointer' }}>
                                                                    <i className="icon-heart" />
                                                                    <span>add to wishlist</span>
                                                                </a>
                                                            )}
                                                        </figure>
                                                        <div className="tg-postbookcontent">
                                                            <ul className="tg-bookscategories">
                                                                {book.groupdetail.length !== 0 && book.groupdetail.map((category, index) => {
                                                                    if (index < 2) {
                                                                        return (
                                                                            <li key={index}>
                                                                                <a href={"/Collection/" + category.catagoryid.catagoryid}>
                                                                                    {category.catagoryid.catagoryname}
                                                                                </a>
                                                                            </li>
                                                                        )
                                                                    }
                                                                })}
                                                                {book.groupdetail.length === 0 && (
                                                                    <li>On update</li>
                                                                )}
                                                            </ul>
                                                            <div className="tg-booktitle">
                                                                <h3
                                                                    style={{
                                                                        whiteSpace: "nowrap",
                                                                        width: "80%",
                                                                        overflow: "hidden",
                                                                        textOverflow: "ellipsis"
                                                                    }}
                                                                ><a href={"/Book/" + book.booksid}>{book.bookname}</a></h3>
                                                            </div>
                                                            <span className="tg-bookwriter">By: <a href={"/author/" + book.authorid.authorid}>{book.authorid.authorname}</a></span>
                                                            <span>
                                                                <Rating name="read-only" size="large" precision={0.5} value={caculator(book.reviews)} readOnly />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Release;