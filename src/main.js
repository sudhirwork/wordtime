import Vue from 'vue'
import App from './App.vue'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.config.productionTip = false
Vue.use(VueMoment, {
  moment,
})

new Vue({
  render: h => h(App),
}).$mount('#app')
