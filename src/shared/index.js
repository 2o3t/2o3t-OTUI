const files = require.context('.', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
    if (key === './index.js') return;
    let file = files(key);
    if (file.__esModule === true) {
        if (file.default) {
            file = file.default;
        }
    }
    modules[key.replace(/(\.\/|\.js)/g, '')] = file;
});

export default modules;
