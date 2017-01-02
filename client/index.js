import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './app'
import routes from './routes';

Vue.use(VueRouter)

Vue.use(Vuex)

Vue.use(VueResource)

let router = new VueRouter({
    routes
})

let vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})

window.App = vm