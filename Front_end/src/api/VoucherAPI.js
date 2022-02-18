import axiosClient from "./axiosClient";
import { toast } from 'react-toastify';
const RequestCheck = (url, body) => {
    const object_user = {};
    return new Promise((resolve, reject) => {
        axiosClient.get(url, body)
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
const VoucherAPI = {
    Check: (voucher) => {
        const url = "voucher/check/" + voucher;
        return RequestCheck(url);
    }
}

export default VoucherAPI