import './styles/normalize.css';
import './styles/main.css';

import components from './components';
import createMixin from './mixins';
import directives from './directives';

import 'font-awesome/css/font-awesome.min.css';

export default {
    install(Vue, options = {}) {
        for (const key in directives) {
            if (directives.hasOwnProperty(key)) {
                const element = directives[key];
                Vue.directive(key, element);
            }
        }

        const mixin = createMixin(options);
        for (const key in components) {
            if (components.hasOwnProperty(key)) {
                const element = components[key];
                element.__OT__ = true;
                if (options.global !== true) {
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
