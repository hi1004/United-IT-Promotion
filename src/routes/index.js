import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Jp from './Jp'
import About from './About'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/jp',
      component: Jp
    },
    {
      path: '/about',
      component: About
    }
  ],
})