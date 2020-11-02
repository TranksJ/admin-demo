import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// 首页
import IndexPage from '../components/Indexpage.vue'
// 库房设置
import Storehouse from '../components/Storehouse.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  }, {
    path: '/',
    component: Home,
    children:[
      {
        path:'',
        component:IndexPage
      },
      {
        path:'storehouse',
        component:Storehouse
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
