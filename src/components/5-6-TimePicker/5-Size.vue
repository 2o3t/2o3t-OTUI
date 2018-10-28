<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-time-picker :theme="$otTheme" size="mini" v-model="timepicker"></ot-time-picker>
            <ot-time-picker :theme="$otTheme" size="small" v-model="timepicker"></ot-time-picker>
            <ot-time-picker :theme="$otTheme" size="normal" v-model="timepicker"></ot-time-picker>
            <ot-time-picker :theme="$otTheme" size="big" v-model="timepicker"></ot-time-picker>
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
