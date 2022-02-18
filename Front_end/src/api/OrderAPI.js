import axiosClient from "./axiosClient";
import { toast } from 'react-toastify';

const findOne = (haystack, arr) => {
    return arr.some(v => haystack.includes(v));
};
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
                    console.log(error.response);
                    object_user.msg = error.response.data.msg;
                }
                reject(object_user)
            })
    })
}
const RequestCreate = (url, formdata) => {
    const object_user = {};

    return new Promise((resolve, reject) => {
        axiosClient.post(url, formdata)
            .then(response => {
                console.log(response);
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

const OrderAPI = {
    getAll: () => {
        const url = '/orders/findAll';
        return RequestAll(url);
    },
    Create: (formdata) => {
        const url = "/orders/create";
        return RequestCreate(url, formdata)
    }
}

export default OrderAPI