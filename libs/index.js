import './styles/normalize.css';
import'./styles/main.css';

import components from './components';
import createMixin from './mixins';

import 'font-awesome/css/font-awesome.min.css';

export default {
    install(Vue, options = {}) {
        const mixin = createMixin(options);
        for (const key in components) {
            if (components.hasOwnProperty(key)) {
                const element = components[key];
                if (process.env.NODE_DEV === 'production') {
                    if (!element.mixins) {
                        element.mixins = [];
                    }
                    element.mixins.push(mixin);
                } else {
                    Vue.mixin(mixin);
                }
                Vue.component(key, element);
            }
        }
    },
};
