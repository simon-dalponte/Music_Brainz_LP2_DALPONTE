import VueRouter from 'vue-router'
import Vue from 'vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component() {
            return import ('../components/Description/Description.vue');
        }
    },
    {
      path: '/artists',
      name: 'searchArtist',
      component() {
          return import ('../components/SearchArtist/SearchArtist.vue');
      }
    },
    {
        path: '/albums',
        name: 'searchAlbum',
        component() {
            return import ('../components/SearchAlbum/SearchAlbum.vue');
        }
    },
    {
        path: '/albumsPopulaire',
        name: 'popularAlbum',
        component() {
            return import ('../components/PopularAlbum/PopularAlbum.vue');
        }
    },
    {
        path: '/artistsPopulaire',
        name: 'popularArtists',
        component() {
            return import ('../components/PopularArtist/PopularArtist.vue');
        }
    },
];

const router  = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
