import * as api from '@/api/auth'


const state = {

}

const getters = {
    
}

const actions = {
    async login({commit}, { email, password }){

        const bodyRequest = {
            Email: email,
            Password: password
        }

        try {
            const response = await api.login(bodyRequest);
            console.log(response);
            localStorage.setItem('access_token', JSON.stringify(response.accessToken))

        } catch (error) {
            console.log('ERROR FROM STORE', error);
        }

    },
    async register({commit}, { name, email, password }){

        const bodyRequest = {
            Name: name,
            Email: email,
            Password: password
        }

        try {
            const response = await api.register(bodyRequest);
            console.log(response);

        } catch (error) {
            console.log(error);
        }

    },
}

const mutations = {
    
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}