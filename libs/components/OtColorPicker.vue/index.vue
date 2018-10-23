<template>
    <ot-tip ot class="ot-color-picker-tip" :class="$style.root" manual clickable :refresh="refresh" @change="handleTipOnChange">
        <div ot class="ot-color-picker" v-ot-bind="$otColors.box" :class="$style.box" :size="$otSize" :round="round">
            <div ot v-ot-bind="$otColors.box" :class="$style.select" :size="$otSize" :round="round" :style="bgStyle">
                <ot-icon icon="angle-down"></ot-icon>
            </div>
        </div>
        <div ot v-ot-bind="$otColors.tip" slot="tip" :size="$otSize" :theme="$otTheme" class="ot-title-tip-popper" :round="round">
            <!-- 颜色面板 -->
            <div :class="$style.dropdown">
                <div :class="$style.wrapper">
                    <div :class="$style.slider" ref="slider" @mousedown="handleSliderMouseDown">
                        <div :class="$style.bar"></div>
                        <div :class="$style.thumb" :style="thumbStyle"></div>
                    </div>
                    <div :class="$style.svpanel" ref="svpanel" @mousedown="handleSvpanelMouseDown" :style="rgbStyle">
                        <div :class="[$style.mask, $style.white]"></div>
                        <div :class="[$style.mask, $style.black]"></div>
                        <div :class="$style.cursor" :style="cursorStyle">
                            <div></div>
                        </div>
                        <!-- <div :class="$style.mask"></div> -->
                    </div>
                </div>

                <div :class="$style.bottom">
                    <ot-input v-model="currentHex" round @input="handleInput"></ot-input>
                    <ot-button :class="$style.btn" round @click="handleOK">OK</ot-button>
                </div>
            </div>
        </div>
    </ot-tip>
</template>

