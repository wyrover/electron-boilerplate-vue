import VueRouter from 'vue-router'
import Home from './components/Home'

export default function (Vue) {
  Vue.use(VueRouter)

  let router = new VueRouter()

  router.map({
    '/': {
      component: Home,
    },
  })

  return router
}
