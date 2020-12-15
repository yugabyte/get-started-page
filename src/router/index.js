import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGtag from 'vue-gtag'

import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueGtag, {
  config: {
    id: 'UA-104956980-8',
    // Avoid sending first page hit on load, to avoid counting pages twice
    params: {
      send_page_view: false
    }
  }
})

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
