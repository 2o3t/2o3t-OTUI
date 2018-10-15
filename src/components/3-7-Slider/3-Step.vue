<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <div ot>不显示间断点: {{ sliderStepValue1 }}</div>
            <div ot>显示间断点: {{ sliderStepValue2 }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-slider :theme="$otTheme" v-model="sliderStepValue1" :step="4"></ot-slider>
            <ot-slider :theme="$otTheme" v-model="sliderStepValue2" :step="10" showStep></ot-slider>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            sliderStepValue1: 25,
            sliderStepValue2: 0,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
