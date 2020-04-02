import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('@/views/Home')
  // },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/views/List')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/components/Error')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
