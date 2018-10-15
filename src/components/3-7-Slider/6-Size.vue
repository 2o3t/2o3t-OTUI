<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <div ot>当前值: {{ sliderValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-slider :theme="$otTheme" size="mini" v-model="sliderValue"></ot-slider>
            <ot-slider :theme="$otTheme" size="small" v-model="sliderValue"></ot-slider>
            <ot-slider :theme="$otTheme" size="normal" v-model="sliderValue"></ot-slider>
            <ot-slider :theme="$otTheme" size="big" v-model="sliderValue"></ot-slider>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            sliderValue: 66,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
