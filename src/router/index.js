import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import checkNav from '@/components/checkNav'
import checkInfo from '@/components/checkInfo'
import addDomain from '@/components/addDomain'
import infoDetail from '@/components/infoDetail'
import navDetail from '@/components/navDetail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/checkNav',
      name: 'checkNav',
      component: checkNav
    },
    {
      path: '/checkInfo',
      name: 'checkInfo',
      component: checkInfo
    },
    {
      path: '/addDomain',
      name: 'addDomain',
      component: addDomain
    },
    {
      path: '/infoDetail',
      name: 'infoDetail',
      component: infoDetail
    },
    {
      path: '/navDetail',
      name: 'navDetail',
      component: navDetail
    }
  ]
})
