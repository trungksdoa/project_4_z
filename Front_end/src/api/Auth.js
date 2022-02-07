import axiosClient from "./axiosClient";
import axios from 'axios';
let url = "";
const object_user = {};
const RequestLogin = (url, userEmail, userPassword) => {
    return new Promise((resolve, reject) => {
        axiosClient.post(url, {
            user_email: userEmail, password: userPassword
        })
            .then(response => {
                object_user.status = 200;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
                resolve(object_user)
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
                reject(object_user)
            })
    })
}
const RequestRegister = (url, props) => {
    return new Promise((resolve, reject) => {
        axiosClient.post(url, {
            first_name: props.Fname,
            last_name: props.Lname,
            user_email: props.Emails,
            password: props.Pword,
            phone: props.Pnum,
            birthday: props.birthday
        })
            .then(response => {
                //Còn xem lại
                console.log(response)
                object_user.status = 200;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
                resolve(object_user)
            })
            .catch((error) => {
                object_user.status = error.response.status;
                console.log(error.response);
                object_user.msg = error.response.data.msg;
                reject(object_user)
            })
    })
}
const RequestForget_pass = (url, user_email) => {
    return new Promise((resolve, reject) => {
        axiosClient.post(url, {
            user_email: user_email,
        })
            .then(response => {
                //Còn xem lại
                console.log(response)
                object_user.status = 200;
                object_user.msg = response.msg;
                object_user.data = response.data_object;
                resolve(object_user)
            })
            .catch((error) => {
                object_user.status = error.response.status;
                console.log(error.response);
                object_user.msg = error.response.data.msg;
                reject(object_user)
            })
    })
}

const Auths = {
    login: async (userEmail, userPassword) => {
        url = 'user/login';
        return RequestLogin(url, userEmail, userPassword)
    },
    register: async (props) => {
        url = 'user/register';
        return RequestRegister(url, props);
    },
    findByEmail: async (emails) => {
        url = 'user/forgetpassword/';
        return RequestForget_pass(url, emails);
    }
}

export default Auths