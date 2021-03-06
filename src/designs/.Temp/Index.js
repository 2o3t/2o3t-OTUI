const CompFactory = require('../CompFactory').default;
const files = require.context('.', false, /\.vue$/);
const modules = CompFactory.requireModules(files);

import Config from './README.md';
const template = CompFactory.getTemplate(Config, modules);

export default {
    template,
    components: modules,
};
