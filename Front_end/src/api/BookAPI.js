import axiosClient from "./axiosClient";
let url = "";
const object_user = {};
const RequestAll = (url) => {
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
const RequestfindOne = (url) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.get(url)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
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
const RequestfindPdetails = (url) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.get(url)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
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


const RequestSameBook = (url,array) => {
    const object_user = {};
    var headers = {
        'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
    };
    return new Promise((resolve, reject) => {
        axiosClient.post(url,array)
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

const Book = {
    FindAll: () => {
        url = 'book/findAll';
        return RequestAll(url)
    },
    FindOne: (id) => {
        url = 'book/find/' + id;
        return RequestfindOne(url);
    },
    LoadByAuthor: (id) => {
        url = 'book/findAll/author/'+id;
        return RequestAll(url);
    },
    findPdetails: (id) =>{
        url ='/book/findOne/'+id;
        return RequestfindPdetails(url);
    },
    findByCatagory: (id) =>{
        url ='/book/category/find/'+id;
        return RequestAll(url);
    },
    getSameBook: (array) =>{
        url ='/book/same/';
        return RequestSameBook(url,array);
    },
    gettoporder: () =>{
        url ='/book/findtoporder';
        return RequestAll(url);
    },
    gettopreleasedate: () =>{
        url ='/book/topreleasedate';
        return RequestAll(url);
    },
    gettopratting: () =>{
        url ='/book/topratting';
        return RequestAll(url);
    }
}
export default Book