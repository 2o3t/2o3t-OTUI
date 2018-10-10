import Vue from 'vue';
import App from './App.vue';

import OTUI from '../libs';
Vue.use(OTUI, {
    global: true,
});

Vue.config.productionTip = false;

import router from './router';

// test
import Shared from './shared';
Vue.use(Shared);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
