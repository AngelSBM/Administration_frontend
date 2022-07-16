import Vue from 'vue'
import VueRouter from 'vue-router'
import PhoneView from '@/views/PhoneView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'phone',
    component: PhoneView,
    children: [
      {
        path: '/',
        name: 'auth',
        component: () => import(/* webpackChunkName: "auth" */ '../modules/auth/authView'),
        children: [
          {
            path: '/',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../modules/auth/Login'),
          },
          {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "register" */ '../modules/auth/Register'),
          }
        ]
    
      },
    ]
  },
  // {
  //   path: '/auth',
  //   name: 'auth',
  //   component: () => import(/* webpackChunkName: "auth" */ '../modules/auth/authView'),
  //   children: [
  //     {
  //       path: '',
  //       component: () => import(/* webpackChunkName: "login" */ '../modules/auth/Login'),
  //     },
  //     {
  //       path: '/register',
  //       name: 'register',
  //       component: () => import(/* webpackChunkName: "register" */ '../modules/auth/Register'),
  //     }
  //   ]

  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
