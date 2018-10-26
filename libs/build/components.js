// 生成 compoents 的 index.js 文件
import { ROOT, modules } from './loadVue.js';

import factory from './factory.js';
factory(ROOT, modules);
