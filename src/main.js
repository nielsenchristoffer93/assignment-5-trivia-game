import Vue from 'vue'
import StartScreen from './StartScreen.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(StartScreen),
}).$mount('#StartScreen')
