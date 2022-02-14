import React from 'react';
import { useCookies } from 'react-cookie';
import WishlistAPI from '../../api/WishlistAPI.js';
const AddToWishlist = {
    AddToWishlist: async (booksId) => {
        const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
        const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
        if (auth) {
            return await WishlistAPI.Save(cookies.loggin.userID, booksId).then((wishlist) => {
                return "success"
                // toast(wishlist.msg)
                // setAction(new Date().toString());
            }).catch((error) => {
                return error.msg;
            })
        } else {
            return "You are not logged in";
        }
    }
}

export default AddToWishlist;