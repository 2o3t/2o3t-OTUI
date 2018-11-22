const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

/* istanbul ignore next */
const camelCase = function(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

// export const getStyle = function(element, attr) {
//     if (element.currentStyle) {
//         return element.currentStyle[attr];
//     }
//     return getComputedStyle(element, false)[attr];
// };

/* istanbul ignore next */
export function getStyle(element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
}

/* istanbul ignore next */
export function setStyle(element, styleName, value) {
    if (!element || !styleName) return;

    if (typeof styleName === 'object') {
        for (const prop in styleName) {
            if (styleName.hasOwnProperty(prop)) {
                setStyle(element, prop, styleName[prop]);
            }
        }
    } else {
        styleName = camelCase(styleName);
        element.style[styleName] = value;
    }
}

export const getOffsetTop = function(el) {
    let offsetTop = el.offsetTop;
    let parent = el.offsetParent;
    while (parent !== null) {
        offsetTop += parent.offsetTop;
        parent = parent.offsetParent;
    }
    return offsetTop;
};

export const getOffsetLeft = function(el) {
    let offsetLeft = el.offsetLeft;
    let parent = el.offsetParent;
    while (parent !== null) {
        offsetLeft += parent.offsetLeft;
        parent = parent.offsetParent;
    }
    return offsetLeft;
};

export const getScrollTop = function() {
    return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
};

// 可视区域
export const getViewWidth = function() {
    return document.documentElement.clientWidth || window.innerWidth;
};

export const getViewHeight = function() {
    return document.documentElement.clientHeight || window.innerHeight;
};

export function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    }
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;

}

export function addClass(el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName;
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

const trim = function(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

export function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}
