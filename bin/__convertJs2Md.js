const fs = require('fs');
const path = require('path');

const compPath = path.join(process.cwd(), 'src', 'components');
const components = fs.readdirSync(compPath);
components.filter(name => {
    return /^\d+/ig.test(name);
}).map(name => {
    return path.join(compPath, name);
}).forEach(p => {
    const readmeDir = path.join(p, 'README.md');
    if (fs.existsSync(readmeDir)) {
        return;
    }
    const configDir = path.join(p, 'config.js');
    const exists = fs.existsSync(configDir);
    if (exists) {
        const text = fs.readFileSync(configDir, 'utf8').toString();
        const json = text.replace(/export\s+default\s+/igm, '').replace(/;/igm, '');

        const obj = eval('(' + json + ')');

        let output = `
# ${obj.LABEL}

${obj.DESC}
`;

        if (obj.COMPONENTS) {
            Object.keys(obj.COMPONENTS).forEach(key => {
                const o = obj.COMPONENTS[key];
                output += `
## ${o.LABEL}

> ${key}

${o.DESC}
`;
            });

        }

        console.log(output);
        fs.writeFileSync(readmeDir, output);
        console.log(readmeDir);
    }
});
