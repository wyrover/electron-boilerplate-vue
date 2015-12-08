import Vue from 'vue'
import VueRouter from 'vue-router'
import './app.css';
import AppView from './components/App'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter()

router.map(routes)
router.start(AppView, '#root')

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  // require('./createDevToolsWindow')(store);
  require('debug-menu').install()
}
