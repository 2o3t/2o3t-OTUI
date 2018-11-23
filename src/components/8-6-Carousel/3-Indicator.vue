<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-notice>
            `indicator-position` 属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为 `outside` 则会显示在外部；设置为 `none` 则不会显示指示器。
        </ot-notice>
        <ot-row-group :theme="$otTheme" :fixable="false" :flex="false" :code="code">
            <ot-carousel indicator-position="outside">
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
