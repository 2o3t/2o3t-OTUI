<template>
    <div ot class="ot-date-panel" :class="$style.root" :size="$otSize">
        <div ot v-bind="$otColors.header" :class="$style.header">
            <div :class="[$style.flexItem, $style.left]">
                <ot-link @click="lastYear">
                    <ot-icon :class="$style.row" icon="angle-double-left"></ot-icon>
                </ot-link>
                <ot-link @click="lastMonth">
                    <ot-icon :class="$style.row" icon="angle-left"></ot-icon>
                </ot-link>
            </div>
            <div :class="[$style.flexItem, $style.title]">
                {{ displayDate.format("YYYY-MM-DD") }}
            </div>
            <div :class="[$style.flexItem, $style.right]">
                <ot-link @click="nextMonth">
                    <ot-icon :class="$style.row" icon="angle-right"></ot-icon>
                </ot-link>
                <ot-link @click="nextYear">
                    <ot-icon :class="$style.row" icon="angle-double-right"></ot-icon>
                </ot-link>
            </div>
        </div>
        <div :class="$style.panel">
            <table>
                <!-- tou -->
                <thead>
                    <tr>
                        <th v-for="({ key, label }) in _weeks" :key="key">
                            {{ label }}
                        </th>
                    </tr>
                </thead>
                <!-- body -->
                <tbody v-if="week">
                    <tr v-for="(items, index) in monthDays" :key="index"
                        ot v-bind="$otColors.week" @click="handleSelectWeek(items)"
                        :selected="items[0].isSame(currentWeek[0], 'week')">
                        <td v-for="(item, key) in items" :key="`${index}-${key}`">
                            <div ot v-bind="$otColors.day" :class="$style.day"
                                :disabled="!item.isSame(displayDate, 'month')">
                                {{ item.format('DD') }}
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <!-- day -->
                    <tr v-for="(items, index) in monthDays" :key="index"
                        ot v-bind="$otColors.week">
                        <td v-for="(item, key) in items" :key="`${index}-${key}`">
                            <div ot v-bind="$otColors.day"
                                :class="$style.day" @click="handleSelectDay(item)"
                                :disabled="!item.isSame(displayDate, 'month')"
                                :selected="item.isSame(currentDate, 'day')">
                                {{ item.format('DD') }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="footer" ot v-bind="$otColors.footer" :class="$style.footer" >
            <ot-link @click="handleTodayClick"><span>此刻</span></ot-link>
            <ot-button @click="handleOKClick">确认</ot-button>
        </div>
    </div>
</template>

<script>
import theme from './OtDatePanelTheme';
export default {
    name: 'ot-date-panel',
    mixins: [ theme ],
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        model: {
            type: [ String ],
            default: '',
        },
        weeksLabel: {
            type: Array,
            default() {
                return [ '日', '一', '二', '三', '四', '五', '六' ];
            },
        },
        format: {
            type: String,
            default: 'YYYY-MM-DD',
        },
        week: [ Boolean ],
        footer: [ Boolean ],
    },
    data() {
        return {
            currentDate: null,
            currentWeek: [],

            displayDate: null,
            monthDays: [],
        };
    },
    created() {
        // 初始化
        if (this.model) {
            this.currentDate = this.moment(this.model, this._format);
        } else {
            this.currentDate = this.moment();
        }
        this.currentWeek = this._calcThisDayToWeek(this.currentDate);
        this.displayDate = this.moment(this.currentDate);
        this.monthDays = this._calcMonthDays();
    },
    computed: {
        moment() {
            const moment = this.$otUtils.getOtPlugin('moment');
            if (!moment) {
                return;
            }
            return moment;
        },
        _format() {
            if (/^[YMDHSW:-]*$/igm.test(this.format)) {
                return this.format;
            }
            return 'YYYY-MM-DD';
        },
        _weeks() {
            const WEEKS_LABEL = this.weeksLabel;
            const weeks = [];
            let i = 0;
            while (i < 7) {
                weeks.push({
                    key: i,
                    label: WEEKS_LABEL[i],
                });
                i++;
            }
            return weeks;
        },
    },
    methods: {
        _calcThisDayToWeek(m) {
            const clone = this.moment(m);
            const w = clone.days();
            const first = clone.subtract(w, 'days');
            const weeks = [];
            let i = 0;
            while (i < 7) {
                first.add(i, 'days');
                weeks.push(this.moment(first));
                i++;
            }
            return weeks;
        },
        _calcMonthDays() {
            const clone = this.moment(this.displayDate);
            const daysInMonth = clone.daysInMonth();
            clone.date(1);
            const firstWeek = clone.day();
            const days = [];
            let i = 0;
            while (i < firstWeek) {
                if (!days[0]) {
                    days[0] = [];
                }
                days[0][i] = this.moment(clone).subtract(firstWeek - i, 'days');
                i++;
            }
            let j = 0;
            while (j < daysInMonth) {
                const a = Math.floor((j + firstWeek) / 7);
                if (!days[a]) {
                    days[a] = [];
                }
                days[a][(j + firstWeek) % 7] = this.moment(clone).date(j + 1);
                // days[a][(j + firstWeek) % 7] = j + 1;
                j++;
            }
            // 补齐
            const lastRow = days.length - 1;
            const len = 7 - days[lastRow].length;
            let q = 0;
            while (q < len) {
                q++;
                const mom = this.moment(clone).date(daysInMonth);
                days[lastRow].push(mom.add(q, 'days'));
            }
            return days;
        },
        lastMonth() {
            const displayDate = this.displayDate;
            displayDate.subtract(1, 'months');
            this.refresh();
        },
        nextMonth() {
            const displayDate = this.displayDate;
            displayDate.add(1, 'months');
            this.refresh();
        },
        lastYear() {
            const displayDate = this.displayDate;
            displayDate.subtract(1, 'years');
            this.refresh();
        },
        nextYear() {
            const displayDate = this.displayDate;
            displayDate.add(1, 'years');
            this.refresh();
        },
        refresh() {
            this.monthDays = this._calcMonthDays();
        },
        handleSelectDay(item) {
            if (!item.isSame(this.displayDate, 'month')) {
                if (item.isBefore(this.displayDate, 'month')) {
                    this.lastMonth();
                } else if (item.isAfter(this.displayDate, 'month')) {
                    this.nextMonth();
                }
            }
            this.currentDate = item;
            this.currentWeek = this._calcThisDayToWeek(item);

            this.updateModel();
        },
        handleSelectWeek(items) {
            this.currentDate = items[0];
            this.currentWeek = items;

            this.updateModel();
        },
        updateModel() {
            if (this.week) {
                this.$emit('update', this.currentWeek[0].format(this._format));
                this.$emit('change', this.currentWeek);
            } else {
                this.$emit('update', this.currentDate.format(this._format));
                this.$emit('change', this.currentDate);
            }
        },
        handleOKClick() {
            this.$emit('ok');
        },
        handleTodayClick() {
            this.currentDate = this.moment();

            if (this.week) {
                this.currentWeek = this._calcThisDayToWeek(this.currentDate);
            }

            this.displayDate = this.moment(this.currentDate);
            this.refresh();

            this.updateModel();
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    position: relative;
    box-sizing: border-box;
    min-width: 24em;
    text-align: center;

    @include __ot_size__;

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1em;

        .row {
            padding: 0.5em;
        }

        .flexItem {
            display: inline-block;
            flex: 0 0 auto;
            vertical-align: middle;
            padding: 0em 0.5em;
        }

        .title {
            flex: 1 1 auto;
        }
    }

    .panel {
        padding: 1em 0;

        & table {
            border: none;
            position: relative;
            width: 100%;
            word-break: keep-all;/* 不换行 */
            white-space: nowrap;/* 不换行 */
            table-layout: fixed;
        }

        & th, & td {
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            white-space: nowrap;
            width: auto;
        }

        .day {
            text-align: center;
            margin: auto;
            width: 2em;
            height: 2em;
        }
    }

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1em;
    }
}
</style>
