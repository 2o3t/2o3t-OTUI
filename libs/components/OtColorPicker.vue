<template>
    <ot-tip ot class="ot-color-picker-tip" :class="$style.root" manual clickable :refresh="refresh">
        <div ot class="ot-color-picker" v-bind="$otColors.box" :class="$style.box" :size="$otSize" :round="round">
            <div ot v-bind="$otColors.box" :class="$style.select" :size="$otSize" :round="round">
                <!-- <ot-icon></ot-icon> -->
            </div>
        </div>
        <div ot v-bind="$otColors.tip" slot="tip" :size="$otSize" :theme="$otTheme" class="ot-title-tip-popper" :round="round">
            <!-- 颜色面板 -->
            <div :class="$style.dropdown">

                <div :class="$style.wrapper">
                    <div :class="$style.slider" ref="slider" @mousedown="handleSliderMouseDown">
                        <div :class="$style.bar"></div>
                        <div :class="$style.thumb" :style="thumbStyle"></div>
                    </div>
                    <div :class="$style.svpanel" ref="svpanel" @mousedown="handleSvpanelMouseDown" :style="rgb">
                        <div :class="[$style.mask, $style.white]"></div>
                        <div :class="[$style.mask, $style.black]"></div>
                        <div :class="$style.cursor" :style="cursorStyle">
                            <div></div>
                        </div>
                        <!-- <div :class="$style.mask"></div> -->
                    </div>
                </div>
            </div>
        </div>
    </ot-tip>
</template>

<script>
export default {
    name: 'ot-color-picker',
    props: {

    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'light-f', 'dark-bg', 'def-b' ],
                    },
                    box: {
                        normal: [ 'def-b' ],
                    },
                };
            case 'light':
            default:
                return {
                    tip: {
                        normal: [ 'def-f', 'light-bg', 'def-b' ],
                    },
                    box: {
                        normal: [ 'def-b' ],
                    },
                };
        }
    },
    data () {
        return {
            bMoveSvpane: false,
            bMoveSlider: false,
            refresh: 0,
            cursorTop: 0,
            cursorLeft: 0,
            thumbTop: 0,
            iMouseUpFn: null,
            iMouseMoveFn: null,

            R: 255,
            G: 0,
            B: 0,
        }
    },
    computed: {
        cursorStyle() {
            const cursorTop = this.cursorTop;
            const cursorLeft = this.cursorLeft;
            return {
                top: `${cursorTop}px`,
                left: `${cursorLeft}px`,
            }
        },
        thumbStyle() {
            const thumbTop = this.thumbTop;
            return {
                top: `${thumbTop}px`,
            }
        },
        rgb() {
            const r = this.R;
            const g = this.G;
            const b = this.B;

            return {
                backgroundColor: `rgb(${r}, ${g}, ${b})`
            }
        }
    },
    methods: {
        handleSliderMouseDown() {
            this.bMoveSlider = true;
        },
        handleSvpanelMouseDown(e) {
            this.bMoveSvpane = true;
        },
        handleSvpanelMouseUp() {
            this.bMoveSlider = false;
            this.bMoveSvpane = false;
        },
        handleSMouseMove(e) {
            if (e && this.bMoveSvpane) {
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
                if (left >= x) {
                    this.cursorLeft = 0;
                } else if (x >= right) {
                    this.cursorLeft = right - left;
                }

                if (top < y && y < bottom) {
                    this.cursorTop = y - top;
                }
                if ( top >= y) {
                    this.cursorTop = 0;
                } else if ( y >= bottom) {
                    this.cursorTop = bottom - top;
                }

                this.refresh++;
            } else if (e && this.bMoveSlider) {
                const $slider = this.$refs.slider;
                const rect = $slider.getBoundingClientRect();
                const top = rect.top;
                const bottom = rect.bottom;
                const height = rect.height;

                const y = e.clientY;

                if (top < y && y < bottom) {
                    this.thumbTop = y - top;
                }
                if ( top >= y) {
                    this.thumbTop = 0;
                } else if ( y >= bottom) {
                    this.thumbTop = bottom - top;
                }

                const p = Math.round(255 * 6 / height);

                if (this.R >= 255 && this.G < 255 && this.B <= 0) {
                    this.R = 255;
                    this.G += p;
                    this.B = 0;
                } else if (this.R > 0 && this.G >= 255 && this.B <= 0) {
                    this.R -= p;
                    this.G = 255;
                    this.B = 0;
                } else  if (this.R <= 0 && this.G >= 255 && this.B < 255) {
                    this.R = 0;
                    this.G = 255;
                    this.B += p;
                } else  if (this.R <= 0 && this.G > 0 && this.B >= 255) {
                    this.R = 0;
                    this.G -= p;
                    this.B = 255;
                } else if (this.R < 255 && this.G <= 0 && this.B >= 255) {
                    this.R += p;
                    this.G = 0;
                    this.B = 255;
                } else if (this.R >= 255 && this.G <= 0 && this.B > 0) {
                    this.R = 255;
                    this.G = 0;
                    this.B -= p;
                } else {
                    this.R = 255;
                    this.G = 0;
                    this.B = 0;
                }

                this.refresh++;
            }
        },
        addMouseListener() {
            if (!this.iMouseUpFn) {
                this.iMouseUpFn = this.handleSvpanelMouseUp.bind(this);
                this.$otUtils.addEventListener('mouseup', this.iMouseUpFn);
            }
            if (!this.iMouseMoveFn) {
                this.iMouseMoveFn = this.handleSMouseMove.bind(this);
                this.$otUtils.addEventListener('mousemove', this.iMouseMoveFn);
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
        },
    },
    mounted() {
        this.addMouseListener();
    },
    beforeDestroy() {
        this.removeClickListener();
    },
}
</script>

<style lang="scss" module>
@import './globals';
.root {

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
            width: 1.4em;
            height: 1.4em;
            margin: auto;
            box-sizing: border-box;
        }
    }

}

.dropdown {
    display: block;
    position: relative;
    box-sizing: border-box;
    user-select: none;

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
                cursor: pointer;
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
                    cursor: pointer;
                    width: 4px;
                    height: 4px;
                    box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
                    border-radius: 50%;
                    transform: translate(-2px,-2px);
                }
            }
        }
    }
}
</style>

