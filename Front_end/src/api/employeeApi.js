import axiosClient from "./axiosClient";

const employeeApi = {
    getAll: () => {
        const url = 'user/getall';
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = `/g/${id}`;
        return axiosClient.get(url);
    },
    login:(userEmail,userPassword) =>{
        const url = 'user/login';
        return axiosClient.post(url,{userEmail:userEmail,userPassword:userPassword});
    }
}

export default employeeApi