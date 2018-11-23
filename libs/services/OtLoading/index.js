import OtLoading from '../../components/OtLoading.vue/index.vue';
import utils from '../../utils';

let ZIndex = 8000;
let fullscreenLoading;

const defaults = {
    text: null,
    fullscreen: true,
    body: false,
    lock: false,
    customClass: '',
};

export default Vue => {
    const LoadingConstructor = Vue.extend(OtLoading);
    const { addClass, removeClass, getStyle, afterLeave } = utils(Vue.prototype);

    LoadingConstructor.prototype.originalPosition = '';
    LoadingConstructor.prototype.originalOverflow = '';

    LoadingConstructor.prototype.close = function() {
        if (this.fullscreen) {
            fullscreenLoading = undefined;
        }
        afterLeave(this, () => {
            const target = this.fullscreen || this.body
                ? document.body
                : this.target;
            removeClass(target, 'ot-loading-parent--relative');
            removeClass(target, 'ot-loading-parent--hidden');
            if (this.$el && this.$el.parentNode) {
                this.$el.parentNode.removeChild(this.$el);
            }
            this.$destroy();
        }, 300);
        this.visible = false;
    };

    const addStyle = (options, parent, instance) => {
        const maskStyle = {};
        if (options.fullscreen) {
            instance.originalPosition = getStyle(document.body, 'position');
            instance.originalOverflow = getStyle(document.body, 'overflow');
            maskStyle.zIndex = ZIndex++;
        } else if (options.body) {
            instance.originalPosition = getStyle(document.body, 'position');
            [ 'top', 'left' ].forEach(property => {
                const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
                maskStyle[property] = options.target.getBoundingClientRect()[property] +
          document.body[scroll] +
          document.documentElement[scroll] +
          'px';
            });
            [ 'height', 'width' ].forEach(property => {
                maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
            });
        } else {
            instance.originalPosition = getStyle(parent, 'position');
        }
        Object.keys(maskStyle).forEach(property => {
            instance.$el.style[property] = maskStyle[property];
        });
    };

    const Loading = (options = {}) => {
        if (Vue.prototype.$isServer) return;
        options = Object.assign({}, defaults, options);
        if (typeof options.target === 'string') {
            options.target = document.querySelector(options.target);
        }
        options.target = options.target || document.body;
        if (options.target !== document.body) {
            options.fullscreen = false;
        } else {
            options.body = true;
        }
        if (options.fullscreen && fullscreenLoading) {
            return fullscreenLoading;
        }

        const parent = options.body ? document.body : options.target;
        const instance = new LoadingConstructor({
            el: document.createElement('div'),
            data: options,
        });

        addStyle(options, parent, instance);
        if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
            addClass(parent, 'ot-loading-parent--relative');
        }
        if (options.fullscreen && options.lock) {
            addClass(parent, 'ot-loading-parent--hidden');
        }
        parent.appendChild(instance.$el);
        Vue.nextTick(() => {
            instance.visible = true;
        });
        if (options.fullscreen) {
            fullscreenLoading = instance;
        }
        return instance;
    };

    // 挂载
    Vue.prototype.$otLoading = Loading;
};
