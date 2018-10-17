<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-title-tip :theme="$otTheme" size="mini" content="M">
                <span>Mini</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" size="small" content="S">
                <span>Small</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" size="normal" content="N">
                <span>Normal</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" size="big" content="B">
                <span>Big</span>
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
