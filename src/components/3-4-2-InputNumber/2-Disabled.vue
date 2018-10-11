<template>
    <ot-section :theme="$otTheme" label="禁用状态" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input-number :theme="$otTheme" v-model="number" size="mini" disabled></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="small" disabled></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="normal" disabled></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="big" disabled></ot-input-number>
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
