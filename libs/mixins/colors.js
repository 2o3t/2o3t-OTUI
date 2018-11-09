const THEMES = [ 'light', 'dark' ];
const COLORS = [ /* 'light', 'dark', */ 'default', 'primary', 'success', 'warning', 'danger', 'info' ];

const cloneOthers = (otDefaultColorsFn, ctx) => {
    if (typeof otDefaultColorsFn !== 'function') {
        return {};
    }
    const themes = THEMES.reduce((obj, name) => {
        obj[name] = ctx ? otDefaultColorsFn.call(ctx, name) : otDefaultColorsFn(name);
        return obj;
    }, {});

    return COLORS.filter(name => {
        return name !== 'default';
    }).reduce((obj, name) => {
        const funcName = `ot${name[0].toUpperCase()}${name.substring(1)}Colors`;
        obj[funcName] = t => {
            const themeColors = themes[t];
            const s = JSON.stringify(themeColors);
            // 开始替换
            const r = s.replace(/(def|default)-/igm, `${name}-`);
            return JSON.parse(r);
        };
        return obj;
    }, {});
};

const PREFIX_NAME_MAP = {
    lig: 'light',
    dar: 'dark',
    gre: 'grey',
    def: 'default',
    pri: 'primary',
    suc: 'success',
    war: 'warning',
    dan: 'danger',
    inf: 'info',
    f: 'font',
    bg: 'background',
    b: 'border',
    bt: 'border-top',
    bl: 'border-left',
    br: 'border-right',
    bb: 'border-bottom',

    act: 'active',
    hov: 'hover',
    foc: 'focus',
    dis: 'disabled',
    sel: 'selected',
    nor: 'normal',
};
const ACTION_NAME_MAP = {
    a: 'active',
    h: 'hover',
    f: 'focus',
    d: 'disabled',
    s: 'selected',
    n: 'normal',
};
const parseName = curr => {
    if (!/^ot-/i.test(curr)) {
        if (!/color-/i.test(curr)) {
            const attrs = curr.split('-');
            let len = attrs.length;
            if (len === 2 && ![ 'normal', 'n', 'nor' ].includes(attrs[len - 1])) {
                attrs.push('normal');
            }
            while (len-- >= 0) {
                const key = attrs[len];
                if (PREFIX_NAME_MAP[key]) {
                    attrs[len] = PREFIX_NAME_MAP[key];
                }
                if (len >= 2) {
                    if (ACTION_NAME_MAP[key]) {
                        attrs[len] = ACTION_NAME_MAP[key];
                    }
                }
            }
            curr = `color-${attrs.join('-')}`;
        }
        curr = `ot-${curr}`;
    }
    return curr;
};

export default {
    cloneOthers,
    parseName,
};
