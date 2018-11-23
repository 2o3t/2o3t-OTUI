<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :fixable="false" :flex="false" :code="code">
            <ot-carousel round>
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
