<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="基础用法" section>
        <ot-row-group :theme="$otTheme" :code="code">

        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            radioSelect: 'A',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
