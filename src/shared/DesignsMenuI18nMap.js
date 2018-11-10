const files = require.context('../designs/', true, /\README.md$/i);
const allModules = files.keys().reduce((obj, key) => {
    const result = /^\.\/([\w-_]+)\//ig.exec(key);
    if (result) {
        const name = result[1].replace(/[\d-_]+/ig, '');
        if (obj[name]) {
            console.error(name, 'run error!!!!');
            return obj;
        }
        let content = require(`../designs/${key.replace(/^\.\//ig, '')}?inject=true&name=readme`);
        if (content.default) {
            content = content.default;
        }
        obj[name] = content.LABEL;
    }
    return obj;
}, {});

export default allModules;
