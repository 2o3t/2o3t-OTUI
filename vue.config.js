const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    baseUrl: debug ? '/' : '/ot-ui/',
    outputDir: 'webs',
    configureWebpack: config => {
        // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (debug) { // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map';
        } else { // 生产环境配置
            Object.assign(config, {
                externals: {
                    'highlight.js': 'hljs',
                    'markdown-it': 'markdownit',
                    clipboard: 'clipboard-polyfill',
                },
            });
        }
        Object.assign(config, { // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@v': path.resolve(__dirname, './src/views'),
                    '@c': path.resolve(__dirname, './src/components'),
                    '@d': path.resolve(__dirname, './src/designs'),
                    '@otui': path.resolve(__dirname, './libs'),
                    vue$: 'vue/dist/vue.esm.js',
                },
                extensions: [ '.js', '.vue', '.json', '.css' ],
            },
        });
    },
    chainWebpack: config => {
        config.module
            .rule('html')
            .test(/.vue$/i)
            .include
            .add(path.resolve(__dirname, './src/components'))
            .end()
            .use()
            .loader(path.resolve(__dirname, './loaders/template.js'))
            .end();
        // config.module
        //     .rule('html')
        //     .test(/\.vue$/)
        //     .include
        //     .add(path.resolve(__dirname, './src/components'))
        //     .end()
        //     .use()
        //     .loader(path.resolve(__dirname, './loaders/template.js'))
        //     .end()
        //     .use('vue-loader')
        //     .loader('vue-loader')
        //     .end();

        // markdown
        config.module
            .rule('markdown')
            .test(/.md$/i)
            .use()
            .loader(path.resolve(__dirname, './loaders/markdown/index.js'))
            .end();

        config.module
            .rule('UIViews')
            .test(/.js$/i)
            .include
            .add(path.resolve(__dirname, './src/views'))
            .end()
            .use()
            .loader(path.resolve(__dirname, './loaders/mainCss.js'))
            .end();
    },
};


const fs = require('fs');
const initIndexs = (dirName = 'components') => {
    const compPath = path.join(process.cwd(), 'src', dirName);
    const components = fs.readdirSync(compPath);
    components.filter(name => {
        return /^\d+/ig.test(name);
    }).map(name => {
        return path.join(compPath, name);
    }).forEach(p => {
        const exists = fs.existsSync(path.join(p, 'README.md'));
        const data = `const CompFactory = require('../CompFactory').default;
const files = require.context('.', false, /\.vue$/);
const modules = CompFactory.requireModules(files);

import Config from ${exists ? "'./README.md?inject=true&name=readme'" : "'./config'"};
const template = CompFactory.getTemplate(Config, modules);

export default {
    template,
    components: modules,
};
`;
        fs.writeFileSync(path.join(p, 'index.js'), data);
    });
};
initIndexs('components');
initIndexs('designs');
