import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import routes from './router'

// Import Bootstrap an BootstrapVue CSS files (order is importants)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project.
Vue.use(BootstrapVue)

// Optionally install BootstrapVue icon components plugin.
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(VueRouter)

// Add vue-router to project.
const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
