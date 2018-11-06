import OtMessageBox from '../../components/OtMessageBox.vue/index.vue';

const defaults = {
    name: 'alert',
};

let instance;

const hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

function isVNode(node) {
    return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}

export default Vue => {
    const OtMessageBoxConstructor = Vue.extend(OtMessageBox);

    const initInstance = options => {
        instance = new OtMessageBoxConstructor({
            el: document.createElement('div'),
            data: options,
        });
        instance.closedCallback = function() {
            console.log('close...');
        };
        // instance.callback = defaultCallback;

        document.body.appendChild(instance.$el);
    };

    const MessageBox = function(options, callback) {
        if (Vue.prototype.$isServer) return;

        if (typeof options === 'string' || isVNode(options)) {
            options = {
                message: options,
            };
            if (typeof arguments[1] === 'string') {
                options.title = arguments[1];
            }
        } else if (options.callback && !callback) {
            callback = options.callback;
        }

        options = Object.assign({}, defaults, options);
        if (!instance) {
            initInstance(options);
        }

        Vue.nextTick(() => {
            instance.show();
        });
    };

    // 挂载
    Vue.prototype.$OtMessageBox = MessageBox;
};
