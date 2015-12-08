import Vue from 'vue'
import './app.css';
import AppView from './containers/App'
import configRouter from './routes'

const router = configRouter(Vue)
router.start(AppView, '#root')

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  // require('./createDevToolsWindow')(store);
}
