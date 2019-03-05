// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VURouter from 'vue-router'
import Vresource from 'vue-resource'
import Content from './page/content'
import Store from './components/stores'
import Buy from './page/buyindex'
import One from './page/child/one'
import Two from './page/child/two'
import Three from './page/child/three'
import Four from './page/child/four'
Vue.use(VURouter)
Vue.use(Vresource)
Vue.config.productionTip = false
let router = new VURouter({
  mode: 'history',
  routes: [
    {
      name: 'content',
      path: '/',
      component: Content
    },
    {
      name:'Buy',
      path:'/Buy',
      component:Buy,
      redirect:'/Buy/One',
      children:[
        {
          path:'One',
          component:One
        },
        {
          path:'Two',
          component:Two
        },
        {
          path:'Three',
          component:Three
        },
        {
          path:'Four',
          component:Four
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Store/>',
  components: {Store}
})
