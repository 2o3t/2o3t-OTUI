const files = require.context('.', false, /\.vue$/);
const modules = {};

files.keys().forEach(key => {
    if (key === './Index.vue') return;
    let file = files(key);
    if (file.__esModule === true) {
        if (file.default) {
            file = file.default;
        }
    }
    modules[key.replace(/(\.\/|\.vue)/g, '')] = file;
});

import Config from './config';

const template = `
<ot-section :theme="otTheme" :level="2" label="${Config.LABEL}" prefix="#">
${
    Object.keys(modules).map(key => {
        return `<${key}/>`;
    }).join('\n')
}
</ot-section>
`;

export default {
    template,
    components: modules,
    computed: {
        otTheme() {
            return this.otStores.theme;
        },
    }
};
