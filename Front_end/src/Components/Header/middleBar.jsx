import React, { useEffect, useState } from 'react';
import settingAPi from '../../api/SettingAPI';
import BookAPI from '../../api/BookAPI.js';
import { useCookies } from 'react-cookie';
import Basket from './Basket.jsx';
import WishlistAPI from '../../api/WishlistAPI';
const MiddleBar = () => {
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
    const[bookList,setbookList] = useState([]);
    useEffect(()=>{
		async function fetchbookList(){
			await BookAPI.FindAll().then(result => {
				setbookList(result.data)
			  }).catch(err => {
				alert(err.msg)
			  })
		}
		fetchbookList();
	},[])
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
                                            return (
                                                <div className="" key={index}>
                                                    <div className="tg-minicarproduct">
                                                        <figure>
                                                            <img src="images/products/img-01.jpg" alt="image description" />
                                                        </figure>
                                                        <div className="tg-minicarproductdata">
                                                            <h5><a>{bookname}</a></h5>
                                                            <h6><a>${formatToCurrency(bookprice)}</a></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className="tg-description"><p>No products were added to the wishlist!</p></div>
                                    )}
                                </div>
                            </div>
                            <Basket></Basket>
                        </div>
                        <div className="tg-searchbox">
                            <form className="tg-formtheme tg-formsearch">
                                <fieldset>
                                    <input type="text" name="search" className="typeahead form-control" placeholder="Search by title, author, keyword, ISBN..." />
                                    <button type="submit"><i className="icon-magnifier" /></button>
                                </fieldset>
                                <a href="#!">+  Advanced Search</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MiddleBar;