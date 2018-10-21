import './styles/normalize.css';
import './styles/base.css';
import './styles/main.css';

import createMixin from './mixins';
import components from './components';
import directives from './directives';

let componentsDev;
let directivesDev;
if (process.env.NODE_ENV !== 'production') {
    componentsDev = require('./components/_index').default;
    directivesDev = require('./directives/_index').default;
}
// import 'font-awesome/css/font-awesome.min.css';
const comps = componentsDev || components;
const directs = directivesDev || directives;
export default {
    install(Vue, options = {}) {
        for (const key in directs) {
            if (directs.hasOwnProperty(key)) {
                const element = directs[key];
                Vue.directive(key, element);
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
                } else {
                    Vue.mixin(mixin);
                }
                Vue.component(key, element);
            }
        }
    },
};
