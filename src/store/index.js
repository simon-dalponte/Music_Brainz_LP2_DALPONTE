import Vue from 'vue';
import Vuex from 'vuex';
import ArtistStore from './module/artisteStore'
import AlbumStore from './module/albumStore'
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        artistStore: ArtistStore,
        albumStore: AlbumStore
    },
});
