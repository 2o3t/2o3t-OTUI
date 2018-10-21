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

const components = Object.keys(allModules).sort((key1, key2) => {
    const name1 = key1.replace(/^((\d+[_-]?)+)-\w+/g, '$1');
    const name2 = key2.replace(/^((\d+[_-]?)+)-\w+/g, '$1');

    const n1 = name1.split('-');
    const n2 = name2.split('-');
    const len = Math.max(n1.length, n2.length);
    for (let i = 0; i < len; i++) {
        const one = n1[i];
        const two = n2[i];
        // console.warn(one, two);
        if (isNaN(one)) {
            return -1;
        }
        if (isNaN(two)) {
            return 1;
        }
        const r = parseInt(one) - parseInt(two);
        if (r === 0) continue;
        return r;
    }
    return 1;
}).map(key => {
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
})
    .filter(item => {
        return item != null;
    });

console.log(components);

export default components;
