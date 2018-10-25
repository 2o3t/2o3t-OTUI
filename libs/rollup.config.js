import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
const uglify = require('rollup-plugin-uglify').uglify;
// const eslint = require('rollup-plugin-eslint').eslint;

// 新增的postcss
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

import VuePlugin from 'rollup-plugin-vue';

const DIST = 'dist';

import './build/init';
const path = require('path');

const config = {
    input: path.resolve(__dirname, './index.js'),
    external: [ 'highlight.js', 'moment' ],
    output: {
        // dir: path.resolve(process.cwd(), `./${DIST}`),
        // format: 'esm', // umd, esm
        file: path.resolve(process.cwd(), `./${DIST}/index.js`),
        format: 'umd', // umd, esm
        name: 'OTUI', // 打包后的全局变量，如浏览器端 window.ReactRedux
        globals: {
            'highlight.js': 'hljs', // 这跟external 是配套使用的，指明global.React即是外部依赖react
            moment: 'moment',
        },
    },
    experimentalCodeSplitting: true,
    plugins: [
        VuePlugin({
            compileTemplate: true,
            htmlMinifier: {
                customAttrSurround: [[ /@/, new RegExp('') ], [ /:/, new RegExp('') ]],
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        // 新增的postcss
        postcss({
            plugins: [ autoprefixer, cssnano ],
            extract: `${DIST}/styles.css`, // 输出路径
        }),
        resolve({
            module: true, // ES6模块尽可能使用 ‘module’字段
            jsnext: true, // 该属性是指定将Node包转换为ES2015模块
            // main 和 browser 属性将使插件决定将那些文件应用到bundle中
            main: true, // Default: true
            browser: true, // Default: false
        }),
        commonjs({
            include: 'node_modules/**', // 包括
            exclude: [], // 排除
        }),
        // eslint({
        //     exclude: [
        //         'src/styles/**',
        //     ],
        // }),
        json(),
        babel({
            exclude: '**/node_modules/**', // 排除引入的库
            runtimeHelpers: true, // 配置runtime，不设置会报错
            presets: [
                [
                    'env', {
                        modules: false,
                        targets: {
                            browsers: [ '> 1%', 'last 2 versions', 'not ie <= 8' ],
                        },
                        useBuiltIns: 'usage',
                    },
                ],
                'stage-2',
            ],
            plugins: [
                'transform-runtime',
                'transform-vue-jsx',
                'external-helpers',
            ],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        uglify({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false,
            },
        }),
    ],
};

export default config;
