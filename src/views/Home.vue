<template>
    <div :class="$style.root" :theme="$otTheme">
        <ot-section :theme="$otTheme" :level="1"
            label="2O3T-UI"
            desc="">
            <ot-row-group :theme="$otTheme">

            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" :level="3"
            label="npm 安装"
            desc="使用 npm 的方式安装。">
            <ot-row-group :theme="$otTheme" background round>
                <ot-code :theme="$otTheme" :value="npm"></ot-code>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" :level="3"
            label="yarn 安装 (推荐)"
            desc="推荐使用 yarn 的方式安装。">
            <ot-row-group :theme="$otTheme" background round>
                <ot-code :theme="$otTheme" :value="yarn"></ot-code>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" :level="3"
            label="初始化引入"
            desc="你可以引入整个 2o3t-ui 组件。我们的图标库暂时依赖于 font-awesome。">
            <ot-row-group :theme="$otTheme" background round>
                <ot-code :theme="$otTheme" :value="init" lang="js"></ot-code>
            </ot-row-group>
        </ot-section>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            npm: 'npm install -S 2o3t-ui',
            yarn: 'yarn add 2o3t-ui',
            init: `import Vue from 'vue';
import 'font-awesome/css/font-awesome.min.css';

import '2o3t-ui/libs/styles.css'; // 引入样式
import OTUI from '2o3t-ui';

Vue.use(OTUI);

new Vue({
  el: '#app',
  render: h => h(App)
});`,

        };
    },
};
</script>

<style lang="scss" module>
.root {

}
</style>
