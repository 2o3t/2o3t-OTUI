<template>
    <div ot v-bind="$otColors" class="ot-slider" :class="$style.root" :size="$otSize" :theme="$otTheme" :disabled="disabled" :vertical="vertical">
        <div ot v-bind="$otColors.runway" :class="$style.runway" :disabled="disabled" :vertical="vertical"
            @mousedown="handleRunwayClick">
            <div ot v-bind="$otColors.bar" :class="$style.bar" :disabled="disabled" :vertical="vertical" selected
                :style="barStyle"
                @mousedown="handleBarClick"></div>
            <div ot v-bind="$otColors.wrapper" :class="$style.wrapper" :size="$otSize" :disabled="disabled" :vertical="vertical"
                @mousedown="handleDown"
                :style="wrapperStyle"
                >
                <ot-title-tip placement="top-start" :theme="$otTheme" :size="$otSize" round :content="tipContent" :manual="true" :value="bMove" :refresh="refreshTip" :offsetX="offsetX" :offsetY="vertical ? verticalOffsetY : horizontalOffsetY" :width="width" :disabled="!tip" transition="">
                    <div ot v-bind="$otColors.btn" :class="$style.btn" :disabled="disabled" ref="wrapper"></div>
                </ot-title-tip>
                <!-- <div ot v-bind="$otColors.btn" :class="$style.btn" :disabled="disabled"></div> -->
            </div>
            <!-- range -->
            <div v-if="range" ot v-bind="$otColors.wrapper" :class="$style.wrapper" :size="$otSize" :disabled="disabled" :vertical="vertical"
                @mousedown="handleRangeDown"
                :style="wrapperRangeStyle"
                >
                <ot-title-tip placement="top-start" :theme="$otTheme" :size="$otSize" round :content="tipRangeContent" :manual="true" :value="bRangeMove" :refresh="refreshTip" :offsetX="offsetX" :offsetY="vertical ? verticalOffsetY : horizontalOffsetY" :width="width" :disabled="!tip" transition="">
                    <div ot v-bind="$otColors.btn" :class="$style.btn" :disabled="disabled"></div>
                </ot-title-tip>
            </div>
            <!-- step -->
            <ul :class="$style.step" v-if="showStep"
                @mousedown="handleStepClick">
                <li ot v-bind="$otColors.step" :class="$style.item" v-for="(item, index) in step" :key="item" :vertical="vertical"
                    v-if="calcXPercent(leftX) <= (index / step)"
                    :style="vertical ? { bottom: `${index / step * 100}%` } : { left: `${index / step * 100}%` }">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ot-slider',
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        model: {
            type: [ Number, Array ],
            required: true,
        },
        disabled: [ Boolean ],
        step: {
            type: [ Number ],
            default: 0,
        },
        showStep: [ Boolean ],
        range: [ Boolean ],
        vertical: [ Boolean ],
        min: {
            type: [ Number ],
            default: 0,
        },
        max: {
            type: [ Number ],
            default: 100,
        },
        tip: {
            type: [ Boolean ],
            default: true,
        },
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    runway: {
                        normal: [ 'light-f', 'light-b' ],
                    },
                    bar: {
                        selected: [ 'def-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    btn: {
                        normal: [ 'pri-b', 'light-bg' ],
                        disabled: [ 'def-bg-dis', 'def-b-dis' ],
                    },
                    step: {
                        normal: [ 'light-bg' ],
                    },
                };
            case 'light':
            default:
                return {
                    runway: {
                        normal: [ 'def-f', 'grey-bg' ],
                    },
                    bar: {
                        selected: [ 'def-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis', 'def-b-dis' ],
                    },
                    btn: {
                        normal: [ 'light-bg', 'pri-b' ],
                        disabled: [ 'def-bg-dis', 'def-b-dis' ],
                    },
                    step: {
                        normal: [ 'light-bg' ],
                    },
                };
        }
    },
    watch: {
        model(newV) {
            this._initData_(newV);
        },
    },
    data() {
        return {
            fn: null,
            upFn: null,
            lastX: 0,
            leftX: 0,
            bMove: false,
            lastRangeX: 0,
            leftRangeX: 0,
            bRangeMove: false,
            // tip 相关
            refreshTip: 0,
            offsetX: 0,
            offsetY: 0,
            width: 60,
        };
    },
    computed: {
        tipContent() {
            // tip 显示精度
            const left = this.calcXPercent(this.leftX);
            return this.calcOutputValue(left);
        },
        tipRangeContent() {
            // tip 显示精度
            const left = this.calcXPercent(this.leftRangeX);
            return this.calcOutputValue(left);
        },
        verticalOffsetY() {
            return -this.offsetY * 0.1;
        },
        horizontalOffsetY() {
            return this.offsetY * 1.6;
        },
        wrapperStyle() {
            const left = this.calcXPercent(this.leftX);
            const perX = left * 100;
            if (this.vertical) {
                return {
                    bottom: `${perX}%`,
                };
            }
            return {
                left: `${perX}%`,
            };
        },
        wrapperRangeStyle() {
            const left = this.calcXPercent(this.leftRangeX);
            const perX = left * 100;
            if (this.vertical) {
                return {
                    bottom: `${perX}%`,
                };
            }
            return {
                left: `${perX}%`,
            };
        },
        barStyle() {
            const style = { };
            if (this.range) {
                const left = this.calcXPercent(this.leftX);
                const leftRange = this.calcXPercent(this.leftRangeX);
                const perX = left * 100;
                const perRangeX = leftRange * 100;
                const minX = Math.min(perX, perRangeX);
                const maxX = Math.max(perX, perRangeX);
                if (this.vertical) {
                    style.bottom = `${minX}%`;
                    style.height = `${maxX - minX}%`;
                } else {
                    style.left = `${minX}%`;
                    style.width = `${maxX - minX}%`;
                }
            } else {
                const left = this.calcXPercent(this.leftX);
                const perX = left * 100;
                if (this.vertical) {
                    style.height = `${perX}%`;
                } else {
                    style.width = `${perX}%`;
                }
            }
            return style;
        },
        _allWidth() {
            if (this.vertical) {
                return this.$el.offsetHeight;
            }
            return this.$el.offsetWidth;
        },
        _rangeLength() {
            return Math.abs(this.max - this.min);
        },
    },
    methods: {
        _moveTip(/* action, x1, x2 */) {
            // console.log('action: ', action, x1, x2);
            this.refreshTip++;
        },
        _initData_(newV = this.model) {
            if (Array.isArray(newV)) {
                if (this.range) {
                    const one = newV[0];
                    if (isNaN(one)) return;
                    const two = newV[1];
                    if (isNaN(two)) return;
                    const preMinV = Math.min(one, two) / this._rangeLength;
                    const minX = this.calcLeftX(preMinV * this._allWidth);
                    const preMaxV = Math.max(one, two) / this._rangeLength;
                    const maxX = this.calcLeftX(preMaxV * this._allWidth);
                    if (this.leftX < this.leftRangeX) {
                        this.leftX = minX;
                        this.leftRangeX = maxX;
                    } else {
                        this.leftX = maxX;
                        this.leftRangeX = minX;
                    }
                } else {
                    const one = newV[0];
                    if (isNaN(one)) return;
                    const preV = one / this._rangeLength;
                    this.leftX = this.calcLeftX(preV * this._allWidth);
                }
            } else {
                if (isNaN(newV)) return;
                const preV = newV / this._rangeLength;
                this.leftX = this.calcLeftX(preV * this._allWidth);
            }
        },
        handleUp() {
            if (this.bMove || this.bRangeMove) {
                this.bMove = false;
                this.bRangeMove = false;
                this.updateModel();
                this._moveTip('up', this.leftX, this.leftRangeX);
            }
        },
        handleDown(e) {
            if (this.disabled) return;
            if (!this.vertical) {
                const clientX = e.clientX;
                if (!clientX) return;
                this.lastX = clientX - this.leftX;
            } else {
                const clientY = e.clientY;
                if (!clientY) return;
                this.lastX = clientY + this.leftX;
            }

            this.bMove = true;
            e.stopPropagation();

            this._moveTip('down', this.leftX, this.leftRangeX);
        },
        handleRangeDown(e) {
            if (this.disabled) return;
            if (!this.vertical) {
                const clientX = e.clientX;
                if (!clientX) return;
                this.lastRangeX = clientX - this.leftRangeX;
            } else {
                const clientY = e.clientY;
                if (!clientY) return;
                this.lastRangeX = clientY - this.leftRangeX;
            }

            this.bRangeMove = true;
            e.stopPropagation();

            this._moveTip('down', this.leftX, this.leftRangeX);
        },
        handleMouseMove(e) {
            if (this.bMove) {
                const leftX = this._mouseMove(e, this.lastX);
                if (isNaN(leftX)) return;
                this.leftX = leftX;
            }
            // range
            if (this.range) {
                if (this.bRangeMove) {
                    const leftX = this._mouseMove(e, this.lastRangeX);
                    if (isNaN(leftX)) return;
                    this.leftRangeX = leftX;
                }
            }

            if (this.bMove || this.bRangeMove) {
                this._moveTip('move', this.leftX, this.leftRangeX);
            }
        },
        _mouseMove(e, lastX) {
            e = e || window.event;
            if (!e) return;
            if (!this.vertical) {
                const clientX = e.clientX;
                if (!clientX) return;
                // 横轴坐标
                const left = clientX - lastX;
                return this.calcLeftX(left);
            }
            const clientY = e.clientY;
            if (!clientY) return;
            const bottom = -(clientY - lastX);
            return this.calcLeftX(bottom);
        },
        handleRunwayClick(e) { // 判断临近点
            this._clickJump(e);
        },
        handleBarClick(e) {
            this._clickJump(e, true);
        },
        handleStepClick(e) {
            this._clickJump(e, true);
        },
        _clickJump(e, bStep) {
            if (this.disabled) return;
            if (this.bMove || this.bRangeMove) {
                return;
            }
            e = e || window.event;
            const bVertical = this.vertical;
            let offsetX = bVertical ? e.offsetY : e.offsetX;
            if (bVertical) {
                offsetX = this._allWidth - offsetX;
                if (bStep) {
                    offsetX -= e.target.offsetTop;
                }
            } else {
                if (bStep) {
                    offsetX += e.target.offsetLeft;
                }
            }
            if (!offsetX) return;
            const leftX = this.calcLeftX(offsetX);
            if (isNaN(leftX)) return;
            if (!this.range) {
                this.leftX = leftX;
            } else {
                // 离谁近就给谁
                if (Math.abs(this.leftX - leftX) > Math.abs(this.leftRangeX - leftX)) {
                    this.leftRangeX = leftX;
                } else {
                    this.leftX = leftX;
                }
            }
            e.stopPropagation();

            this.updateModel();
        },
        calcLeftX(leftX) {
            if (!leftX) return 0;
            const allW = this._allWidth;
            if (leftX < 0) {
                leftX = 0;
            } else if (leftX > allW) {
                leftX = allW;
            } else if (this.step) {
                // 按步长走
                const stepLen = allW / this.step;
                const currStep = Math.round(leftX / allW * this.step);
                leftX = stepLen * currStep;
            }
            return leftX;
        },
        calcXPercent(leftX) {
            if (!leftX) return 0;
            const allW = this._allWidth;
            return leftX / allW;
        },
        calcOutputValue(v) {
            return Math.round(v * this._rangeLength);
        },
        registerListener() {
            if (this.fn) return;
            this.fn = this.$otUtils.throttle(this.handleMouseMove, 100, 10, this);
            this.$otUtils.addEventListener('mousemove', this.fn);
            if (this.upFn) return;
            this.upFn = this.$otUtils.throttle(this.handleUp, 100, 10, this);
            this.$otUtils.addEventListener('mouseup', this.upFn);
        },
        unregisterListener() {
            if (this.fn) {
                this.$otUtils.removeEventListener('mousemove', this.fn);
            }
            if (this.upFn) {
                this.$otUtils.removeEventListener('mouseup', this.upFn);
            }
        },
        updateModel() {
            let left = this.calcXPercent(this.leftX);
            if (this.range) {
                const one = left;
                const two = this.calcXPercent(this.leftRangeX);
                left = [ Math.min(one, two), Math.max(one, two) ];
            }
            if (Array.isArray(left)) {
                this.$emit('update', [ this.calcOutputValue(left[0]), this.calcOutputValue(left[1]) ]);
            } else {
                this.$emit('update', this.calcOutputValue(left));
            }
        },
        initFontSize() {
            if (this.$refs.wrapper) {
                const width = this.$otUtils.getStyle(this.$refs.wrapper, 'width');
                const height = this.$otUtils.getStyle(this.$refs.wrapper, 'height');
                this.offsetX = -parseInt(width) - this.width / 2 + 4;
                this.offsetY = -parseInt(height);
            }
        },
    },
    mounted() {
        this.registerListener();
        this._initData_();
        this.initFontSize();
    },
    beforeDestroy() {
        this.unregisterListener();
    },
};
</script>

