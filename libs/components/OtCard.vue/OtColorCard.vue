<template>
    <div v-if="!horizontal" ot v-ot-bind="verticalOtColors(value)" class="ot-color-card" :class="$style.root" :size="$otSize" :round="round">
        <div :class="[$style.main, $style.card]" :style="bgColor(value)" :size="$otSize" :only-one="!colorsTabList.length">
            <span :class="$style.name">{{ name }}</span>
            <span :class="$style.value">{{ String.prototype.toUpperCase.call(value) }}</span>
        </div>
        <div :class="[$style.sub, $style.card, $style.link]" :style="item.style" :size="$otSize" :round="round"
            v-for="(item, index) in colorsTabList" :key="index" :first="index === 0" :title="copyTitle" @click="handleCopyClick(item.color)">
            <span :class="$style.name">{{item.name}}</span>
            <span :class="$style.value">{{String.prototype.toUpperCase.call(item.color)}}</span>
        </div>
    </div>
    <div v-else ot v-ot-bind="$otColors" class="ot-color-card" :class="$style.root" :horizontal="horizontal" :size="$otSize" :round="round">
        <div ot v-ot-bind="horizontalOtColors(item.color)" :class="[$style.main, $style.card, $style.link]" :style="horizontalStyle(item.style)" :size="$otSize" :round="round" :horizontal="horizontal"
            v-for="(item, index) in colorsTabList" :key="index" :first="index === 0" :title="copyTitle" @click="handleCopyClick(item.color)">
            <span :class="$style.name">{{item.name}}</span>
            <span :class="$style.value">{{String.prototype.toUpperCase.call(item.color)}}</span>
        </div>
    </div>
</template>

