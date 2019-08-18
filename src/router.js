import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/bookmarklet'
    },
    {
      path: '/bookmarklet',
      name: 'bookmarklet',
      component: () => import('./views/Bookmarklet.vue')
    }
  ]
})
