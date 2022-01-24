import axiosClient from "./axiosClient";


const findOne = (haystack, arr) => {
    return arr.some(v => haystack.includes(v));
};

const RoleA_Require_admin = ["owner"];

const RequestAll = (url, roles) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.get(url)
            .then(response => {
                object_user.code = response.status;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
                resolve(response)
            })
            .catch((error) => {
                console.log(error.toJSON().message)
                if (error.toJSON().message === 'Network Error') {
                    object_user.status = 511;
                    object_user.msg = "Network Authentication Required";
                } else {
                    object_user.status = error.response.status;
                    console.log(error.response);
                    object_user.msg = error.response.data.msg;
                }
                reject(error)
            })
    })
    // const isTrue = roles.some(v => RoleA_Require_admin.includes(v))
    // if (!isTrue) {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             resolve({
    //                 msg: "No permissions to access",
    //                 code: 403,
    //                 data: "Forbidden",
    //             })
    //         } catch (error) {
    //             console.log(error);
    //         }

    //     })
    // } else {

    // }
}

const customApi = {
    getAll: (roles) => {
        const url = 'user/findAll';
        return RequestAll(url, roles);
    }
}

export default customApi