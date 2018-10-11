<template>
    <ot-section :theme="$otTheme" label="只读状态" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input-number :theme="$otTheme" v-model="number" size="mini" readonly></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="small" readonly></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="normal" readonly></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="big" readonly></ot-input-number>
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
