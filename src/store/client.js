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
    },
    async updateClient({commit}, updatedClient){
        const response = await api.updateClient(updatedClient);
        commit('updateLocalClient', response)
    },
    async deleteClient({commit}, idClient){
        await api.deleteClient(idClient);
        commit('removeClient', idClient);
    },
    async deleteAddress({commit}, id){
        await api.deleteAddress(id);
    },
    purgeCompanieSession({commit}){
        commit('purgeSession')
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
    },
    updateLocalClient(state, updatedClient){
        const indexOfUpdatedClient = state.clients.findIndex(client => client.id == updatedClient.id);
        
        state.clients[indexOfUpdatedClient] = updatedClient;
    },
    removeClient(state, idClient){
        state.clients = state.clients.filter(client => client.id !== idClient);
    },
    purgeSession(state){
        state.clients = [];
        state.selectClient = null;   
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}