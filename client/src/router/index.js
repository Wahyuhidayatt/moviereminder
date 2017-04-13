import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Vuetify from 'vuetify'
import Card from '@/components/Card'
import Youtube from '@/components/Youtube'
import Page from '@/components/PageReview'
import Main from '@/components/MainApp'
import FormRequest from '@/components/FormRequest'
import FormRemind from '@/components/FormRemind'
import Theater from '@/components/theater'
import Headernav from '@/components/Headernav'


Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
            {
              path: '/',
              name : 'Main',
              component : Main
            },
            {
              path: '/film/:title',
              name : 'Review',
              path: '/card',
              name : 'Card',
              component : Card
            },
            {
              path: '/youtube',
              name: 'youtube',
              component: Youtube
            },
            {
              path: '/form',
              name : 'Form',
              component : FormRequest
            },
            {
              path: '/theater',
              name : 'Theater',
              component : Theater
            },
            {
              path: '/headernav',
              name : 'Headernav',
              component : Headernav
            }
          ]
        })
