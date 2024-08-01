import { createStore } from 'vuex';

const store = new createStore({
    state() {
        return {
        name: "Anton",
        now: [{
                type: "Now",
                title: "First",
                text: "FirstText"
            },
            {
                type: "Now",
                title: "Second",
                text: "SecondText"
            }],
        complited: [
            {
                type: "Complite",
                title: "Second",
                text: "SecondText"
            }
        ],
        cancel: [
            {
                type: "Cancel",
                title: "Second",
                text: "SecondText"
            }
        ]
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
        },
        M_CHANGE_NOW(state, payload){
            state.now.push(payload)
        },
        M_SET_NOW(state, payload){
            state.now = payload;
        },
        M_DELET_NOW(state, payload){
            state.now.splice(payload,1);
        },
        M_CHANGE_COMPLITED(state, payload){
            state.complited.push(payload);
        },
        M_DELET_COMPLITED(state, payload){
            state.complited.splice(payload,1);
        },
        M_CHANGE_CANCEL(state, payload){
            state.cancel.push(payload);
        },
        M_DELET_CANCEL(state, payload){
            state.cancel.splice(payload,1);
        }
    },
    actions: {
        A_GET_LOCALSTORAGE({ commit }) {
            const name = localStorage.getItem('name');
            commit('M_CHAHGE_NAME', name);
        },
        A_SET_LOCALSTORAGE({ commit }, payload) {
            if(localStorage?.now){
                const data = JSON.parse(localStorage.now);
                data.push(payload);
                localStorage.now = JSON.stringify(data);
            }else{
                localStorage.now = JSON.stringify([payload]);
            }
            commit('M_CHANGE_NOW', payload);
        },
        // A_GET_LS({ commit }){
        //     const data = JSON.parse(localStorage.now);
        //     commit('M_SET_NOW', data);
        // },                                                   ПОСЛЕ ЧИСТКИ LS ЭТО СЛОМАЛОСЬ ):)
        A_CHANGE_TASK_COMPLITED({ commit }, payload){
            if(localStorage?.complited){
                const data = JSON.parse(localStorage.complited);
                data.push(payload);
                localStorage.complited = JSON.stringify(data);
            }else{
                localStorage.complited = JSON.stringify([payload]);
            }
            console.log(payload.id);
            commit('M_DELET_NOW', payload.id);
            commit('M_CHANGE_COMPLITED', payload);
        },
        A_CHANGE_TASK_CANCEL({ commit }, payload){
            if(localStorage?.cancel){
                const data = JSON.parse(localStorage.cancel);
                data.push(payload);
                localStorage.cancel = JSON.stringify(data);
            }else{
                localStorage.cancel = JSON.stringify([payload]);
            }
            console.log(payload.id);
            commit('M_DELET_NOW', payload.id);
            commit('M_CHANGE_CANCEL', payload);
        },
        A_RETURN_TASK({ commit }, payload){
            if(payload.type == 'Complite'){
                payload.type = 'Now';
                if(localStorage?.now){
                    const data = JSON.parse(localStorage.now);
                    data.push(payload);
                    localStorage.now = JSON.stringify(data);
                }else{
                    localStorage.now = JSON.stringify([payload]);
                }

                commit('M_CHANGE_NOW', payload);
                commit('M_DELET_COMPLITED', payload.id)
            } else{
                payload.type = 'Now';
                if(localStorage?.now){
                    const data = JSON.parse(localStorage.now);
                    data.push(payload);
                    localStorage.now = JSON.stringify(data);
                }else{
                    localStorage.now = JSON.stringify([payload]);
                }
                commit('M_CHANGE_NOW', payload);
                commit('M_DELET_CANCEL', payload.id);
            }
        },
        A_SWAP_STATUS({ commit }, payload){
            if(payload.type == 'Complite'){
                payload.type = 'Cancel';
                if(localStorage?.cancel){
                    const data = JSON.parse(localStorage.cancel);
                    data.push(payload);
                    localStorage.cancel = JSON.stringify(data);
                }else{
                    localStorage.cancel = JSON.stringify([payload]);
                }
                commit('M_CHANGE_CANCEL', payload);
                commit('M_DELET_COMPLITED', payload.id);
            }else{
                payload.type = 'Complite';
                if(localStorage?.complited){
                    const data = JSON.parse(localStorage.complited);
                    data.push(payload);
                    localStorage.complited = JSON.stringify(data);
                }else{
                    localStorage.complited = JSON.stringify([payload]);
                }
                commit('M_CHANGE_COMPLITED', payload);
                commit('M_DELET_CANCEL', payload.id);
            }
        }
    }
});

export default store;



                    // ПОСЛЕ ОЧИСТКИ LS СЛОМАЛОСЬ ДОБАВЛЕНИЕ... Я НЕ ПОНИМАТЬ WHY, PROBABLY ПОТОМУ ЧТО A_GET_LS DEAD? :(