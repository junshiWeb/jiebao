import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
let Test = () => import('../views/Test')
let Login = () => import('../views/login/Login')
let Manage = () => import('../views/home/Manage')
let Home = () => import('../views/home/Home')
let AddShop = () => import('../views/home/AddShop')
// 费用报销
let Fybx = () => import('../views/fybx/index')
// let Error401 = () => import('../views/error/401')
let Error404 = () => import('../views/error/404')


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    children: [{
      path: '',
      name: 'Home',
      component: Home,
      meta: []
    }, {
      path: '/addshop',
      name: 'AddShop',
      component: AddShop,
      meta: ['添加数据', '添加商铺']
    }, {
      path: '/fybx',
      name: 'fybx',
      component: Fybx,
      meta: ['费用报销']
    }]
  },
  // {
  //   path: '/fybx',
  //   name: 'fybx',
  //   component: Fybx,
  //   meta: ['费用报销']
  // },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/error',
    name: 'Error',
  },
  {
    path: '*',
    name: '404',
    component: Error404

  }

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
