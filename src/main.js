import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;
import router from './router';
import store from './store'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
