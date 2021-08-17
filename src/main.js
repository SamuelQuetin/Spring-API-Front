import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuetify from './plugins/vuetify';
import VuetifyDialog from "vuetify-dialog";
import store from "./store";

Vue.config.productionTip = false

new Vue({
  vuetify,
  VuetifyDialog,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
