async function handleAddWishlist(auth,userID,booksid) {
    if (auth) {
        await WishlistAPI.Save(userID, booksid).then((wishlist) => {
            toast(wishlist.msg)
         //   setAction(new Date().toString());
        }).catch((error) => {
            alert(error.msg);
        })
    } else {
        alert("You are not logged in")
    }
}