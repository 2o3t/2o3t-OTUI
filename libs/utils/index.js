import * as scroll from './scroll';
import * as throttle from './throttle';
import listeners from './listeners';
import extend from './extendEx';
import * as dom from './dom';

function server($vm, func) {
    return Object.keys(func).reduce((obj, key) => {
        obj[key] = function() {
            const args = Array.prototype.splice.call(arguments, 0);
            if ($vm.$isServer) return;
            return func[key].apply(func, args);
        };
        return obj;
    }, {});
}

export default function($vm) {
    return {
        ...server($vm, dom),
        ...server($vm, scroll),
        ...server($vm, throttle),
        ...server($vm, listeners),
        extend,

        // 获取插件
        getOtPlugin(name) {
            const plugin = $vm[`__ot_plugins_${name}__`];
            if (plugin) {
                return plugin;
            }
            console.warn(`please use options.plugins '${name}'`);
            return null;
        },
    };
}
