<template>
    <div :class="$style.root" :theme="$otTheme">

        <ot-section :theme="$otTheme" label="OT-Slider">
            <ot-row-group :theme="$otTheme">
                <ot-slider :theme="$otTheme" v-model="sliderValue"></ot-slider>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-slider :theme="$otTheme" v-model="sliderValue" disabled></ot-slider>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-slider :theme="$otTheme" v-model="sliderStepValue" :step="10" showStep></ot-slider>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-slider :theme="$otTheme" v-model="sliderRangeValue" range></ot-slider>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-slider :theme="$otTheme" v-model="sliderRangeStepValue" :step="4" showStep range></ot-slider>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-slider :theme="$otTheme" v-model="sliderValue" vertical></ot-slider>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Select-UP">
            <ot-row-group :theme="$otTheme">
                <ot-select :theme="$otTheme" v-model="selectValue">
                    <span name="up">lsit</span>
                </ot-select>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Select-LIST">
            <ot-row-group :theme="$otTheme">
                <ot-select :theme="$otTheme" v-model="selectValue" :list="selectList">
                </ot-select>
                <ot-select :theme="$otTheme" v-model="selectValue" :list="selectList">
                    <span slot="item" slot-scope="{ item }">
                        {{ item }} slotScope
                    </span>
                </ot-select>
            </ot-row-group>
        </ot-section>

    </div>
</template>

<script>
export default {
    name: 'ui-page',
    data() {
        return {
            number: 0,
            selectValue: '',
            selectList: [ '我是大名', '我是二名', '我是小明' ],
            sliderValue: 0,
            sliderStepValue: 0,
            sliderRangeValue: [ 0, 1 ],
            sliderRangeStepValue: [ 0, 1 ],
        };
    },
};
</script>

<style lang="scss" module>
.root {
    padding: 10px 10px 30px;
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
