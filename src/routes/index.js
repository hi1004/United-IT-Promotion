import { createRouter, createWebHashHistory } from 'vue-router'
import HomeKr from './HomeKr'
import HomeJp from './HomeJp'
import Contact from './Contact'


export default createRouter({
  
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeKr
    },
    {
      path: '/jp',
      component: HomeJp
    },
    {
      path: '/contact',
      component: Contact
    }
  ],
})
