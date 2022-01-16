import axiosClient from "./axiosClient";

const Auths = {
    login:(userEmail,userPassword) =>{
        const url = 'user/login';
        return axiosClient.post(url,{userEmail:userEmail,userPassword:userPassword});
    },
    register:(userEmail,userPassword,userPhone,UserBirthday) =>{
        const url = 'user/register';
        return axiosClient.post(url,{userEmail:userEmail,userPassword:userPassword,userPhone:userPhone,UserBirthday:UserBirthday});
    }
}

export default Auths