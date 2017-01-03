import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './app'
import routes from './routes';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.use(VueRouter)

Vue.use(Vuex)

Vue.use(VueResource)

let router = new VueRouter({
    // mode: 'history',
    routes
})

window.App = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})