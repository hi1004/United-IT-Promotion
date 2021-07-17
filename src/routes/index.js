import { createRouter, createWebHashHistory } from 'vue-router'
import HomeKr from './HomeKr'
import HomeJp from './HomeJp'
import Contact from './Contact'
import NotFound from './NotFound'


export default createRouter({
  
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
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
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
})
