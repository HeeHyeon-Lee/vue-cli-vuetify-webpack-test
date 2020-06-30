import Vue from 'vue';
import vuetify from "./vuetify";
// import 'vuetify/dist/vuetify.min.css'
// import router from './router'

import App from './App.vue'
// import './assets/_main.scss';
// console.log(vuetify);
new Vue({
  // router,
  vuetify,
  render: h => h(App),
  el: "#app"
})