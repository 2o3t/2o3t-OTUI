<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-badge :value="20">123</ot-badge>
            <ot-badge :value="200" :max="99">123</ot-badge>
            <ot-badge value="new">new</ot-badge>
            <ot-badge value="hot">hot</ot-badge>
            <ot-badge dot>DOT</ot-badge>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            // TODO 待整理
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
