import Vue from 'vue';
import App from './App.vue';

import 'font-awesome/css/font-awesome.min.css';
// import '2o3t-ui/libs/styles.css';
// import OTUI from '2o3t-ui';
import OTUI from '@otui';
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
