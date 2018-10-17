// 生成 services 的 index.js 文件
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, './libs/services/');
const list = fs.readdirSync(ROOT);
const modules = {};
const files = list.filter(file => {
    return /\.vue$/.test(file);
});
files.forEach(key => {
    if (key === 'index.vue') return;
    modules[key.replace(/(\.\/|\.vue)/g, '')] = `./${key}`;
});

import factory from './factory.js';
factory(ROOT, modules);
