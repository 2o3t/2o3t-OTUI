const files = require.context('.', true, /\index.js$/i);

const allModules = files.keys().reduce((obj, key) => {
    const result = /^\.\/([\w-_]+)\//ig.exec(key);
    if (result) {
        const dirName = result[1];
        if (obj[dirName]) {
            console.error(dirName, 'run error!!!!');
            return obj;
        }
        obj[dirName] = key.replace(/(^\.\/)/g, '');
    }
    return obj;
}, {});

const components = Object.keys(allModules).map(key => {
    const index = allModules[key];
    if (index) {
        const name = key.replace(/^[\d_-]+/g, '');
        return {
            key,
            name,
            index,
            router: `/${name}`,
        };
    }
    return null;
}).filter(item => {
    return item != null;
});

console.log(components);

export default components;
