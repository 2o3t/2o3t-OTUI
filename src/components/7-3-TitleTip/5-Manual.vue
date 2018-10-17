<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-title-tip :theme="$otTheme" content="HI! 你好" manual>
                <span>请点击我</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" content="HI! 你好" manual>
                <ot-link>请点击我</ot-link>
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
