const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    configureWebpack: config => {
        // webpack配置，值位对象时会合并配置，为方法时会改写配置
        if (debug) { // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map';
        } else { // 生产环境配置
        }
        Object.assign(config, { // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@v': path.resolve(__dirname, './src/views'),
                    '@c': path.resolve(__dirname, './src/components'),
                    vue$: 'vue/dist/vue.esm.js',
                },
                extensions: [ '.js', '.vue', '.json', '.css' ],
            },
        });
    },
    chainWebpack: config => {
        config.module
            .rule('html')
            .test(/.vue$/)
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
    },
};
