import axiosClient from "./axiosClient";
import { toast } from 'react-toastify';

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
                    console.log(error.response);
                    object_user.msg = error.response.data.msg;
                }
                reject(object_user)
            })
    })
}

const RequestChangeStatus = (url, id, status) => {
    const object_user = {};
    const requestStatus = new Promise((resolve, reject) => {
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
    const Actions = status === 1 ? "Review ID " + id + " has been shown" : "Review ID " + id + " has been hidden";
    toast.promise(
        requestStatus,
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


const ReviewsAPI = {
    getAll: () => {
        const url = 'reviews/findAll';
        return RequestAll(url);
    },
    ChangeStatus: (id, status) => {
        const url = "reviews/status/" + id + "/" + status + "";
        return RequestChangeStatus(url, id, status)
    },
    Delete: (id) => {
        const url = "reviews/delete/" + id;
        return RequestDelete(url)
    }
}

export default ReviewsAPI