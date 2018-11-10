<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <div :style="{ width: '100px', height: '24px', backgroundColor: color }"></div>
            <ot-color-picker :theme="$otTheme" round v-model="color" @onChange="changeColor"></ot-color-picker>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            color: '#CCCCCC',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    methods: {
        changeColor() {

        },
    },
};
</script>
