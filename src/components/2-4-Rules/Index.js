import CompFactory from '../CompFactory';
const files = require.context('.', false, /\.vue$/);
const modules = CompFactory.requireModules(files);

import Config from './config';
const template = CompFactory.getTemplate(Config, modules);

export default {
    template,
    components: modules,
};
