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
const RequestStatus = (url) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.put(url)
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
const settingAPi = {
    getAll: () => {
        const url = 'orders/findAll';
        return RequestAll(url);
    },
    changeStatus: (id, status) => {
        const url = 'order/update/' + id + '/' + status + '';
        console.log(url);
        return RequestStatus(url);
    },
}

export default settingAPi