import axiosClient from "./axiosClient";
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
const RequestSave = (url, body) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.post(url, body)
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
const RequestUpdate = (url, body) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.put(url, body)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
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
const RequestDelete = (url) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.delete(url)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
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
const VoucherAPI = {
    getAll: () => {
        const url = 'voucher/findAll';
        return RequestAll(url);
    },
    Deleted: (id) => {
        const url = 'voucher/delete/' + id;
        console.log(url);
        return RequestDelete(url);
    },
    Save: (body) => {
        const url = 'voucher/';
        return RequestSave(url, body);
    },
    Update: (voucherid,body) => {
        const url = 'voucher/update/'+voucherid;
        return RequestUpdate(url, body);
    },
}

export default VoucherAPI