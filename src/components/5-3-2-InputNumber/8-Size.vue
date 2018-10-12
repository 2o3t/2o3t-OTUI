<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input-number :theme="$otTheme" v-model="number" size="mini"></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="small" round></ot-input-number>
            <ot-input-number :theme="$otTheme" v-model="number" size="normal"></ot-input-number>
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
