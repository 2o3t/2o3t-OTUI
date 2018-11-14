<template>
    <div ot class="ot-time-picker" :class="$style.root" :size="$otSize">
        <ot-select :class="$style.timer" :placeholder="placeholder" :round="round"
            icon="clock-o" :clearable="clearable"
            :readonly="readonly"
            v-model="selectValue"
            :list="options ? timePickerList : null">
            <div v-if="!options" :class="$style.selectableWheel" @click="(e) => e.stopPropagation()">
                <ot-wheel :class="$style.wheel" v-model="hourValue" :list="hourList" @change="handleWheelChange"></ot-wheel>
                <ot-wheel :class="$style.wheel" v-model="minuteValue" :list="minuteAndSecondList" @change="handleWheelChange"></ot-wheel>
                <ot-wheel :class="$style.wheel" v-model="secondValue" :list="minuteAndSecondList" @change="handleWheelChange"></ot-wheel>
            </div>
        </ot-select>

        <ot-select :class="$style.timer" v-if="double" :placeholder="_doublePlaceholder" :round="round"
            icon="clock-o" :clearable="clearable"
            :readonly="readonly"
            v-model="selectDoubleValue"
            :list="options ? timePickerList : null">
            <div v-if="!options" :class="$style.selectableWheel" @click="(e) => e.stopPropagation()">
                <ot-wheel :class="$style.wheel" v-model="hourDoubleValue" :list="hourList" @change="handleWheelChange"></ot-wheel>
                <ot-wheel :class="$style.wheel" v-model="minuteDoubleValue" :list="minuteAndSecondList" @change="handleWheelChange"></ot-wheel>
                <ot-wheel :class="$style.wheel" v-model="secondDoubleValue" :list="minuteAndSecondList" @change="handleWheelChange"></ot-wheel>
            </div>
        </ot-select>
    </div>
</template>

