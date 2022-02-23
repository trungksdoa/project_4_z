import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import settingAPi from '../../api/SettingAPI';
import BookAPI from '../../api/BookAPI.js';
import { useCookies } from 'react-cookie';
import Basket from './Basket.jsx';
import WishlistAPI from '../../api/WishlistAPI';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { CartProvider, useCart } from 'react-use-cart';
import Box from '@mui/material/Box';
import './App.css'

const MiddleBar = () => {
    const [open, setOpen] = useState("");
    const handleClick = () => {
        setOpen("open");
    };

    const handleClickAway = () => {
        setOpen("");
    };
    const [setting, setSetting] = useState({ address: "", email: "", id: "", phonenum: "", timeservice: "", logo_name_path: "" });
    useEffect(() => {
        const getSetting = async () => {
            await settingAPi.getSetting().then((setting) => {
                setSetting(setting.data)
            }).catch((error) => {
                alert(error.msg);
            });
        }
        getSetting();
    }, [])

    /////////////////////////
    // ==================
    /////////////////////////
    const [wishlist, setWishlist] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const [cookie_doChange, setCookie_doChange, removeCookie_doChange] = useCookies(['action']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    const doChange = cookie_doChange.action !== undefined ? cookie_doChange.action.doChange : false;
    async function fetchData() {
        if (auth) {
            await WishlistAPI.getAll(cookies.loggin.userID).then(data => {
                setWishlist(data.data)
            }).catch(err => alert(err.msg))
        }
    }
    function formatToCurrency(amount) {
        return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    useEffect(() => {
        fetchData();
    }, [doChange])
    //Logic here
    //Cart
    const [coslape, setCoslape] = useState(false);
    const handleSearchChange = () => {
        setCoslape(true);
    };

    const CloseAutoComplete = () => {
        setCoslape(false);
    };
    const [bookList, setbookList] = useState([]);
    const [suggestBook, setSuggestBook] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        async function fetchbookList() {
            await BookAPI.FindAll().then(result => {
                setbookList(result.data)
            }).catch(err => {
                alert(err.msg)
            })
        }
        fetchbookList();
    }, [searchText])
    useEffect(() => {
        if (searchText.length > 0) {
            handleSearchChange()
            setSuggestBook(bookList.filter(book =>
                book.bookname.toLowerCase().includes(searchText.toLowerCase()) ||
                book.authorid.authorname.toLowerCase().includes(searchText.toLowerCase())
            ))
        }
    }, [searchText, bookList])
    const ItemClick = (url) => {
        CloseAutoComplete();
        window.location.href = url;
    }
    const {
        cartTotal,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        clearCartMetadata
    } = useCart();
    return (
        <div className="tg-middlecontainer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <strong className="tg-logo"><a href="index-2.html"><img src="images/logo.png" width="218" height="46" alt="company name here" /></a></strong>
                        <div className="tg-wishlistandcart">
                            <div className="dropdown tg-themedropdown tg-wishlistdropdown">
                                <a href="#!" id="tg-wishlisst" className="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="tg-themebadge">{wishlist.length}</span>
                                    <i className="icon-heart" />
                                    <span>Wishlist</span>
                                </a>

                                <div className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-wishlisst">
                                    {wishlist.length !== 0 ? (
                                        wishlist.map((wishlist, index) => {
                                            const { bookname, bookprice, user_id, wishlist_id, booksId } = wishlist;
                                            if (index < 3) {
                                                return (
                                                    <div key={index}>
                                                        <div className="" key={index}>
                                                            <div className="tg-minicarproduct">
                                                                <figure>
                                                                    <img src="images/products/img-01.jpg" alt="image description" />
                                                                </figure>
                                                                <div className="tg-minicarproductdata">
                                                                    <h5>	<a href={"/book/"+booksId}>{bookname}</a></h5>
                                                                    <h6><a>${formatToCurrency(bookprice)}</a></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        })
                                    ) : (
                                        <div className="tg-description"><p>No products were added to the wishlist!</p></div>
                                    )}
                                    {wishlist.length !== 0 && <a href="/Profile/Wishlist">View all</a>}
                                </div>
                            </div>
                            <div className={"tg-themedropdown tg-minicartdropdown " + open}>
                                <ClickAwayListener onClickAway={handleClickAway}>
                                    <Box sx={{ position: 'relative' }}>
                                        <>
                                            <a
                                                style={{ cursor: 'pointer' }}
                                                id="tg-minicart"
                                                className="tg-btnthemedropdown"
                                                onClick={handleClick}
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <span className="tg-themebadge">{totalUniqueItems}</span>
                                                <i className="icon-cart" />
                                                <span />
                                            </a>
                                            <Basket></Basket>
                                        </>
                                    </Box>
                                </ClickAwayListener>

                            </div>

                        </div>
                        <div className="tg-searchbox">
                            <form className="tg-formtheme tg-formsearch">
                                <fieldset>
                                    <input type="text" name="search" autoComplete="off" onChange={(e) => setSearchText(e.target.value)} className="typeahead form-control" placeholder="Search book by author or book name" />
                                    <button type="submit"><i className="icon-magnifier" /></button>

                                    <ClickAwayListener onClickAway={CloseAutoComplete}>
                                        <Box sx={{ position: 'relative' }}>
                                            <>
                                                {coslape == true && (
                                                    <>
                                                        {suggestBook.length !== 0 && (
                                                            <div className="shopping-cart">
                                                                <ul className="shopping-cart-items" style={suggestBook.length > 6 ? (
                                                                    {
                                                                        height: 386,
                                                                        overflowY: "scroll"
                                                                    }
                                                                ) : (
                                                                    {
                                                                        height: "100%",
                                                                        overflowY: "scroll"
                                                                    }
                                                                )}>
                                                                    {suggestBook.map((book_b, index) => {

                                                                        return (
                                                                            <li key={index} className="clearfix searchAutocomplete_item" style={{ cursor: 'pointer' }} onClick={() => ItemClick("/Book/" + book_b.booksid)}>
                                                                                <img style={{
                                                                                    width: 70,
                                                                                    height: 70
                                                                                }} src={"http://localhost:9999/image/" + book_b.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="item1" />
                                                                                <span className="item-name">{book_b.bookname}</span>
                                                                                <span className="item-price">${book_b.bookprice}</span>
                                                                                <span className="item-quantity">By : {book_b.authorid.authorname}</span>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        )}
                                                        {suggestBook.length === 0 && (
                                                            <div className="shopping-cart">
                                                                No book have been found
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        </Box>
                                    </ClickAwayListener>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MiddleBar;