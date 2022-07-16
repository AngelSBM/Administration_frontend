import axiosInstance from "./axiosInstance";
import axios from "axios";
import * as names from "@/api/names";

export const login = async (body) => {

    try {
        console.log('BODYREQUESRT', body);     
        const response = await axios.post(`${names.BASE_URL}Auth/Login`, body)
        return response.data;
    } catch (error) {
        console.log('ERROR FROM API', error);
        throw new Error(error)
    }

}


export const register = async (body) => {

    try {
        console.log('REQUESTTTTTTTTTTTTTTT', body);
        const response = await axios.post(`${names.BASE_URL}Auth/Register`, body)
        console.log(response);
        return response.data;
    } catch (error) {
        console.log('ERRORRRR', error);
    }

}