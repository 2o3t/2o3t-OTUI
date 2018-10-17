const THEMES = [ 'light', 'dark' ];
const COLORS = [ /* 'light', 'dark', */ 'default', 'primary', 'success', 'warning', 'danger', 'info' ];

const clone = (otDefaultColorsFn, ctx) => {
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

export default clone;