<script>
export default {
    name: 'ot-time-picker',
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        // 数据源 `v-model`
        model: {
            type: [ String, Number, Array ],
            default() {
                return '';
            },
        },
        // 固定时间点选项
        options: {
            type: Object,
            // default() {
            //     return {
            //         start: '08:30',
            //         step: '00:15',
            //         end: '18:30',
            //     };
            // },
        },
        // 时间格式化输出
        format: {
            type: [ String ],
            default: 'HH:mm:ss',
        },
        // 输入框的提示文字内容
        placeholder: {
            type: String,
            default: '请选择',
        },
        // double 模式下的文字提示内容
        doublePlaceholder: [ String ],
        // 输入框只读
        readonly: [ Boolean ],
        // double 模式
        double: [ Boolean ],
        // 是否带有清除按钮
        clearable: {
            type: [ Boolean ],
            default: false,
        },
    },
    data() {
        return {
            selectValue: this.double && Array.isArray(this.model) ? this.model[0] : this.model,
            selectDoubleValue: this.double && Array.isArray(this.model) ? this.model[1] : '',

            hourValue: '',
            minuteValue: '',
            secondValue: '',

            hourDoubleValue: '',
            minuteDoubleValue: '',
            secondDoubleValue: '',
        };
    },
    watch: {
        model(nv) {
            if (this.double && Array.isArray(nv)) {
                this.selectValue = this.model[0];
                this.selectDoubleValue = this.model[1];
            } else {
                this.selectValue = this.model;
                this.selectDoubleValue = '';
            }
        },
        selectValue(nv, ov) {
            if (nv !== ov) {
                this.handleSelectChange();
            }
        },
        selectDoubleValue(nv, ov) {
            if (nv !== ov) {
                this.handleSelectChange();
            }
        },
    },
    computed: {
        moment() {
            const moment = this.$otUtils.getOtPlugin('moment');
            if (!moment) {
                return;
            }
            return moment;
        },
        _doublePlaceholder() {
            return this.doublePlaceholder || this.placeholder;
        },
        _format() {
            if (/^[Hms:]*$/igm.test(this.format)) {
                return this.format;
            }
            return 'HH:mm:ss';
        },
        startTime() {
            const start = this.options && this.options.start || '00:00:00';
            return this.timeParser(start);
        },
        endTime() {
            const end = this.options && this.options.end || '24:00:00';
            return this.timeParser(end);
        },
        stepTime() {
            const step = this.options && this.options.step || '01:00:00';
            return this.timeParser(step);
        },
        timePickerList() {
            const startTime = this.startTime.join(':');
            const start = this.moment(startTime, 'HH:mm:ss');

            const stepTime = this.stepTime.join(':');
            const step = this.moment(stepTime, 'HH:mm:ss');

            const endTime = this.endTime.join(':');
            const end = this.moment(endTime, 'HH:mm:ss');

            const timers = [];
            while (start.isBefore(end)) {
                const time = start.format(this._format);
                timers.push(time);
                start.add(step.hours(), 'h').add(step.minutes(), 'm').add(step.seconds(), 's');
            }

            return timers;
        },
        hourList() {
            const hours = [];
            let i = 0;
            while (i < 24) {
                hours.push(this.pad(i));
                i++;
            }
            return hours;
        },
        minuteAndSecondList() {
            const array = [];
            let i = 0;
            while (i < 60) {
                array.push(this.pad(i));
                i++;
            }
            return array;
        },
    },
    methods: {
        pad(i) {
            if (i < 10) {
                return `0${i}`;
            }
            return `${i}`;
        },
        timeParser(time) {
            const timeArr = time.split(':');
            if (timeArr.length < 2) {
                return [ 0, 0, 0 ];
            } else if (timeArr.length === 2) {
                return [ parseInt(timeArr[0]), parseInt(timeArr[1]), 0 ];
            }
            return [ parseInt(timeArr[0]), parseInt(timeArr[1]), parseInt(timeArr[2]) ];
        },
        formatValue(h, m, s) {
            const value = this.moment().hour(h).minute(m)
                .second(s)
                .format(this._format);
            return value;
        },
        handleWheelChange() {
            this.hourValue = this.hourValue || '00';
            this.minuteValue = this.minuteValue || '00';
            this.secondValue = this.secondValue || '00';
            const value = this.formatValue(this.hourValue, this.minuteValue, this.secondValue);
            this.selectValue = value;

            if (this.double) {
                this.hourDoubleValue = this.hourDoubleValue || '00';
                this.minuteDoubleValue = this.minuteDoubleValue || '00';
                this.secondDoubleValue = this.secondDoubleValue || '00';
                const doubleValue = this.formatValue(this.hourDoubleValue, this.minuteDoubleValue, this.secondDoubleValue);
                this.selectDoubleValue = doubleValue;
            }
        },
        handleSelectChange() {
            const value = this.selectValue.split(':');
            if (value && value.length) {
                this.hourValue = value[0] || '';
                this.minuteValue = value[1] || '';
                this.secondValue = value[2] || '';
            }

            if (this.double) {
                const value = this.selectDoubleValue.split(':');
                if (value && value.length) {
                    this.hourDoubleValue = value[0] || '';
                    this.minuteDoubleValue = value[1] || '';
                    this.secondDoubleValue = value[2] || '';
                }
            }

            if (this.double) {
                this.$emit('update', [ this.selectValue, this.selectDoubleValue ]); // double 模式下 `v-model` 数据源更新
            } else {
                this.$emit('update', this.selectValue); // `v-model` 数据源更新
            }
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    position: relative;
    box-sizing: border-box;

    @include __ot_size__;

    .timer {
        display: inline-block;

        &:first-child {
            margin-right: 1em;
        }
    }

    .selectableWheel {
        display: flex;
        flex-direction: row;
        padding-top: 5px;
        justify-content: space-between;

        .wheel {
            flex: 1 1 auto;
        }
    }
}
</style>

