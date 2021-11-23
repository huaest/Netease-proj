import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Home from '@/views/home'
import Play from '@/views/play'
import Search from '@/views/search'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: '/layout',
    component: Layout,
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: 'search',
        component: Search,
        meta: {
          title: '搜索',
        },
      },
    ],
  },
  {
    path: '/play',
    component: Play,
  },
]
const router = new VueRouter({
  routes,
})

export default router
