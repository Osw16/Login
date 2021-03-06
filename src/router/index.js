import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: () => import(/* webpackChunkName: "login" */ '../views/ResetPass.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ "../views/SignUp.vue")
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import(/* webpackChunkName: "policy" */ '../views/Policy.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
