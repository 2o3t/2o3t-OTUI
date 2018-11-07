import './styles/normalize.css';
import './styles/base.css';
import './styles/main.css';

import createMixin from './mixins';
import components from './components';
import directives from './directives';
import services from './services';
import plugins from './plugins';

// 三方
import VModal from 'vue-js-modal';

let componentsDev;
let directivesDev;
let servicesDev;
if (process.env.NODE_ENV !== 'production') {
    componentsDev = require('./components/_index').default;
    directivesDev = require('./directives/_index').default;
    servicesDev = require('./services/_index').default;
}
// import 'font-awesome/css/font-awesome.min.css';
const comps = componentsDev || components;
const directs = directivesDev || directives;
const servs = servicesDev || services;

export default {
    /* option = {
         theme, size,
         global, // 全局注册
         plugins: { // 需要注册的三方插件
            markdownIt: require('markdown-it'),
            cheerio: require('cheerio'),
         }
    } */
    install(Vue, options = {}) {
        for (const key in directs) {
            if (directs.hasOwnProperty(key)) {
                const element = directs[key];
                Vue.directive(key, element);
            }
        }

        // service
        for (const key in servs) {
            if (servs.hasOwnProperty(key)) {
                const initService = servs[key];
                initService(Vue);
            }
        }

        const mixin = createMixin(options);
        for (const key in comps) {
            if (comps.hasOwnProperty(key)) {
                const element = comps[key];
                element.__OT_Vue__ = Vue; // 内用
                element.__OT__ = true;
                if (options.global !== true) {
                    if (!element.mixins) {
                        element.mixins = [];
                    }
                    element.mixins.push(mixin);
                }
                Vue.component(key, element);
            }
        }

        if (options.global === true) {
            Vue.mixin(mixin);
        }

        if (options.global !== true) {
            if (!VModal.mixins) {
                VModal.mixins = [];
            }
            VModal.mixins.push(mixin);
        }
        Vue.use(VModal, { componentName: 'ot-modal' });

        // 注册三方组件
        const pluginsOptions = options.plugins || {};
        Vue.use(plugins, pluginsOptions);
    },
};
