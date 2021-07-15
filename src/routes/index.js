import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Ja from './Ja'
import Java from './Java'


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
    },
    {
      path: '/java',
      component: Java
    }
  ],
})
