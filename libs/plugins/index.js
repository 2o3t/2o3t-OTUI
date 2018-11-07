export default {
    install(Vue, options = {}) {
        Object.keys(options).forEach(key => {
            const plugins = options[key];
            if (plugins) {
                Vue.prototype[`__ot_plugins_${key}__`] = plugins;
            }
        });
    },
};
