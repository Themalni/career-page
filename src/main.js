// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import vueScrollto from 'vue-scrollto'
import HeaderSection from './components/HeaderSection'
import search from './components/search'
import CurrentPositions from './components/CurrentPositions'
import AboutCompany from './components/AboutCompany'
import PositionVew from './components/PositionView'
import FooterSection from './components/FooterSection'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(vueScrollto);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
