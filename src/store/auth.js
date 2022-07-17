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
            localStorage.setItem('access_token', JSON.stringify(response.accessToken))
            localStorage.setItem('refresh_token', JSON.stringify(response.refreshToken))

            setInterval(() => {
                
            }, (2500 * 10));


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
    // logout({commit}){

    // }
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