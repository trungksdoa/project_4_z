import axiosClient from "./axiosClient";
const RequestWishlist = (url) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.get(url)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
                object_user.data = response.data_object == undefined ? null : response.data_object;
                resolve(object_user)
            })
            .catch((error) => {
                if (error.toJSON().message === 'Network Error') {
                    object_user.status = 511;
                    object_user.msg = "Network Authentication Required";
                } else {
                    object_user.status = error.response.status;
                    object_user.msg = error.response.data.msg;
                }
                reject(object_user)
            })
    })
}
const RequestWishlists = (url) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.get(url)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
                object_user.data = response.data_array;
                resolve(object_user)
            })
            .catch((error) => {
                if (error.toJSON().message === 'Network Error') {
                    object_user.status = 511;
                    object_user.msg = "Network Authentication Required";
                } else {
                    object_user.status = error.response.status;
                    object_user.msg = error.response.data.msg;
                }
                reject(object_user)
            })
    })
}
const RequestSaveWishlish = (url, formdata) => {
    const object_user = {};

    return new Promise((resolve, reject) => {
        axiosClient.post(url, formdata)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
                resolve(object_user)
            })
            .catch((error) => {
                console.log(error.response);
                if (error.toJSON().message === 'Network Error') {
                    object_user.status = 511;
                    object_user.msg = "Network Authentication Required";
                } else {
                    object_user.status = error.response.status;
                    console.log(error.response);
                    object_user.msg = error.response.data.msg;
                }
                reject(object_user)
            })
    })
}

const RequestDelete = (url) => {
    const object_user = {};

    return new Promise((resolve, reject) => {
        axiosClient.delete(url)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
                resolve(object_user)
            })
            .catch((error) => {
                console.log(error.response);
                if (error.toJSON().message === 'Network Error') {
                    object_user.status = 511;
                    object_user.msg = "Network Authentication Required";
                } else {
                    object_user.status = error.response.status;
                    console.log(error.response);
                    object_user.msg = error.response.data.msg;
                }
                reject(object_user)
            })
    })
}
const WishlistAPI = {
    getAll: (id) => {
        const url = 'wishlist/findAll/' + id;
        return RequestWishlists(url);
    },
    getByBookId: (userId, bookId) => {
        const url = 'wishlist/findAll/' + userId + '/' + bookId + '/';
        return RequestWishlist(url);
    },
    Save: (userId,bookId) => {
        const url = 'wishlist/';
        const body = {
            "booksId":bookId,
            "userId":userId
        }
        return RequestSaveWishlish(url,body);
    },
    DeleteByBook: (wishlistId) => {
        const url = 'wishlist/delete/'+wishlistId;
        return RequestDelete(url);
    },
}

export default WishlistAPI