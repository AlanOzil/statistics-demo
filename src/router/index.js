import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Link from 'components/link-detail/link-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Link',
      name: 'Link',
      component: Link
    }
  ]
})
