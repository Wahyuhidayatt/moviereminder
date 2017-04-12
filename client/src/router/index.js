import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Vuetify from 'vuetify'
import Card from '@/components/Card'
import Header from '@/components/header'


Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
  
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
