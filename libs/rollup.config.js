import init from '../.2o3t/libs/build/init';
const rollupConfig = init({
    root: __dirname,
});

const DIST = 'dist';

const config = rollupConfig({
    input: './index.js',
    root: __dirname,
    dist: DIST,
    external: [
        'vue',
    ],
    format: 'umd', // umd, esm
    name: 'OTUI', // 打包后的全局变量，如浏览器端 window.ReactRedux
    globals: { // 这跟external 是配套使用的，指明global.React即是外部依赖react
        Vue: 'vue',
    },
});

export default config;
