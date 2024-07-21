import { createStore } from 'vuex';

const store = new createStore({
    state() {
        return {
        name: "",
        };
    },
    getters: {
        GET_NAME(state){
            return state.name;
        }
    },
    mutations: {
        M_CHAHGE_NAME(state, payload) {
        state.name = payload;
        }
    },
    actions: {
        A_GET_LOCALSTORAGE({ commit }) {
        const name = localStorage.getItem('name');
        commit('M_CHAHGE_NAME', name);
        },
        A_SET_LOCALSTORAGE({ commit }, payload) {
        localStorage.name = payload;
        commit('M_CHAHGE_NAME', payload);
        },
    }
});

export default store;