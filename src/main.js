import BootstrapVue from 'bootstrap-vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faBars,
  faFilm,
  faTh,
  faChevronCircleLeft,
  faChevronCircleRight,
  faPlusCircle,
  faFilter,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(
  faSearch,
  faBars,
  faFilm,
  faTh,
  faChevronCircleLeft,
  faChevronCircleRight,
  faPlusCircle,
  faFilter,
  faCircle,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
