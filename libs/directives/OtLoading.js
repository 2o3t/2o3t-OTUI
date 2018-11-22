import OtLoading from '../components/OtLoading.vue/index.vue';
import utils from '../utils';

let ZIndex = 8000;

export default function(Vue) {
    const Mask = Vue.extend(OtLoading);
    if (Vue.prototype.$isServer) return;
    const { addClass, removeClass, getStyle, afterLeave } = utils(Vue.prototype);

    const insertDom = (parent, el, binding) => {
        if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
            Object.keys(el.maskStyle).forEach(property => {
                el.mask.style[property] = el.maskStyle[property];
            });

            if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
                addClass(parent, 'ot-loading-parent--relative');
            }
            if (binding.modifiers.fullscreen && binding.modifiers.lock) {
                addClass(parent, 'ot-loading-parent--hidden');
            }
            el.domVisible = true;

            parent.appendChild(el.mask);
            Vue.nextTick(() => {
                if (el.instance.hiding) {
                    el.instance.$emit('after-leave');
                } else {
                    el.instance.visible = true;
                }
            });
            el.domInserted = true;
        }
    };

    const toggleLoading = (el, binding) => {
        if (binding.value) {
            Vue.nextTick(() => {
                if (binding.modifiers.fullscreen) {
                    el.originalPosition = getStyle(document.body, 'position');
                    el.originalOverflow = getStyle(document.body, 'overflow');
                    el.maskStyle.zIndex = ZIndex++;

                    addClass(el.mask, 'is-fullscreen');
                    insertDom(document.body, el, binding);
                } else {
                    removeClass(el.mask, 'is-fullscreen');

                    if (binding.modifiers.body) {
                        el.originalPosition = getStyle(document.body, 'position');

                        [ 'top', 'left' ].forEach(property => {
                            const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
                            el.maskStyle[property] = el.getBoundingClientRect()[property] +
                    document.body[scroll] +
                    document.documentElement[scroll] -
                    parseInt(getStyle(document.body, `margin-${property}`), 10) +
                    'px';
                        });
                        [ 'height', 'width' ].forEach(property => {
                            el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
                        });

                        insertDom(document.body, el, binding);
                    } else {
                        el.originalPosition = getStyle(el, 'position');
                        insertDom(el, el, binding);
                    }
                }
            });
        } else {
            afterLeave(el.instance, () => {
                el.domVisible = false;
                const target = binding.modifiers.fullscreen || binding.modifiers.body
                    ? document.body
                    : el;
                removeClass(target, 'ot-loading-parent--relative');
                removeClass(target, 'ot-loading-parent--hidden');
                el.instance.hiding = false;
            }, 300, true);
            el.instance.visible = false;
            el.instance.hiding = true;
        }
    };

    return {
        bind(el, binding, vnode) {
            const textExr = el.getAttribute('ot-loading-text');
            const spinnerExr = el.getAttribute('ot-loading-spinner');
            const backgroundExr = el.getAttribute('ot-loading-background');
            const customClassExr = el.getAttribute('ot-loading-custom-class');
            const vm = vnode.context;
            const mask = new Mask({
                el: document.createElement('div'),
                data: {
                    text: vm && vm[textExr] || textExr,
                    spinner: vm && vm[spinnerExr] || spinnerExr,
                    background: vm && vm[backgroundExr] || backgroundExr,
                    customClass: vm && vm[customClassExr] || customClassExr,
                    fullscreen: !!binding.modifiers.fullscreen,
                },
            });
            el.instance = mask;
            el.mask = mask.$el;
            el.maskStyle = {};

            binding.value && toggleLoading(el, binding);
        },

        update(el, binding) {
            el.instance.setText(el.getAttribute('ot-loading-text'));
            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding);
            }
        },

        unbind(el, binding) {
            if (el.domInserted) {
                el.mask &&
          el.mask.parentNode &&
          el.mask.parentNode.removeChild(el.mask);
                toggleLoading(el, { value: false, modifiers: binding.modifiers });
            }
        },
    };
}
