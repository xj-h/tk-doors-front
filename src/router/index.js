import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/attention'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/tkt',
    name: 'tkt',
    component: () => import(/* webpackChunkName: "about" */ '../components/EmptyView.vue'),
    redirect: { name: 'tkt' },
    children: [
      {
        path: 'fly',
        name: 'fly',
        component: () => import(/* webpackChunkName: "about" */ '../views/test/flytes.vue')
      }
    ]
  },
  {
    path: '/fly',
    name: 'fly',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/flytes.vue')
  },
  {
    path: '/attention',
    name: 'attention',
    component: () => import(/* webpackChunkName: "about" */ '../views/attention/index.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/center.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/test.vue')
  },
  {
    path: '/flyeasy',
    name: 'flyeasy',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/flyeasy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
