// 生成 compoents 的 index.js 文件
const fs = require('fs');
const path = require('path');

import config from './config.js';
const ROOT = path.resolve(__dirname, config.compDir);

const list = fs.readdirSync(ROOT);
const modules = {};
const files = list.filter(file => {
    const p = path.join(ROOT, file);
    if (fs.statSync(p).isDirectory()) {
        const indexFile = path.join(p, 'index.vue');
        return fs.existsSync(indexFile);
    }
    return /\.vue$/.test(file);
}).map(file => {
    const p = path.join(ROOT, file);
    if (fs.statSync(p).isDirectory()) {
        return path.join(file, 'index.vue');
    }
    return file;
});
files.forEach(key => {
    if (key === 'index.vue') return;
    modules[key.replace(/(\.\/|(\/index)?\.vue)/g, '')] = `./${key}`;
});

import factory from './factory.js';
factory(ROOT, modules);
