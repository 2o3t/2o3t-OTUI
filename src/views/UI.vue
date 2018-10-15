<template>
    <div :class="$style.root" :theme="$otTheme">

        <ot-section :theme="$otTheme" label="OT-Form">
            <ot-row-group :theme="$otTheme">
                <ot-form v-model="formValue" :rules="formRules">
                    <ot-form-item label="name" name="name">
                        <ot-input :theme="$otTheme" v-model="formValue.name"></ot-input>
                    </ot-form-item>
                    <ot-form-item label="sex" name="sex">
                        <ot-radio :theme="$otTheme" v-model="formValue.sex" value="m">m</ot-radio>
                        <ot-radio :theme="$otTheme" v-model="formValue.sex" value="w">w</ot-radio>
                    </ot-form-item>
                </ot-form>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Tip">
            <ot-row-group :theme="$otTheme">
                <ot-tip :class="$style.test" :theme="$otTheme">
                    <span>Hover</span>
                    <div slot="tip">
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                    </div>
                </ot-tip>
                <ot-title-tip :theme="$otTheme" round>
                    <span>Hover</span>
                    <div slot="title">
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                    </div>
                </ot-title-tip>
            </ot-row-group>
        </ot-section>

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

            formValue: {
                name: '',
                sex: '',
            },
            formRules: {
                name: [{
                    required: true,
                    trigger: [ 'blur' ],
                }],
                sex: [{
                    required: true,
                    trigger: [ 'blur' ],
                }],
            },
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

    .test {
        position: fixed;
        z-index: 1000;
    }
}
</style>
