<template>
    <div ot :class="$style.root" class="ot-select" @click="handleFirstClick">

        <transition name="otSelectCollapse">
            <div :class="$style.up" v-if="bShown && ($slots.up || isUp) && !list">
                <div ot v-bind="$otColors.list" :class="$style.select" @click="handleSelectCloseClick" :shown="bShown">
                    <slot name="up"></slot>
                    <slot></slot>
                </div>
            </div>
            <div :class="$style.up" v-else-if="bShown && isUp && !$slots.up && list">
                <ul ot v-bind="$otColors.list" :class="$style.select" @click="handleSelectCloseClick" :shown="bShown" list>
                    <li ot v-bind="$otColors.item" v-for="(item, index) in list" :key="index" @click="handleSelectClick(item)"
                        :selected="(typeof item === 'string') ? (model === item) : (model === item.value)">
                        <slot name="item" :item="item">
                            {{ (typeof item === 'string') ? item : item.value }}
                        </slot>
                    </li>
                </ul>
            </div>
        </transition>

        <ot-input :fixable="false"
            :round="round"
            :readonly="readonly"
            :disabled="disabled"
            :name="name"
            :model="model"
            @input="handleInput"
            @change="$emit('change', $event)"
            type="text">
            <ot-link :class="$style.link" slot="subfix" @click="handleShowSelectList">
                <ot-icon :class="$style.icon" :size="$otSize" icon="angle-down" :shown="bShown"></ot-icon>
            </ot-link>
        </ot-input>

        <transition name="otSelectCollapse">
            <div :class="$style.down" v-if="bShown && ($slots.down || !isUp) && !list">
                <div ot v-bind="$otColors.list" :class="$style.select" @click="handleSelectCloseClick" :shown="bShown">
                    <slot name="down"></slot>
                    <slot></slot>
                </div>
            </div>
            <div :class="$style.down" v-else-if="bShown && !isUp && !$slots.down && list">
                <ul ot v-bind="$otColors.list" :class="$style.select" @click="handleSelectCloseClick" :shown="bShown" list>
                    <li ot v-bind="$otColors.item" v-for="(item, index) in list" :key="index" @click="handleSelectClick(item)"
                        :selected="(typeof item === 'string') ? (model === item) : (model === item.value)">
                        <slot name="item" :item="item">
                            {{ (typeof item === 'string') ? item : item.value }}
                        </slot>
                    </li>
                </ul>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    name: 'ot-select',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    list: {
                        normal: [ 'light-f', 'dark-bg', 'light-b' ],
                        hover: [ 'pri-b-h' ],
                    },
                    item: {
                        normal: [ 'light-f', 'dark-bg' ],
                        hover: [ 'pri-bg-h' ],
                        active: [ 'pri-bg-a' ],
                        selected: [ 'light-f-sel', 'pri-bg-sel' ],
                        disabled: [ 'light-f-dis', 'grey-bg-dis' ],
                    },
                };
            case 'light':
            default:
                return {
                    list: {
                        normal: [ 'def-f', 'light-bg', 'grey-b' ],
                        hover: [ 'pri-b-hov' ],
                    },
                    item: {
                        normal: [ 'def-f' ],
                        hover: [ 'pri-f-hov' ],
                        active: [ 'pri-f-act' ],
                        selected: [ 'pri-f-sel' ],
                        disabled: [ 'def-f-dis', 'def-bg-dis' ],
                    },
                };
        }
    },
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
            type: [ String ],
            default: '',
        },
        name: [ String ],
        readonly: [ Boolean ],
        list: [ Array ],
    },
    data() {
        return {
            bShown: false,
            isUp: false,
            iListenerHandle: null,
        };
    },
    methods: {
        handleFirstClick(e) {
            if (!this.bShown) {
                this.handleShowSelectList(e);
            }
        },
        handleSelectCloseClick() {
            this.$nextTick(() => {
                this.bShown = false;
            });
        },
        handleSelectClick(item) {
            console.log(item);
            if (typeof item === 'string') {
                this.$emit('update', item);
            } else if (typeof item === 'object') {
                const value = item.value;
                this.$emit('update', value);
            }
            this.$emit('select', item);
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
            if (!this.$slots.down && !this.$slots.down) {
                ev = ev || window.event;
                const offsetTop = ev.clientY;
                const innerHeight = window.innerHeight;
                const offset = offsetTop - innerHeight / 2;

                if (offset > 0) {
                    this.isUp = true;
                } else {
                    this.isUp = false;
                }
            }

            this.bShown = true;
        },
        handleInput(e) {
            const value = e.target.value;
            console.log(value);
            this.$emit('update', value);

            this._show();
        },
        _show() {
            if (!this.bShown) {
                this.bShown = true;
            }
        },
        _off(e) {
            const result = this.$el.contains(e.target);
            if (!result) {
                this.bShown = false;
            }
        },
        addListener() {
            if (!this.iListenerHandle) {
                this.iListenerHandle = document.addEventListener('click', this._off);
            }
        },
        removeListener() {
            if (this.iListenerHandle) {
                document.removeEventListener('click', this._off);
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
.root {
    position: relative;
    box-sizing: border-box;

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
        padding: 0.5rem 1rem;
        // width: 100%;
        margin: 0;

        &>li {
            list-style: none;
        }

        &[list] {
            padding: 0.5rem 0;

            &>li {
                padding: 0 1rem;
            }
        }
    }

    .up {
        position: relative;

        &>.select {
            position: absolute;
            bottom: 0.2rem;
        }
    }

    .down {
        position: relative;

        &>.select {
            position: absolute;
            top: 0.2rem;
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
}

.otSelectCollapse-enter,
.otSelectCollapse-leave-to {
    transform-origin: 50% 0%;
    transform: scaleY(0);
}
</style>
