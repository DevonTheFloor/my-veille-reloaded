import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/userspage/myune/:login',
      name: 'myune',
      component: ()=> import ('../views/MyUne.vue')
    },
    {
      path: '/userspage/alire/:login',
      name: 'alire',
      component: () => import ('../views/ALire.vue')
    },
    {
      path: '/dashboard/:login',
      name: 'DashBoard',
      component: ()=> import ('../views/DashBoard.vue')
    }

  ]
})

export default router
