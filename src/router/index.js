import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
//import Calculator from '../views/Calculator.vue'
import KakaoLogin from '../views/KakaoLogin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about |',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component:DataBinding 
  },
  {
    path: '/databinding2',
    name: 'DataBinding2',
    component:DataBindingList2 
  },
  {
    path: '/component',
    name: 'NestedComponent',
    component:NestedComponent 
  }  ,
  {
    path: '/Parentcomponent',
    name: 'ParentComponent',
    component:ParentComponent 
  }
  ,
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component:KakaoLogin 
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
