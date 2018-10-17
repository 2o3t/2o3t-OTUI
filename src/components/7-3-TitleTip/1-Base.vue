<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-title-tip :theme="$otTheme" content="这是我们的官网">
                <span>www.zyao89.cn</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" content="没有箭头" :arrow="false">
                <span>无箭头指示</span>
            </ot-title-tip>
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
