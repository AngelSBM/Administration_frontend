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

export const createClient = async (body) => {

    try {
        const response = await axiosInstance.post(`Client/new`, body)
        return response.data;
    } catch (error) {
        console.log('ERROR FROM API', error);
        throw new Error(error)
    }

}



export const deleteClient = async (id) => {

    try {
        const response = await axiosInstance.delete(`Client/Delete?id=${id}`)
        return response.data;
    } catch (error) {
        console.log('ERROR FROM API', error);
        throw new Error(error)
    }

}
