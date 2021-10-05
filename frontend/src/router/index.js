import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Login.vue')
  },
  {
    path: '/join_agree',
    name: 'join_agree',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Join_agree.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Movie.vue')
  },

  {
    path: '/reserve',
    name: 'reserve',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Reserve.vue')
  },
  {
    path: '/movie_be_schedule',
    name: 'movie_be_schedule',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Movie_be_schedule.vue')
  },
  {
    path: '/movie_chart',
    name: 'movie_chart',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Movie_chart')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import(/* webpackChunkName: "about" */ '@/components/SignUp.vue')
  },
  {
    path: '/detail_1',
    name: 'detail_1',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Detail_1.vue')
  },
  ,
  {
    path: '/detail_2',
    name: 'detail_2',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Detail_2.vue')
  },
  {
    path: '/grade_1',
    name: 'grade_1',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Grade_1.vue')
  },
  {
    path: '/grade_2',
    name: 'grade_2',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Grade_2.vue')
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router
