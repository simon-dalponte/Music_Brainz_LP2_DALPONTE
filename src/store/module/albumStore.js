import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state = {
    listAlbum : null,
    err : null,
    tracks : null,
    img: null
};
const mutations= {
    setListAlbum(state,list){
        state.listAlbum = list;
    },
    setListTrack(state,list){
        state.tracks = list;
    },
    setImg(state,list){
        state.img = list;
    },
};




export default {
    namespaced: true,
    state,
    mutations,
};
