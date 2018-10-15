<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <div ot>当前值: {{ sliderValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-slider :theme="$otTheme" v-model="sliderValue" vertical></ot-slider>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            sliderValue: 58,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
