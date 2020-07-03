import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from 'vue-router';
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import UpdatePhoto from './components/UpdatePhoto';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactList,
            children: [
                { path: 'add', name: 'addcontact', component: ContactForm },
                { path: 'update/:no', name: 'updatecontact', component: ContactForm, props: true },
                { path: 'photo/:no', name: 'updatephoto', component: UpdatePhoto, props: true },

            ]
        },
    ]
})



new Vue({
    store, ///이걸 통해 자식들이 this.$store 접근 가능
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
})