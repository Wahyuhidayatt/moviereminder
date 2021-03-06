// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import ElementUI from 'element-ui'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import VueYouTubeEmbed from 'vue-youtube-embed'
import 'element-ui/lib/theme-default/index.css'


Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(VueYouTubeEmbed)
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
