// 生成 compoents 的 index.js 文件
const fs = require('fs');

export default function autoLoad(base, modules) {

    fs.writeFileSync(`${base}/index.js`,
        `/* auto load */
${Object.keys(modules).map(name => {
        return `import ${name} from '${modules[name]}';`;
    }).join('\n')}

export default {

    ${Object.keys(modules).map(name => {
        return `${name},`;
    }).join('\n')}

    };
`
    );

}
