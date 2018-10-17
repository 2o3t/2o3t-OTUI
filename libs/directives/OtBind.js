export default function(el, binding) {
    let old = null;
    if (el.__ot_lastBind__) {
        old = el.__ot_lastBind__;
    }
    const value = binding.value;
    el.__ot_lastBind__ = value;

    // 先移除
    if (old !== null) {
        if (Array.isArray(old)) {
            old.forEach(key => {
                el.removeAttribute(key);
            });
        } else if (typeof old === 'object') {
            Object.keys(old).forEach(key => {
                el.removeAttribute(key);
            });
        } else if (old) {
            el.removeAttribute(old);
        }
    }

    // 再赋值
    if (Array.isArray(value)) {
        value.forEach(key => {
            el.setAttribute(key, true);
        });
    } else if (typeof value === 'object') {
        Object.keys(value).forEach(key => {
            if (value[key]) {
                el.setAttribute(key, value[key]);
            } else {
                el.removeAttribute(key);
            }
        });
    } else if (value) {
        el.setAttribute(value, true);
    }
}
