import axiosClient from "./axiosClient";


const findOne = (haystack, arr) => {
    return arr.some(v => haystack.includes(v));
};

const RoleA_Require_admin = ["owner"];

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
const RequestStatusCustomer = (url) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.get(url)
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

const customApi = {
    getAll: () => {
        const url = 'user/findAll';
        return RequestAll(url);
    },
    ban: (id, reason) => {
        const url = 'ban/user/' + id + '/' + reason;
        return RequestStatusCustomer(url);
    },
    Unban: (id) => {
        const url = 'Unban/user/' + id;
        return RequestStatusCustomer(url);
    }
}

export default customApi