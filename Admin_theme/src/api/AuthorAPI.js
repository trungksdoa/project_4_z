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

const RequestEdit = (url, id) => {
    const object_user = {};
    const RequestEditer = new Promise((resolve, reject) => {
        axiosClient.put(url)
            .then(response => {
                console.log(response)
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
    const Actions = "Author ID " + id + " has been updated"
    toast.promise(
        RequestEditer,
        {
            pending: 'Wating...',
            success: Actions,
            error: 'Change fails 🤯'
        }
    )
}

const RequestDelete = (url) => {
    const object_user = {};
    const DeleteAction = new Promise((resolve, reject) => {
        axiosClient.delete(url)
            .then(response => {
                console.log(response)
                object_user.code = response.code;
                object_user.msg = response.msg;
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
        DeleteAction,
        {
            pending: 'Wating...',
            success: 'Delete successfully',
            error: 'Delete fails 🤯'
        }
    )
}

const RequestCreate = (url) => {
    const object_user = {};
    const RequestEditer = new Promise((resolve, reject) => {
        axiosClient.put(url)
            .then(response => {
                console.log(response)
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
    toast.promise(
        RequestEditer,
        {
            pending: 'Wating...',
            success: "Registed new author success",
            error: 'Change fails 🤯'
        }
    )
}

const AuthorAPI = {
    getAll: () => {
        const url = 'authors/findAll';
        return RequestAll(url);
    },
    Edit: (id) => {
        const url = "authors/update/" + id;
        return RequestEdit(url, id)
    },
    Delete: (id) => {
        const url = "authors/delete/" + id;
        return RequestDelete(url)
    },
    Create: (id) => {
        const url = "authors";
        return RequestCreate(url)
    }
}

export default AuthorAPI