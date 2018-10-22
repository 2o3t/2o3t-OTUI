// FIXME: 不能这样写,不然打不出来包
const modules = {};

const files = require.context('.', true, /\.vue$/);
files.keys().forEach(key => {
    if (key === './index.js' || key === './_index.js') return;
    const name = key.replace(/(\.\/|\.vue)/g, '').replace(/\/index/g, '');
    if (!/\w+\//g.test(name)) {
        modules[name] = files(key).default;
    }
});

export default modules;
