<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-time-picker :theme="$otTheme" v-model="timepicker" double></ot-time-picker>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            timepicker: '',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
