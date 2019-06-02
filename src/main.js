import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as Vue2Leaflet from 'vue2-leaflet' // VALID
import "leaflet/dist/leaflet.css"
import VueGoogleCharts from 'vue-google-charts'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


Vue.use(VueGoogleCharts)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

delete L.Icon.Default.prototype._getIconUrl
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
