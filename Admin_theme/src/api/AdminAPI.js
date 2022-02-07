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

const RequestFindOne = (url) => {
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
                    console.log(error.response);
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

const RequestLogin = (url,body) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.post(url,body)
            .then(response => {
                console.log(response)
                object_user.code = response.code;
                object_user.data = response.data_object;
                object_user.msg = response.msg;
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




const AdminAPI = {
    getAll: () => {
        const url = 'admin/findAll';
        return RequestAll(url);
    },
    findOne: (id) => {
        const url = 'admin/' + id;
        return RequestFindOne(url);
    },
    Create: (data) => {
        const url = 'admin/Create';
        const body = {
            adminemail: data.adminemail,
            adminpassword: data.adminpassword,
            roles: data.roles
        }
        return RequestCreate(url, body);
    },
    Edit: (id, data) => {
        const url = 'admin/update/' + id;
        const body = {
            adminpassword: data.adminpassword,
            roles: data.roles
        }
        return RequestEdit(url, body);
    },
    Delete: (id) => {
        const url = 'admin/delete/' + id;
        return RequestDelete(url);
    },
    Login: (data) => {
        const url = 'login';
        const body = {
            adminemail: data.adminemail,
            adminpassword: data.adminpassword,
        }
        return RequestLogin(url,body);
    },
}

export default AdminAPI