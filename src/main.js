import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from "./router/index";

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
