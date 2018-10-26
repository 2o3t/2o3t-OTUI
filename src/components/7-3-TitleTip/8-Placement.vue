<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-title-tip :theme="$otTheme" content="left" placement="left">
                <span>left</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" content="right" placement="right">
                <span>right</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" content="top" placement="top">
                <span>top</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" content="bottom" placement="bottom">
                <span>bottom</span>
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
