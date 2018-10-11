<template>
    <ot-section :theme="$otTheme" label="圆角" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input-number :theme="$otTheme" v-model="number" size="mini" round></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="small" round></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="normal" round></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="big" round></ot-input-number>
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
