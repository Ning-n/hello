import Vue from 'vue'
import App from './App'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import pageHome from './pages/index/home.vue'
Vue.component('page-Home',pageHome)

import pageme from './pages/index/me.vue'
Vue.component('page-me',pageme)

import pagenews from './pages/index/news.vue'
Vue.component('page-news',pagenews)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
