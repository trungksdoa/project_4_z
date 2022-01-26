import axiosClient from "./axiosClient";
let url = "";
const object_user = {};
const RequestLogin = (url, userEmail, userPassword) => {
    return new Promise((resolve, reject) => {
        axiosClient.post(url, { userEmail: userEmail, userPassword: userPassword })
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
                }else{
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
            userEmail: props.Emails,
            userPassword: props.Pword,
            phone: props.Pnum,
            birthday: props.birthday
        })
            .then(response => {
                //Còn xem lại
                console.log(response)
                object_user.status = 200;
                object_user.msg = response.msg;
                if (response.data_object !== undefined) {
                    object_user.data = response.data_object;
                }
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
        // const res = await axiosClient.post(url, {
        //     first_name: props.Fname,
        //     last_name: props.Lname,
        //     userEmail: props.Emails,
        //     userPassword: props.Pword,
        //     phone: props.Pnum,
        //     birthday: props.birthday
        // });
        // console.log(res);
        return RequestRegister(url, props);
    },
    setActive: async (id) => {
        url = 'user/setActive/' + id;

        const res = await axiosClient.get(url, {});

        return res;
    }
}

export default Auths