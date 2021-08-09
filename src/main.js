import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
//import StartScreen from './views/StartScreen.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#App')
