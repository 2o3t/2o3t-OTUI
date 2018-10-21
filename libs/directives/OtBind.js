export default function(el, binding) {
    let old = null;
    if (el.__ot_lastBind__) {
        old = el.__ot_lastBind__;
    }
    const value = binding.value;
    el.__ot_lastBind__ = value;

    // 先找移除
    const waitDeal = {};
    if (old !== null) {
        if (Array.isArray(old)) {
            old.forEach(key => {
                waitDeal[key] = false;
            });
        } else if (typeof old === 'object') {
            Object.keys(old).forEach(key => {
                waitDeal[key] = false;
            });
        } else if (old) {
            waitDeal[old] = false;
        }
    }

    // 再赋值
    if (Array.isArray(value)) {
        value.forEach(key => {
            waitDeal[key] = true;
        });
    } else if (typeof value === 'object') {
        Object.keys(value).forEach(key => {
            waitDeal[key] = value[key];
        });
    } else if (value) {
        waitDeal[value] = true;
    }

    // 处理
    Object.keys(waitDeal).forEach(key => {
        if (waitDeal[key]) {
            el.setAttribute(key, waitDeal[key]);
        } else {
            el.removeAttribute(key);
        }
    });

}
