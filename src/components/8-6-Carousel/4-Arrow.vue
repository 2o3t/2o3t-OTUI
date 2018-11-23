<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-notice>
            arrow属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将arrow设置为always，则会一直显示；设置为never，则会一直隐藏。
        </ot-notice>
        <ot-row-group :theme="$otTheme" :fixable="false" :flex="false" :code="code">
            <ot-carousel :interval="5000" arrow="always">
                <ot-carousel-item v-for="item in 'abcd'.split('')" :key="item">
                    <h3>{{ item }}</h3>
                </ot-carousel-item>
            </ot-carousel>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>

<style lang="scss" scoped>
.ot-row-group {
    text-align: center;
}
.ot-carousel-item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 23em;
    vertical-align: middle;
    margin: 0;
}

.ot-carousel-item:nth-child(2n) {
    background-color: #99a9bf;
}

.ot-carousel-item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
