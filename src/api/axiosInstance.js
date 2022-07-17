import axios from "axios";
import * as names from './names'
import * as apiAuth from "@/api/auth";

const axiosInstance = axios.create({
    baseURL: names.BASE_URL
})


axiosInstance.interceptors.request.use( async (request) => {

    await validateTokenNotExpired();

    const token = JSON.parse(localStorage.getItem('access_token')) || '';


    request.headers.authorization = `bearer ${token}`

    return request;
} )


const validateTokenNotExpired = async () => {

    const token = JSON.parse(localStorage.getItem('access_token')) || '';
    const tokenPayload = parseJwt(token);

    if (Date.now() >= tokenPayload.exp * 1000) {
        console.log('TOKEN EXPIRED');
        
        try {
            const token = JSON.parse(localStorage.getItem('refresh_token')) || '';

            const response = await apiAuth.refreshSession(token)
            console.log(response);
            localStorage.setItem('access_token', JSON.stringify(response.accessToken))
            localStorage.setItem('refresh_token', JSON.stringify(response.refreshToken))
        } catch (error) {
            
        }

      }

      return;

};

const  parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}


export default axiosInstance;