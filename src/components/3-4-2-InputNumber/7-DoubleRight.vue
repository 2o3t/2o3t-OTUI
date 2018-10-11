<template>
    <ot-section :theme="$otTheme" label="单边调节器" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input-number :theme="$otTheme" v-model="number" size="mini" double></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="small" double></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="normal" double></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="big" double></ot-input-number>
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
