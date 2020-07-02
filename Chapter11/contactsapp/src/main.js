import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

new Vue({
    store, ///이걸 통해 자식들이 this.$store 접근 가능 
    el: '#app',
    template: '<App/>',
    components: { App }
})