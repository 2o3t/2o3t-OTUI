export default function(Vue) {
    if (Vue.prototype.$isServer) return;
    return {
        bind(el, binding, vnode) {
            const $vm = vnode.context;
            if (!$vm || !$vm.$otUtils) {
                return;
            }
            const clipboard = $vm.$otUtils.getOtPlugin('clipboard');
            if (!clipboard) {
                return;
            }
            if (el.__ot_copy_clipboard_function) {
                return;
            }
            el.__ot_copy_clipboard_function = function() {
                const content = binding.value || el.innerText;
                clipboard.writeText(content);

                if ($vm.$otMessage) {
                    $vm.$otMessage.info({
                        title: `[ ${content} ] 复制成功!`,
                        theme: $vm.$otTheme,
                        color: $vm.color,
                    });
                }
            };
            el.addEventListener('click', el.__ot_copy_clipboard_function);
        },
        unbind(el) {
            el.removeEventListener('click', el.__ot_copy_clipboard_function);
        },
    };
}
