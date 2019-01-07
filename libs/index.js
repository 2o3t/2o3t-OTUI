import './styles/normalize.css';
import '2o3t-css-colors/dist/2o3t-ui/styles.css';

import OTUIColors from '2o3t-css-colors/dist/2o3t-ui/index.js';
const { setOptions, otMixin } = OTUIColors;

import components from './components';
import directives from './directives';
import services from './services';
import plugins from './plugins';
import utils from './utils';

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

const defaultOptions = {
    global: true,
    plugins: { },
};

export default {
    /* option = {
         theme, size,
         global, // 全局注册
         plugins: { // 需要注册的三方插件
            markdownIt: require('markdown-it'),
         }
    } */
    install(Vue, options = {}) {
        options = Object.assign(defaultOptions, options);

        for (const key in directs) {
            if (directs.hasOwnProperty(key)) {
                const initDirect = directs[key];
                const element = initDirect(Vue);
                if (element) {
                    Vue.directive(key, element);
                }
            }
        }

        // service
        for (const key in servs) {
            if (servs.hasOwnProperty(key)) {
                const initService = servs[key];
                initService(Vue);
            }
        }

        setOptions(options);
        for (const key in comps) {
            if (comps.hasOwnProperty(key)) {
                const element = comps[key];
                element.__OT_Vue__ = Vue; // 内用
                element.__OT__ = true;
                if (options.global !== true) {
                    if (!element.mixins) {
                        element.mixins = [];
                    }
                    element.mixins.push(otMixin);
                }
                Vue.component(key, element);
            }
        }

        if (options.global === true) {
            Vue.mixin(otMixin);
        }


        // 三方, 支持ssr
        let VModal;
        if (Vue.prototype.$isServer) {
            VModal = require('vue-js-modal/dist/ssr.index');
        } else {
            VModal = require('vue-js-modal').default;
        }
        if (options.global !== true) {
            if (!VModal.mixins) {
                VModal.mixins = [];
            }
            VModal.mixins.push(otMixin);
        }
        Vue.use(VModal, { componentName: 'ot-modal' });

        // 注册三方组件
        const pluginsOptions = options.plugins || {};
        Vue.use(plugins, pluginsOptions);

        // utils
        Vue.mixin({
            beforeCreate() {
                // 工具类
                this.$otUtils = utils(this);
            },
        });
    },
};
