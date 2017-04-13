import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Vuetify from 'vuetify'
import Card from '@/components/Card'
import Youtube from '@/components/Youtube'


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
      path: '/youtube',
      name: 'youtube',
      component: Youtube
    }
  ]
})
