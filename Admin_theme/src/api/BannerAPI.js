import axiosClient from "./axiosClient";
const RequestBanner = (url, type) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.get(url)
            .then(response => {
                object_user.code = response.code;
                object_user.msg = response.msg;
                object_user.data = type == "arr" ? response.data_array : response.data_object;
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
                    object_user.msg = error.response.data.msg;
                }
                reject(object_user)
            })
    })
}
const RequestSaveFormData = (url, body) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.post(url, body, {
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
const BannerAPi = {
    getBanner: () => {
        const url = 'banners';
        return RequestBanner(url, "arr");
    },
    getBannerById: (id) => {
        const url = 'banners/' + id;
        return RequestBanner(url, "obj");
    },
    upload: (id, form) => {
        const url = 'banners/image/update/' + id;
        return RequestImageUpdate(url, form);
    },
    delete: (id) => {
        const url = 'banner/' + id;
        return RequestDelete(url);
    },
    save: (form, id) => {
        const url = 'banners/' + id;
        const requestBody = {
            bannerImage: form.bannerImage,
            bannerTitle: form.bannerTitle,
            bannerContent: form.bannerContent
        }
        return RequestSave(url, requestBody);
    },
    SaveFormData: (form, id) => {
        const url = 'banners/';
        return RequestSaveFormData(url, form);
    }
}

export default BannerAPi