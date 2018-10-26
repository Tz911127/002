// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import axios from "axios";
import Qs from "qs";
// import Toast from 'muse-ui-toast';
import 'muse-ui/dist/muse-ui.css';


Vue.config.productionTip = false

Vue.use(MuseUI)
// Vue.use(Toast);

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs

new Vue({
  el: '#app',
  router,
  // render (h) {
  //   return h('', {}, '');
  // },
  components: {
    App
  },
  template: '<App/>'
})
