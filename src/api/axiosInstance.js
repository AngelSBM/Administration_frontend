import axios from "axios";
import * as names from './names'

const axiosInstance = axios.create({
    baseURL: names.BASE_URL
})


axiosInstance.interceptors.request.use( (request) => {



    const token = JSON.parse(localStorage.getItem('access_token')) || '';


    request.headers.authorization = `bearer ${token}`

    return request;
} )



export default axiosInstance;