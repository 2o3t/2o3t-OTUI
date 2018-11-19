<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-alert color="info" round type="info" show-icon>
            <p slot="title">
                <ot-link color="info" target="_blank" href="//2o3t.github.io/2o3t-IconFont"><span>更多图标内容, 请查看字体图标库</span></ot-link>
            </p>
        </ot-alert>
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

