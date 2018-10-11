<template>
    <ot-section :theme="$otTheme" label="基础用法" prefix="#" section
        desc="提供了 mini、small、normal、big 四种尺寸的数字输入框">
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input-number :theme="$otTheme" v-model="number" size="mini"></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="small"></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="normal"></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="big"></ot-input-number>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            number: 0,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
