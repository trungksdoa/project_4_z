import axiosClient from "./axiosClient";
let url = "";
const object_user = {};
const Requestprofile = (url) => {
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

const RequestOrder = (url) => {
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

const RequestCreate = (url, body) => {
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
                console.log(error.response)
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

const RequestEdit = (url, body) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.put(url, body)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
                resolve(object_user)
            })
            .catch((error) => {
                console.log(error.response)
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
const Profiles = {
    findOne: (id) => {
        url = 'user/search/' + id;
        return Requestprofile(url)
    },
    Edit: (id, params) => {
        const body = {
            first_name: params.first_name,
            last_name: params.last_name,
            password: params.password,
            birthday: params.birthday,
            phone: params.phone
        }
        url = 'user/update/' + id;
        return RequestEdit(url, body)
    },
    OrderList: (id) => {
        url = 'orders/findAll/' + id;
        return RequestOrder(url)
    }
}
export default Profiles