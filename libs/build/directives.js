// 生成 directives 的 index.js 文件
const fs = require('fs');
const path = require('path');

import config from './config.js';
const ROOT = path.resolve(__dirname, config.directDir);

const list = fs.readdirSync(ROOT);
const modules = {};
const files = list.filter(file => {
    return /\.js$/.test(file);
});
files.forEach(key => {
    if (key === 'index.js' || key === '_index.js') return;
    modules[key.replace(/(\.\/|\.js)/g, '')] = `./${key}`;
});

import factory from './factory.js';
factory(ROOT, modules);
