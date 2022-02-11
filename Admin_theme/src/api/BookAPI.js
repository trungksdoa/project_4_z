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

const RequestEdit = (url, formdata) => {
    const object_user = {};

    return new Promise((resolve, reject) => {
        axiosClient.put(url, formdata, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Access-Control-Allow-Origin': '*'
                }
            })
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

const RequestImageUpdate = (url, formdata) => {
    const object_user = {};

    return new Promise((resolve, reject) => {
        axiosClient.put(url, formdata, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Access-Control-Allow-Origin': '*'
                }
            })
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
                    console.log(error.response);
                    object_user.msg = error.response.data.msg;
                }
                reject(object_user)
            })
    })
}


const RequestCreate = (url, formdata) => {
    const object_user = {};

    const RequestCreate = new Promise((resolve, reject) => {
        axiosClient.post(url, formdata, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(response => {
                console.log(response)
                object_user.code = response.code;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
                console.log(object_user)
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
    toast.promise(
        RequestCreate, {
            pending: 'Wating...',
            success: 'Create successfully 😍😍😍😍',
            error: 'Create fails 🤯'
        }
    )
}

const BookAPI = {
    getAll: () => {
        const url = 'book/findAll';
        return RequestAll(url);
    },
    Edit: (id, formdata) => {
        const url = "book/update/" + id;
        return RequestEdit(url, formdata)
    },
    Delete: (id) => {
        const url = "book/delete/" + id;
        return RequestDelete(url)
    },
    Create: (formdata) => {
        const url = "book/create";
        return RequestCreate(url, formdata)
    },
    FindOne: (id) => {
        const url = "book/find/" + id;
        return RequestfindOne(url);
    },
    Update_Image: (id, formdata) => {
        const url = "book/image/update/" + id;
        return RequestImageUpdate(url, formdata)
    }
}

export default BookAPI