<script>
import theme from './OtColorCardTheme.js';
export default {
    name: 'ot-color-card',
    mixins: [ theme ],
    props: {
        // 颜色名称
        name: {
            type: String,
            default: 'Primary Color',
        },
        // 主颜色值, 十六进制
        value: {
            type: String,
            default: '#207FF6',
        },
        // 叠加白色基色
        white: {
            type: String,
            default: '#FFFFFF',
        },
        // 叠加黑色基色
        black: {
            type: String,
            default: '#000000',
        },
        // 白色百分比池子
        whiteArray: {
            type: [ Array, Object, String ],
            default() {
                return [ 60, 40, 20 ];
            },
        },
        // 黑色百分比池子
        blackArray: {
            type: [ Array, Object, String ],
            default() {
                return [ 10, 20, 40, 60 ];
            },
        },
        // 水平样式展示
        horizontal: Boolean,
        // 自动控制字体颜色
        autoFont: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            copyTitle: 'Click To Copy Color',
        };
    },
    computed: {
        colorsTabList() {
            return this.mix({
                name: '0%',
                color: this.value,
            });
        },
        _whiteArray() {
            if (typeof this.whiteArray === 'string') {
                if (this.whiteArray.length) {
                    return this.whiteArray.split(',');
                }
            }
            return this.whiteArray;
        },
        _blackArray() {
            if (typeof this.blackArray === 'string') {
                if (this.blackArray.length) {
                    return this.blackArray.split(',');
                }
            }
            return this.blackArray;
        },
    },
    methods: {
        mix(c) {
            const result = [ ];
            const color1 = c.color;
            const color2 = this.white;
            const color3 = this.black;
            const whiteAttrs = this._whiteArray;
            if (Array.isArray(whiteAttrs)) {
                for (let i = 0; i < whiteAttrs.length; i++) {
                    const index = whiteAttrs[i];
                    const pre = Math.round(index * 0.01 * 100) / 100;
                    const color = this.$otUtils.Colors.mix(color2, color1, pre);
                    result.push({
                        name: `W ${Math.round(pre * 100)}%`,
                        color,
                        style: this.bgColor(color),
                    });
                }
            }
            const blackAttrs = this._blackArray;
            if (Array.isArray(blackAttrs)) {

                if (result.length && blackAttrs.length) {
                    result.push({
                        name: c.name,
                        color: color1,
                        style: this.bgColor(color1),
                    });
                }

                for (let i = 0; i < blackAttrs.length; i++) {
                    const index = blackAttrs[i];
                    const pre = Math.round(index * 0.01 * 100) / 100;
                    const color = this.$otUtils.Colors.mix(color3, color1, pre);
                    result.push({
                        name: `B ${Math.round(pre * 100)}%`,
                        color,
                        style: this.bgColor(color),
                    });
                }
            }
            return result;
        },
        bgColor(color) {
            return {
                backgroundColor: color,
            };
        },
        horizontalStyle(style) {
            const length = this.colorsTabList.length;
            return Object.assign({
                width: 100 / length + '%',
            }, style);
        },
        judgeFontColor(hex) {
            const rgb = this.$otUtils.Colors.hexToRgb(hex);
            const hsv = this.$otUtils.Colors.rgb2hsv(rgb[0], rgb[1], rgb[2]);
            return hsv;
        },
        horizontalOtColors(hex) {
            const { v } = this.judgeFontColor(hex);
            if (parseInt(v) < 55) {
                return {
                    'ot-color-light-font-normal': true,
                };
            }
            return {
                'ot-color-dark-font-normal': true,
            };
        },
        verticalOtColors(hex) {
            if (!this.auto) {
                return {
                    'ot-color-light-font-normal': true,
                };
            }
            return this.horizontalOtColors(hex);
        },
        handleCopyClick(color) {
            const clipboard = this.$otUtils.getOtPlugin('clipboard');
            if (!clipboard) {
                return;
            }
            const content = color;
            clipboard.writeText(content);

            this.$emit('onCopy', content); // 复制事件, `content` 为颜色值.
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    position: relative;
    box-sizing: border-box;

    $--color-card-height: 8em;
    $--color-card-width: 20em;
    width: $--color-card-width;

    @include __ot_size__;
    @include __ot_box_shadow__;
    @include __ot_root_block__;

    &[horizontal] {
        display: block;
        width: auto;
    }

    &[round] {

        .card {
            &:first-child, &:last-child {
                @include __ot_round__;
            }

            &[size]:first-child:not([only-one]) {

                &:not([horizontal]) {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }

                &[horizontal] {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }

            &[size]:last-child:not([only-one]) {

                &:not([horizontal]) {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                }

                &[horizontal] {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }
        }
    }

    .main {
        height: $--color-card-height;
        line-height: 2;
        vertical-align: middle;
        display: table-cell;
        position: relative;

        &[horizontal] {
            padding-top: 1em;
            line-height: 3;
            min-height: $--color-card-height;
            height: auto;
            float: left;
            margin-top: 0em;
            display: inline-block;

            .name {
                margin-top: 0.8em;
            }

            .value {
                opacity: 0;
            }

            &:hover {
                margin-top: -1em;
                min-height: $--color-card-height + 1;

                &[round]:not([only-one]) {
                    @include __ot_round__;

                    &[size] {
                        border-bottom-left-radius: 0;
                        border-bottom-right-radius: 0;
                    }
                }
            }
        }

        .name {
            display: block;
            font-size: 1.2em;
        }

        .value {
            display: block;
            font-size: 0.8em;
        }
    }

    .sub {
        position: relative;
        height: 3em;
        line-height: 3em;
        margin-right: 0;

        .name {
            float: left;
        }

        .value {
            float: right;
            opacity: 0;
            left: 3px;
            transform: scale(.85);
            transform-origin: 100% 50%;
        }

        &:hover {
            margin-right: -1em;

            &[round]:not([only-one]) {
                @include __ot_round__;

                &[size] {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }
        }
    }

    .card {
        min-width: $--color-card-width;
        box-sizing: border-box;
        padding: 0 1em;
        transition: all .3s;

        &[horizontal] {
            min-width: 0;
        }

        .name {
            transition: all .3s;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }

        .value {
            position: relative;
            transition: all .3s;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }

    .link {
        cursor: pointer;
    }

    &:hover {
        .card {
            .value {
                opacity: 1;
            }

            &[horizontal] {
                .name {
                    margin-top: 0;
                }
            }
        }
    }
}
</style>

