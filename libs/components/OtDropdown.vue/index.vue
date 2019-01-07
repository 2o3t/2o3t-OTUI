<template>
    <ot-tip ot class="ot-dropdown" :class="$style.root" :value="bShown" @update="handleUpdate" :round="round" :arrow="arrow" v-on="$listeners" :arrowAttrs="$otColors.arrow"
        :disabled="disabled" :manual="manual" :placement="placement" :offsetX="offsetX" :offsetY="offsetY" :clickable="clickable">
        <slot>
            <ot-link :class="$style.link" :disabled="disabled">
                <span :class="$style.text">{{ text }}</span>
            </ot-link>
        </slot>
        <ot-arrow :class="$style.arrow" v-if="appendArrow || !$slots.default" :placement="bShown ? 'up' : 'down'" animation border></ot-arrow>
        <div ot v-bind="$otColors.dropdown" :class="$style.dropdown" slot="tip" :size="$otSize" class="ot-dropdown-popper" :style="style" :round="round" v-if="!list">
            <div ot v-bind="$otColors.list" class="ot-dropdown-popper-list" :custom="custom" @click="handleDropdownCloseClick" :shown="bShown" :round="round" :size="$otSize">
                <!-- 无 list 时, 下拉框容器 -->
                <slot name="dropdown"></slot>
            </div>
        </div>
        <div ot v-bind="$otColors.dropdown" :class="$style.dropdown" slot="tip" :size="$otSize" class="ot-dropdown-popper" :style="style" :round="round" v-else>
            <ul ot v-bind="$otColors.list" class="ot-dropdown-popper-list" :custom="custom" @click="handleDropdownCloseClick" :shown="bShown" item :round="round" :size="$otSize">
                <li ot v-bind="$otColors.item" v-for="(item, index) in list" :key="index" @click="handleSelectClick(item)">
                    <!-- 每条item进行修饰 -->
                    <slot name="item" :item="item">
                        {{ (typeof item !== 'object') ? item : item.value }}
                    </slot>
                </li>
            </ul>
        </div>
    </ot-tip>
</template>

<script>
import theme from './theme';
export default {
    name: 'ot-dropdown',
    mixins: [ theme ],
    model: {
        prop: 'value',
        event: 'update',
    },
    props: {
        // 禁用
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        // 手动操作
        manual: {
            type: [ Boolean ],
            default: false,
        },
        // 可固定方向
        placement: {
            type: [ String ],
            default: 'auto',
            // 可选参数 [ auto, top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end ]
            validator: val =>
                [ 'auto', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end' ].indexOf(val) > -1,
        },
        // X偏移量
        offsetX: {
            type: [ Number ],
            default: 0,
        },
        // Y偏移量
        offsetY: {
            type: [ Number ],
            default: 0,
        },
        // 是否可点击, 必须 manual= true
        clickable: {
            type: [ Boolean ],
            default: false,
        },
        // 自定义宽度
        width: {
            type: [ Number ],
            default: 0,
        },
        // 文字内容方向
        textAlign: {
            type: [ String ],
            default: 'center',
        },
        // 是否有箭头
        arrow: {
            type: [ Boolean ],
            default: true,
        },
        // 下拉数据列表, { value }
        list: [ Array ],
        // 不限制下拉框大小, 用于组件扩展
        custom: [ Boolean ],
        // 控制显示, v-model 数据源
        value: [ Boolean ],
        // 文本按钮内容
        text: [ String ],
        // 文字后附加箭头
        appendArrow: {
            type: [ Boolean ],
            default: false,
        },
    },
    watch: {
        value(newV) {
            this.$nextTick(() => {
                this.bShown = newV;
            });
        },
    },
    data() {
        return {
            bShown: false,
        };
    },
    computed: {
        style() {
            return {
                display: 'block',
                position: 'relative',
                width: this.width ? `${this.width}px` : 'auto',
                textAlign: this.textAlign,
                boxSizing: 'border-box',
            };
        },
    },
    methods: {
        handleUpdate(value) {
            this.bShown = value;
            this.$emit('update', value); // 与 v-model 数据源绑定, 更新当前状态
        },
        handleDropdownCloseClick() {
            this.$nextTick(() => {
                this.bShown = false;
            });
            this.$emit('close'); // 当前 dropdown 关闭事件
        },
        handleSelectClick(item) {
            this.handleDropdownCloseClick();
            this.$emit('select', item); // 选择某条item事件
        },
    },
};
</script>

<style lang="scss" module>
.root {
    position: relative;
    vertical-align: middle;

    .arrow {
        margin-left: 5px;
    }

    .link {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }

    .text {
        display: inline-block;
        padding-right: 0.6em;
        vertical-align: middle;
    }

    .dropdown {
        position: relative;
        box-sizing: border-box;

    }
}
</style>

<style lang="scss">
@import '../globals';
.ot-dropdown-popper {
    @include __ot_size__;

    .ot-dropdown-popper-list {
        display: block;
        box-sizing: border-box;
        padding: 0.5em 1em;
        width: 100%;
        margin: 0;
        z-index: 100;
        max-height: 16em;
        overflow-x: hidden;
        overflow-y: auto;

        &[custom] {
            max-height: none;
        }

        &[round] {
            @include __ot_round__;
        }

        li {
            list-style: none;
        }

        &[item] {
            padding: 0.5em 0;

            &>li {
                padding: 0.4em 1em;
            }
        }
    }
}
</style>
