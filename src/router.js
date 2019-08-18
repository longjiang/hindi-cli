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
      component: () => import('./views/Bookmarklet.vue'),
      meta: {
        title: 'Hindi Romanization (Transliteration/Transcription) Bookmarklet | Hindi Zero to Hero',
        metaTags: [
          {
            name: 'description',
            content: 'Connect with various Chinese-learning communities.'
          }
        ]
      }
    }
  ]
})
