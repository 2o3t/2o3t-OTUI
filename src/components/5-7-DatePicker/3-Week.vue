<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-date-picker :theme="$otTheme" v-model="selectDate" week></ot-date-picker>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            selectDate: '',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
