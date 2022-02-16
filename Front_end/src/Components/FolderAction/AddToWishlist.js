import React from 'react';
import WishlistAPI from '../../api/WishlistAPI.js';
const AddToWishlist = {
    AddToWishlist: async (cookies,booksId) => {
        const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
        if (auth) {
            return await WishlistAPI.Save(cookies.loggin.userID, booksId)
        }
    }
}

export default AddToWishlist;