<style lang="scss" module>
.root {
    @import './globals';
    min-width: 300px;
    box-sizing: border-box;
    position: relative;

    &[vertical] {
        min-width: auto;
        height: 200px;
    }

    .runway {
        width: 100%;
        height: 0.6em;
        margin: 1.2em 0;
        padding: 0;
        position: relative;
        border-radius: 0.3em;
        vertical-align: middle;
        box-sizing: border-box;
        cursor: pointer;

        &[vertical] {
            width: 0.6em;
            height: 100%;
            margin: 0 1.2em;
        }

        &:after {
            display: table;
            content: "";
            clear: both;
        }

        &[disabled] {
            cursor: not-allowed;
        }

        .bar {
            height: 100%;
            position: absolute;
            left: 0%;
            width: 0%;
            border-radius: 0.3em;
            padding: 0;
            margin: 0;
            box-sizing: border-box;

            &[vertical] {
                width: 100%;
                height: auto;
                left: auto;
                bottom: 0%;
                height: 0%;
            }
        }

        .wrapper {
            position: absolute;
            height: 2.6em;
            width: 2.6em;
            line-height: normal;
            box-sizing: border-box;
            z-index: 10;
            top: 50%;
            left: 0;
            transform: translate(-50%, -50%);
            background: transparent;
            text-align: center;
            user-select: none;
            cursor: pointer;
            vertical-align: middle;

            &:hover {
                cursor: grab;
            }

            &[vertical] {
                left: 50%;
                top: auto;
                bottom: 0%;
                transform: translate(-50%, 50%);
            }

            &[disabled] {
                cursor: not-allowed;
            }

            .btn {
                display: block;
                height: 1.5em;
                width: 1.5em;
                margin: auto;
                box-sizing: border-box;
                border-radius: 50%;
                user-select: none;
                transition: all .3s;
                border-width: 2px;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;

                &:after {
                    content: "";
                    height: 100%;
                    display: inline-block;
                    vertical-align: middle;
                }
            }

            &:hover .btn {
                transform: scale(1.2);
            }
        }

        .step {
            display: block;
            margin: 0;
            padding: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            box-sizing: border-box;

            .item {
                display: block;
                list-style: none;
                position: absolute;
                top: 1px;
                bottom: 1px;
                width: 0.4em;
                border-radius: 50%;
                box-sizing: border-box;

                &[vertical] {
                    left: 1px;
                    right: 1px;
                    top: auto;
                    bottom: auto;
                    height: 0.4em;
                }
            }
        }
    }

    @include __ot_size__;
}
</style>
