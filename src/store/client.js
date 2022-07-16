import * as api from '@/api/client'


const state = {
    clients: [],
    selectedClient: null
}

const getters = {
    clients: (state) => state.clients,
    selectedClient: state => state.selectedClient
}

const actions = {
    async getClients({commit}){
        const response = await api.getClients();
        commit('setClients', response)
    },
    selectClient({commit}, client){
        commit('selectClient', client)
    },
    async createClient({ commit }, clientInfo){
        const response = await api.createClient(clientInfo);
        commit('addNewClient', response);
    }
}

const mutations = {
    setClients(state, clients){
        state.clients = clients
    },
    selectClient(state, client){
        state.selectedClient = client;
    },
    addNewClient(state, createdClient){
        state.clients.push(createdClient);
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}