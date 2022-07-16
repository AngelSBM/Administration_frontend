import axiosInstance from "./axiosInstance";


export const getClients = async () => {

    try {
        const response = await axiosInstance.post(`Client/GetAll`)
        return response.data;
    } catch (error) {
        console.log('ERROR FROM API', error);
        throw new Error(error)
    }

}
