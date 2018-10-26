<template>
    <div :class="$style.root" :theme="$otTheme">

        <ot-section :theme="$otTheme" label="OT-Table">
            <ot-row-group :theme="$otTheme">
                <ot-table :list="tableList">
                    <ot-table-column name="name" label="名称"></ot-table-column>
                    <ot-table-column name="age" label="年龄"></ot-table-column>
                    <ot-table-column name="address" label="地址"></ot-table-column>
                    <ot-table-column name="other" label="其它"></ot-table-column>
                </ot-table>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-DatePicker">
            <ot-row-group :theme="$otTheme">
                <ot-date-picker :theme="$otTheme"></ot-date-picker>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-date-picker :theme="$otTheme" footer week></ot-date-picker>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-TimePicker">
            <ot-row-group :theme="$otTheme">
                <ot-time-picker :theme="$otTheme" :options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                 }"
                 v-model="timepicker1" format="HH:mm"></ot-time-picker>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-time-picker :theme="$otTheme" round v-model="timepicker2"></ot-time-picker>
            </ot-row-group>
            <ot-row-group :theme="$otTheme">
                <ot-time-picker :theme="$otTheme" round v-model="timepicker3" double></ot-time-picker>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-ColorPicker">
            <ot-row-group :theme="$otTheme">
                <ot-color-picker :theme="$otTheme" round v-model="color" @onChange="changeColor"></ot-color-picker>
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
            timepicker1: '',
            timepicker2: '',
            timepicker3: '',

            wheelValue: '1',

            color: '#CCCCCC',

            transferSelectItems: [],
            listSelectItems: [],

            number: 0,
            selectValue: '',
            selectList: [ '我是大名', '我是二名', '我是小明' ],
            sliderValue: 0,
            sliderStepValue: 0,
            sliderRangeValue: [ 0, 1 ],
            sliderRangeStepValue: [ 0, 1 ],

        };
    },
    computed: {
        tableList() {
            const list = [];
            for (let i = 0; i < 10; i++) {
                list.push({
                    name: `name_${i}`,
                    age: `age${i}`,
                    address: `address_${i}`,
                    other: `other_${i}`,
                });
            }
            return list;
        },
        list() {
            const list = [];
            for (let i = 0; i < 10; i++) {
                list.push({
                    name: `name_${i}`,
                    value: `value_${i}`,
                });
            }
            return list;
        },
    },
    methods: {
        changeColor() {

        },
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
