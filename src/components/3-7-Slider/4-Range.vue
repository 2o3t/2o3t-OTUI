<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <div ot>当前值: {{ sliderRangeValue.join(', ') }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-slider :theme="$otTheme" v-model="sliderRangeValue" range></ot-slider>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            sliderRangeValue: [ 28, 70 ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
