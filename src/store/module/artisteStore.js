import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state = {
    listArtiste : [],
    err : null,
};
const mutations= {
    setListArtiste(state,list){
        list.splice(6,21);
        state.listArtiste = list;
    },
};


export default {
    namespaced: true,
    state,
    mutations,
};
