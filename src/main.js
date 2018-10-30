// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import axios from "axios";
import Qs from "qs";
import Toast from 'muse-ui-toast';
import 'muse-ui/dist/muse-ui.css';


Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(Toast);
// Vue.use(Toast, config)
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;


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
// export default {
//   position: 'bottom', // 弹出的位置
//   time: 2000, // 显示的时长
//   closeIcon: 'close', // 关闭的图标
//   close: false, // 是否显示关闭按钮
//   successIcon: 'check_circle', // 成功信息图标
//   infoIcon: 'info', // 信息信息图标
//   warningIcon: 'priority_high', // 提醒信息图标
//   errorIcon: 'warning' // 错误信息图标
// };
