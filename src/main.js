import Vue from 'vue';
import App from './App.vue';

// import 'font-awesome/css/font-awesome.min.css';
import '2o3t-icon-font/dist/font-ot.css';

// import '2o3t-ui/dist/OTUI.css';
// import OTUI from '2o3t-ui';

let OTUI = null;
let OTUIPlugins = { };
if (process.env.NODE_ENV === 'production') {
    require('2o3t-ui/dist/OTUI.css');
    OTUI = require('2o3t-ui');
} else {
    OTUI = require('@libs').default;
    console.warn('In Development !!!');

    const hljs = require('highlight.js');
    const markdownit = require('markdown-it');
    const clipboard = require('clipboard-polyfill');
    const moment = require('moment');
    OTUIPlugins = {
        markdownit,
        clipboard,
        hljs, moment,
    };
}

const color = window.localStorage && window.localStorage.getItem('ot-color') || null;
Vue.use(OTUI, {
    global: true,
    color,
    plugins: OTUIPlugins,
});

Vue.config.productionTip = false;

import router from './router';

// test
import Shared from './shared';
Vue.use(Shared);

const app = new Vue({
    router,
    render: h => h(App),
    mounted() {
        // 解决移动端 hover 问题
        if (document) {
            document.body.addEventListener('touchstart', function() { });
        }
    },
});

router.onReady(() => {
    app.$mount('#app');
});
