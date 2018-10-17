// FIXME: 不能这样写,不然打不出来包
const modules = {};

const files = require.context('.', false, /\.vue$/);
files.keys().forEach(key => {
    if (key === './index.js' || key === './_index.js') return;
    modules[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
});

export default modules;

