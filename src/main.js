import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
//import StartScreen from './views/StartScreen.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#App')
