function otBind(el, binding) {
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

export default function(Vue) {
    if (Vue.prototype.$isServer) return;
    return {
        bind(el, binding) {
            if (el) {
                return otBind(el, binding);
            }
            Vue.$nextTick(function() {
                if (el) {
                    otBind(el, binding);
                }
            });
        },
        inserted(el, binding) {
            if (el) {
                return otBind(el, binding);
            }
            Vue.$nextTick(function() {
                if (el) {
                    otBind(el, binding);
                }
            });
        },
        componentUpdated(el, binding) {
            if (el) {
                return otBind(el, binding);
            }
            Vue.$nextTick(function() {
                if (el) {
                    otBind(el, binding);
                }
            });
        },
    };
}
