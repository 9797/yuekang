import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App2'
import Chart from '@/Chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    }
  ]
})