<script>
import Color from './color.js';
export default {
    name: 'ot-color-picker',
    model: {
        prop: 'value',
        event: 'update',
    },
    props: {
        value: {
            type: [ String, Object ],
            default: '#FFFFFF',
        },
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'light-f', 'dark-bg', 'def-b' ],
                    },
                    box: {
                        normal: [ 'light-f', 'def-b' ],
                    },
                };
            case 'light':
            default:
                return {
                    tip: {
                        normal: [ 'def-f', 'light-bg', 'def-b' ],
                    },
                    box: {
                        normal: [ 'light-f', 'def-b' ],
                    },
                };
        }
    },
    data() {
        return {
            bMoveSvpane: false,
            bMoveSlider: false,
            refresh: 0,

            cursorTop: 0,
            cursorLeft: 0,

            thumbTop: 0,
            sliderHeight: 0,

            iMouseUpFn: null,
            iMouseMoveFn: null,

            rgb: {
                r: 255,
                g: 255,
                b: 255,
            },
            lastRGB: null,

            currentHex: '',
        };
    },
    computed: {
        cursorStyle() {
            const cursorTop = this.cursorTop;
            const cursorLeft = this.cursorLeft;
            return {
                top: `${cursorTop}px`,
                left: `${cursorLeft}px`,
            };
        },
        thumbStyle() {
            const thumbTop = this.thumbTop;
            return {
                top: `${thumbTop}px`,
            };
        },
        rgbStyle() {
            const rgb = Color.hsv2rgb(this.H, 100, 100);

            return {
                backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
            };
        },
        bgStyle() {
            const c = this.rgb;
            const r = c.r;
            const g = c.g;
            const b = c.b;

            return {
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
            };
        },
        H() {
            const height = this.sliderHeight;
            const tp = this.thumbTop;
            const h = Math.round(tp / height * 360);

            return h;
        },
    },
    methods: {
        init(color) {
            if (typeof color === 'string') {
                const rgb = Color.hexToRgb(color);
                this.rgb = {
                    r: rgb[0],
                    g: rgb[1],
                    b: rgb[2],
                };
            } else {
                this.rgb = color;
            }
            this.currentHex = Color.toHex(this.rgb);
        },
        _show() {
            this._initLayout(this.lastRGB);
        },
        _initLayout(rgb) {
            const { r, g, b } = rgb;
            const hsv = Color.rgb2hsv(r, g, b);
            this.$nextTick(() => {
                const $slider = this.$refs.slider;
                let rect = $slider.getBoundingClientRect();
                this.sliderHeight = rect.height;

                this.thumbTop = hsv.h / 360 * rect.height;

                const $svpanel = this.$refs.svpanel;
                rect = $svpanel.getBoundingClientRect();
                this.cursorTop = (1 - hsv.v / 100) * rect.height;
                this.cursorLeft = hsv.s / 100 * rect.width;

                this.refresh++;
            });
        },
        handleSliderMouseDown() {
            this.bMoveSlider = true;
            this.refresh++;
        },
        handleSvpanelMouseDown() {
            this.bMoveSvpane = true;
            this.refresh++;
        },
        handleSMouseUp() {
            this.bMoveSlider = false;
            this.bMoveSvpane = false;
        },
        svpanelMove(e, down) {
            const $svpanel = this.$refs.svpanel;
            const rect = $svpanel.getBoundingClientRect();
            const top = rect.top;
            const left = rect.left;
            const right = rect.right;
            const bottom = rect.bottom;

            const x = e.clientX;
            const y = e.clientY;

            if (left < x && x < right) {
                this.cursorLeft = x - left;
            }
            if (top < y && y < bottom) {
                this.cursorTop = y - top;
            }

            if (!down) {
                if (left >= x) {
                    this.cursorLeft = 0;
                } else if (x >= right) {
                    this.cursorLeft = right - left;
                }

                if (top >= y) {
                    this.cursorTop = 0;
                } else if (y >= bottom) {
                    this.cursorTop = bottom - top;
                }
            }

            this.updateSvpanel(rect);
        },
        updateSvpanel(rect) {
            const height = rect.height;
            const width = rect.width;

            const t = this.cursorTop;
            const l = this.cursorLeft;

            const h = this.H;
            const s = Math.round(l / width * 100);
            const v = 100 - Math.round(t / height * 100);

            this.updateColor({ h, s, v });
        },
        sliderMove(e, down) {
            const $slider = this.$refs.slider;
            const rect = $slider.getBoundingClientRect();
            this.sliderHeight = rect.height;

            const top = rect.top;
            const bottom = rect.bottom;

            const y = e.clientY;

            if (top < y && y < bottom) {
                this.thumbTop = y - top;
            }

            if (!down) {
                if (top >= y) {
                    this.thumbTop = 0;
                } else if (y >= bottom) {
                    this.thumbTop = bottom - top;
                }
            }

            this.updateSlider();
        },
        updateSlider() {
            const c = this.rgb;
            const hsv = Color.rgb2hsv(c.r, c.g, c.b);
            hsv.h = this.H;

            this.updateColor(hsv);
        },
        updateColor(hsv) {
            const rgb = Color.hsv2rgb(hsv.h, hsv.s, hsv.v);
            this.rgb = rgb;
            this.currentHex = Color.toHex(this.rgb);

            this.refresh++;
        },
        handleSMouseMove(e) {
            if (e && this.bMoveSvpane) {
                this.svpanelMove(e);
            } else if (e && this.bMoveSlider) {
                this.sliderMove(e);
            }
        },
        handleSMouseDown(e) {
            if (e && this.bMoveSvpane) {
                this.svpanelMove(e, true);
            } else if (e && this.bMoveSlider) {
                this.sliderMove(e, true);
            }
        },
        addMouseListener() {
            if (!this.iMouseUpFn) {
                this.iMouseUpFn = this.handleSMouseUp.bind(this);
                this.$otUtils.addEventListener('mouseup', this.iMouseUpFn);
            }
            if (!this.iMouseMoveFn) {
                this.iMouseMoveFn = this.handleSMouseMove.bind(this);
                this.$otUtils.addEventListener('mousemove', this.iMouseMoveFn);
            }
            if (!this.iMouseDownFn) {
                this.iMouseDownFn = this.handleSMouseDown.bind(this);
                this.$otUtils.addEventListener('mousedown', this.iMouseDownFn);
            }
        },
        removeClickListener() {
            if (this.iMouseUpFn) {
                this.$otUtils.removeEventListener('mouseup', this.iMouseUpFn);
                this.iMouseUpFn = null;
            }
            if (this.iMouseMoveFn) {
                this.$otUtils.removeEventListener('mousemove', this.iMouseMoveFn);
                this.iMouseMoveFn = null;
            }
            if (this.iMouseDownFn) {
                this.$otUtils.removeEventListener('mousedown', this.iMouseDownFn);
                this.iMouseDownFn = null;
            }
        },
        handleTipOnChange(bShown) {
            if (!bShown) {
                this.rgb = this.lastRGB;
                this.currentHex = Color.toHex(this.rgb);
            } else {
                this._show();
            }
        },
        handleOK() {
            this.lastRGB = this.rgb;
            document.body.click();

            this.$nextTick(() => {
                this.$emit('update', this.currentHex);

                this.$emit('change', this.lastRGB);
            });
        },
        handleInput() {
            if (this.currentHex.length > 6 && this.currentHex[0] === '#') {
                this.init(this.currentHex);
                this._initLayout(this.rgb);
            }
        },
    },
    mounted() {
        this.addMouseListener();
        this.init(this.value);
        this.lastRGB = this.rgb;
    },
    beforeDestroy() {
        this.removeClickListener();
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    line-height: 1;
    vertical-align: middle;

    @include __ot_size__;

    [round] {
        @include __ot_round__;
    }

    .box {
        display: table-cell;
        position: relative;
        width: 2em;
        height: 2em;
        text-align: center;
        vertical-align: middle;
        box-sizing: content-box;

        .select {
            display: block;
            width: 1.6em;
            height: 1.6em;
            margin: auto;
            box-sizing: border-box;
            line-height: 1.6em;
        }
    }

}

.dropdown {
    display: block;
    position: relative;
    box-sizing: border-box;
    user-select: none;
    padding: 6px;

    .wrapper {

        .mask {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .slider {
            position: relative;
            box-sizing: border-box;
            background-color: red;
            width: 12px;
            height: 180px;
            padding: 2px 0;
            float: right;

            .bar {
                position: relative;
                background: linear-gradient(180deg,red 0,#ff0 17%,lime 33%,cyan 50%,blue 67%,#f0f 83%,red);
                height: 100%;
            }

            .thumb {
                position: absolute;
                box-sizing: border-box;
                left: 0;
                top: 0;
                width: 100%;
                height: 4px;
                border-radius: 1px;
                background: #fff;
                border: 1px solid #f0f0f0;
                box-shadow: 0 0 2px rgba(0,0,0,.6);
                z-index: 1;
            }
        }

        .svpanel {
            position: relative;
            width: 280px;
            height: 180px;
            margin-right: 20px;

            .white {
                background: linear-gradient(90deg,#fff,hsla(0,0%,100%,0));
            }

            .black {
                background: linear-gradient(0deg,#000,transparent);
            }

            .cursor {
                position: absolute;

                &>div {
                    width: 4px;
                    height: 4px;
                    box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
                    border-radius: 50%;
                    transform: translate(-2px,-2px);
                }
            }
        }
    }

    .bottom {
        display: flex;
        margin-top: 10px;
        flex-direction: row;
        justify-content: space-between;

        .btn {
            float: right;
        }
    }
}
</style>

