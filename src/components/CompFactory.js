
const requireModules = files => {
    const modules = {};

    files.keys().forEach(key => {
        if (/Index\.vue/img.test(key)) return;
        let file = files(key);
        if (file.__esModule === true) {
            if (file.default) {
                file = file.default;
            }
        }
        const name = key.replace(/(\.\/|\.vue)/g, '').replace(/^[\d_-]+/g, '');
        modules[`OT-${name}`] = file;
    });

    return modules;
};

const getTemplate = (config, modules) => {
    const LABEL = config.LABEL;
    const DESC = config.DESC;
    const COMPONENTS = config.COMPONENTS || {};
    const template = `
    <ot-section :theme="$otTheme" :level="2" label="${LABEL}" desc="${DESC}">
    ${
    Object.keys(modules).map(key => {
        const name = key.replace(/^OT-/igm, '');
        const comp = COMPONENTS[name] || {};
        return `<${key} :theme="$otTheme" label="${comp.LABEL || ''}" desc="${comp.DESC || ''}" prefix="#"/>`;
    }).join('\n')}
    </ot-section>
    `;
    return template;
};

export default {
    requireModules,
    getTemplate,
};
