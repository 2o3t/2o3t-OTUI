import OtMessage from '../../components/OtMessage.vue/index.vue';

let instance;
const instances = [];
let seed = 1;
let ZIndex = 5000;

const hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

function isVNode(node) {
    return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}

export default Vue => {
    const MessageConstructor = Vue.extend(OtMessage);

    const Message = function(options) {
        if (Vue.prototype.$isServer) return;
        options = options || {};
        if (typeof options === 'string') {
            options = {
                title: options,
            };
        }
        const userOnClose = options.onClose;
        const id = 'message_' + seed++;

        options.onClose = function() {
            Message.close(id, userOnClose);
        };
        instance = new MessageConstructor({
            data: options,
        });
        instance.id = id;
        if (isVNode(instance.message)) {
            instance.$slots.default = [ instance.message ];
            instance.message = null;
        }
        instance.vm = instance.$mount();
        document.body.appendChild(instance.vm.$el);
        instance.vm.visible = true;
        instance.dom = instance.vm.$el;
        instance.dom.style.zIndex = ZIndex++;
        instances.push(instance);
        return instance.vm;
    };

    [ 'success', 'warning', 'info', 'error', 'question' ].forEach(type => {
        Message[type] = options => {
            if (typeof options === 'string') {
                options = {
                    message: options,
                };
            }
            options.type = type;
            return Message(options);
        };
    });

    Message.close = function(id, userOnClose) {
        for (let i = 0, len = instances.length; i < len; i++) {
            if (id === instances[i].id) {
                if (typeof userOnClose === 'function') {
                    userOnClose(instances[i]);
                }
                instances.splice(i, 1);
                break;
            }
        }
    };

    Message.closeAll = function() {
        for (let i = instances.length - 1; i >= 0; i--) {
            instances[i].close();
        }
    };

    // 挂载
    Vue.prototype.$OtMessage = Message;
};
