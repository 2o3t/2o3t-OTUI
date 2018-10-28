// 生成 services 的 index.js 文件
const fs = require('fs');
const path = require('path');
const Colors = require('colors');

import config from './config.js';
const ROOT = path.resolve(__dirname, config.serviceDir);

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

console.log(Colors.blue('\n\n ### Create Service <index.js> Start ### \n'));
factory(ROOT, modules);
console.log(Colors.blue('\n ### Create Service <index.js> End ### \n\n'));
