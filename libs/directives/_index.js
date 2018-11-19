const files = require.context('.', true, /\.js$/);
const modules = {};

files.keys().forEach(key => {
    if (/^\.\/_?index\.js/igm.test(key)) return;
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default modules;
