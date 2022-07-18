import Vue from 'vue'
import VueRouter from 'vue-router'
import PhoneView from '@/views/PhoneView'
import isAuthenticated from './isAuthenticated'

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
      {
        path:'/clients',
        name: 'clients',

        component: () => import(/* webpackChunkName: "clients" */ '../modules/client/ClientsView'),
      },
      {
        path:'/client',
        name: 'client',
        component: () => import(/* webpackChunkName: "client" */ '../modules/client/Client'),
      },
      {
        path:'/new-client',
        name: 'newClient',
        component: () => import(/* webpackChunkName: "client" */ '../modules/client/ClientNew'),
      },
      {
        path:'/update-client',
        name: 'updateClient',
        component: () => import(/* webpackChunkName: "client" */ '../modules/client/ClientEdit'),
      }
    ]
  },
]


const router = new VueRouter({
  routes
})


router.beforeEach( async (to, from, next) => {


  if(to.name !== 'login' && to.name !== 'register'){

    const isAuth = isAuthenticated();
    if(!isAuth){
      next({name: 'login'})
    }else{ next() }
  }

  next();

} )

export default router
