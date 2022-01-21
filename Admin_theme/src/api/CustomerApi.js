import axiosClient from "./axiosClient";

const customApi = {
    getAll: () => {
        const url = 'user/findAll';
        return axiosClient.get(url);
    }
}

export default customApi