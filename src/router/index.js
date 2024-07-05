import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Maincard from '@/components/MainSections/Maincard.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Maincard
    },
    {
      path: '/api',
      name: 'Api',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/MainSections/MainTeg.vue')
    },
    {
      path: '/single/:idMeal',
      name: 'Single',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/MainSections/MainSingle.vue')
    }
  ]
})

export default router
