import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Ja from './Ja'


export default createRouter({
  
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/ja',
      component: Ja
    }
  ],
})
