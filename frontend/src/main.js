import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueGoogleMaps, {
  load: {
    key : "AIzaSyAguiDif0KcXaNfpaOHSFVE5rdEqTd7f04",
    libraries: "places",
  },
});