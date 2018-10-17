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
                <ot-tip :theme="$otTheme">
                    <span>Hover</span>
                    <div slot="tip">
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                    </div>
                </ot-tip>
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
}
</style>
