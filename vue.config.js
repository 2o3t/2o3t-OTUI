const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

// initIndexs('components');
// initIndexs('designs');
require('./bin/autoBuildIndex')([
    'components',
    'designs',
]);

module.exports = {
    baseUrl: debug ? '/' : '/2o3t-ui/',
    outputDir: 'webs',
    configureWebpack: config => {
        // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (debug) { // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map';
        } else { // 生产环境配置
            const externals = config.externals || {};
            Object.assign(config, {
                externals: Object.assign(externals, {
                    'highlight.js': 'hljs',
                    'markdown-it': 'markdownit',
                    clipboard: 'clipboard-polyfill',
                }),
            });
        }
        Object.assign(config, { // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@router': path.resolve(__dirname, './src/router'),
                    '@assets': path.resolve(__dirname, './src/assets'),
                    '@views': path.resolve(__dirname, './src/views'),
                    '@components': path.resolve(__dirname, './src/components'),
                    '@designs': path.resolve(__dirname, './src/designs'),
                    vue$: 'vue/dist/vue.esm.js',
                    '@libs': path.resolve(__dirname, './libs'),
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
