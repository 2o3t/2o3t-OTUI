export default function(Vue) {
    if (Vue.prototype.$isServer) return;
    return function(el, binding) {
        el.title = binding.value || el.innerText;
    };
}
