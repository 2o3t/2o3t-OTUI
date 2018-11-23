<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-notice>
            结合使用`ot-carousel`和`ot-carousel-item`标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在`ot-carousel-item`标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置trigger属性为click，可以达到点击触发的效果。
        </ot-notice>
        <ot-row-group :theme="$otTheme" :fixable="false" :flex="false" :code="code">
            <ot-row :gutter="10">
                <ot-col :md="12">
                    <p class="demonstration">默认 Hover 指示器触发</p>
                    <ot-carousel height="150px">
                        <ot-carousel-item v-for="item in 'abcd'.split('')" :key="item">
                            <h3>{{ item }}</h3>
                        </ot-carousel-item>
                    </ot-carousel>
                </ot-col>
                <ot-col :md="12">
                    <p class="demonstration">Click 指示器触发</p>
                    <ot-carousel height="150px" trigger="click">
                        <ot-carousel-item v-for="item in 'abcd'.split('')" :key="item">
                            <h3>{{ item }}</h3>
                        </ot-carousel-item>
                    </ot-carousel>
                </ot-col>
            </ot-row>
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
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.ot-carousel-item:nth-child(2n) {
    background-color: #99a9bf;
}

.ot-carousel-item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
