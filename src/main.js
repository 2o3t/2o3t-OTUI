import Vue from 'vue';
import App from './App.vue';

import 'font-awesome/css/font-awesome.min.css';
// import '2o3t-ui/dist/styles.css';
// import OTUI from '2o3t-ui';
// import OTUI from '@otui';

let OTUI = null;
if (process.env.NODE_ENV === 'production') {
    require('2o3t-ui/dist/styles.css');
    OTUI = require('2o3t-ui');
} else {
    OTUI = require('@otui').default;
    console.warn('In Development !!!');
}

const MarkdownIt = require('markdown-it');
const cheerio = require('cheerio');
const clipboard = require('clipboard-polyfill');
Vue.use(OTUI, {
    global: true,
    plugins: {
        markdownIt: MarkdownIt,
        cheerio,
        clipboard,
    },
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
