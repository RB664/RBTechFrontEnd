import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'homepage',
    component: () => import('../views/Homepage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },{
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/allproducts',
    name: 'allproducts',
    component: () => import('../views/AllProducts.vue')
  },
  {
    path: '/allproducts/:id',
    name: 'singleproduct',
    component: () => import('../views/SingleProduct.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import('../views/Userprofile.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
