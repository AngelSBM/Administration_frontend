import * as api from "@/api/auth";

const isAuthenticated = () => {

    let response = false;

    const token = JSON.parse(localStorage.getItem('refresh_token')) ;
    if(token !== undefined && token !== null ){
        response = true
    }

    return response;

}

export default isAuthenticated;



