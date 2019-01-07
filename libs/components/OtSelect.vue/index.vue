<template>
    <div ot :class="$style.root" class="ot-select" @click="handleFirstClick"
        :size="$otSize" :theme="$otTheme">
        <transition name="otSelectCollapse">
            <div :class="$style.up" v-if="bShown && ($slots.up || isUp) && !$slots.down && !_list" :style="{ width: `${autoWidth}px` }">
                <div ot v-bind="$otColors.list" :class="$style.select" :custom="custom" @click="handleSelectCloseClick" :shown="bShown" :round="round" :size="$otSize">
                    <slot name="up"></slot>
                    <slot></slot>
                </div>
            </div>
            <div :class="$style.up" v-else-if="bShown && isUp && !$slots.up && !$slots.down && _list" :style="{ width: `${autoWidth}px` }">
                <ul ot v-bind="$otColors.list" :class="$style.select" list :custom="custom" @click="handleSelectCloseClick" :shown="bShown" :round="round" :size="$otSize">
                    <li ot v-bind="$otColors.item" :class="$style.item" item v-for="(item, index) in _list" :key="index" @click="handleSelectClick(item)"
                        :selected="(typeof item !== 'object') ? (model === item) : (model === item.value)">
                        <slot name="item" :item="item">
                            {{ (typeof item !== 'object') ? item : item.text || item.value }}
                        </slot>
                    </li>
                </ul>
            </div>
        </transition>
        <ot-input :fixable="false" :theme="$otTheme" :size="$otSize"
            :icon="icon"
            :round="round"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :name="name"
            :model="current"
            @input="handleInput"
            :clearable="clearable"
            @clear="handleClear"
            type="text">
            <ot-link :class="$style.link" slot="suffix" @click="handleShowSelectList" :disabled="disabled">
                <ot-icon :class="$style.icon" :size="$otSize" icon="angle-down" :shown="bShown"></ot-icon>
            </ot-link>
        </ot-input>
        <transition name="otSelectCollapse">
            <div :class="$style.down" v-if="bShown && ($slots.down || !isUp) && !$slots.up && !_list" :style="{ width: `${autoWidth}px` }">
                <div ot v-bind="$otColors.list" :class="$style.select" :custom="custom" @click="handleSelectCloseClick" :shown="bShown" :round="round" :size="$otSize">
                    <slot name="down"></slot>
                    <slot></slot>
                </div>
            </div>
            <div :class="$style.down" v-else-if="bShown && !isUp && !$slots.down && !$slots.up && _list" :style="{ width: `${autoWidth}px` }">
                <ul ot v-bind="$otColors.list" :class="$style.select" list :custom="custom" @click="handleSelectCloseClick" :shown="bShown" :round="round" :size="$otSize">
                    <li ot v-bind="$otColors.item" :class="$style.item" item v-for="(item, index) in _list" :key="index" @click="handleSelectClick(item)"
                        :selected="(typeof item !== 'object') ? (model === item) : (model === item.value)">
                        <slot name="item" :item="item">
                            {{ (typeof item !== 'object') ? item : item.text || item.value }}
                        </slot>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-select',
    mixins: [ theme ],
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        placeholder: [ String ],
        type: {
            type: [ String ],
            default: 'text',
        },
        disabled: [ Boolean ],
        model: {
            type: [ String, Number ],
            default: '',
        },
        name: [ String ],
        readonly: [ Boolean ],
        list: [ Array ],
        direction: [ String ],
        clearable: [ Boolean ],
        icon: [ String ],
        // 不限制下拉框大小, 用于组件扩展
        custom: [ Boolean ],
    },
    data() {
        return {
            bShown: false,
            isUp: false,
            iListenerHandle: null,
            current: '',
        };
    },
    watch: {
        model: {
            immediate: true,
            handler(nv) {
                if (this._list && Array.isArray(this._list)) {
                    const v = this._list.find(item => {
                        return item.value === nv;
                    });
                    if (v) {
                        this.current = v.text || v.value || v;
                        return;
                    }
                }
                this.current = nv;
            },
        },
        list: {
            immediate: true,
            handler() {
                const nv = this.model;
                if (this._list && Array.isArray(this._list)) {
                    const v = this._list.find(item => {
                        return item.value === nv;
                    });
                    if (v) {
                        this.current = v.text || v.value || v;
                        return;
                    }
                }
                this.current = nv;
            },
        },
    },
    computed: {
        _list() {
            return this.list;
        },
        autoWidth() {
            const $el = this.$el;
            return $el.offsetWidth;
        },
    },
    methods: {
        _updateValue(value) {
            this.$emit('update', value); // 更新 v-model 事件
        },
        handleFirstClick(e) {
            if (!this.bShown) {
                this.handleShowSelectList(e);
            }
        },
        handleSelectCloseClick() {
            this.$nextTick(() => {
                this.bShown = false;
            });
            this.$emit('close');
        },
        handleSelectClick(item) {
            if (typeof item === 'object') {
                const value = item.value;
                this._updateValue(value);
            } else {
                this._updateValue(item);
            }
            this.$emit('select', item); // 更新选中状态事件
        },
        handleShowSelectList(ev) {
            if (this.bShown) {
                this.bShown = false;
                return;
            }
            if (!this.iListenerHandle) {
                // first
                this.addListener();
            }

            if (this.$slots.default) {
                delete this.$slots.up;
                delete this.$slots.down;
            }
            if (!this.$slots.down && !this.$slots.up) {
                let isUp = false;

                if (!this.direction) {
                    ev = ev || window.event;
                    const offsetTop = ev.clientY;
                    const innerHeight = window.innerHeight;
                    const offset = offsetTop - innerHeight / 2;
                    isUp = offset > 0;
                } else {
                    isUp = this.direction === 'up';
                }

                this.isUp = isUp;
            }

            this._show();
        },
        handleInput(e) {
            const value = e.target.value;
            let result = value;
            if (this._list && Array.isArray(this._list)) {
                const v = this._list.find(item => {
                    return item.text === value;
                });
                if (v) {
                    result = v.value;
                }
            }
            this._updateValue(result);

            this._show();
        },
        handleClear() {
            this._updateValue('');
            this._show();
        },
        _show() {
            if (this.disabled) return;
            if (!this.bShown) {
                this.bShown = true;
                this._scrollItem();
                this.$emit('show'); // 显示事件
            }
        },
        _scrollItem() {
            this.$nextTick(() => {
                const els = this.$el.querySelectorAll('ul>li[selected]');
                if (els && els.length) {
                    els.forEach(el => {
                        if (el.parentElement) {
                            this.$nextTick(() => {
                                el.parentElement.scrollTop = el.offsetTop;
                            });
                        }
                    });
                }
            });
        },
        _off(e) {
            const result = this.$el.contains(e.target);
            if (!result) {
                this.handleSelectCloseClick();
            }
        },
        addListener() {
            if (!this.iListenerHandle) {
                this.iListenerHandle = this._off.bind(this);
                this.$otUtils.addEventListener('click', this.iListenerHandle);
            }
        },
        removeListener() {
            if (this.iListenerHandle) {
                this.$otUtils.removeEventListener('click', this.iListenerHandle);
                this.iListenerHandle = null;
            }
        },
    },
    beforeDestroy() {
        this.removeListener();
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    position: relative;
    box-sizing: border-box;

    @include __ot_size__;

    .link {
        display: block;
        width: 100%;
        height: 100%;

        .icon {
            transform: rotate(0deg);
            transition: all .3s;

            &[shown] {
                transform: rotate(-180deg);
            }
        }
    }

    .select {
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
            width: auto;
            max-height: none;
        }

        &[round] {
            @include __ot_round__;
        }

        li {
            list-style: none;

            &[selected] {
                font-weight: $--main-font-weight-medium;
            }
        }

        &[list] {
            padding: 0.5em 0;

            &>[item] {
                padding: 0.2em 1em;
            }
        }
    }

    .up {
        position: relative;

        &>.select {
            position: absolute;
            bottom: 0.2em;
        }
    }

    .down {
        position: relative;

        &>.select {
            position: absolute;
            top: 0.2em;
        }
    }
}
</style>

<style>
.otSelectCollapse {
    transform-origin: 50% 0%;
    transform: scaleY(1);
}

.otSelectCollapse-enter-active,
.otSelectCollapse-leave-active {
    transform-origin: 50% 0%;
    transition: transform 0.3s;
    z-index: 100;
}

.otSelectCollapse-enter,
.otSelectCollapse-leave-to {
    transform-origin: 50% 0%;
    transform: scaleY(0);
}
</style>
