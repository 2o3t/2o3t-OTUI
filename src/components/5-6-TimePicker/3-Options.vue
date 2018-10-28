<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-time-picker :theme="$otTheme" round v-model="timepicker" :options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
            }">
            </ot-time-picker>
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
