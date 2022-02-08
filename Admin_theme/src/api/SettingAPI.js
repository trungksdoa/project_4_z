import axiosClient from "./axiosClient";
const RequestSetting = (url) => {
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
const settingAPi = {
    getSetting: () => {
        const url = 'web/1';
        return RequestSetting(url);
    },
    upload: (form) => {
        const url = 'web/image/update/1';
        return RequestImageUpdate(url, form);
    },
    save: (form) => {
        const url = 'web/update/';
        const requestBody = {
            address:form.address,
            phonenum:form.phonenum,
            timeservice:form.timeservice,
            email:form.email
        }
        return RequestSave(url, requestBody);
    }
}

export default settingAPi