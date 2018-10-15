<template>
    <div ot :class="[$style.root]">
        <div v-if="$slots.prefix" :class="$style.prefix">
            <slot name="prefix"></slot>
        </div>
        <div :class="$style.box" :style="{ marginLeft: `${Number(offset)}px` }">
            <ul ot :class="[$style.tabs]" class="ot-tabs">
                <li ot v-bind="$otColors" :class="[$style.item]"
                    v-ot-title
                    :selected="item.name === select.name" v-for="(item, index) in _list" :key="index" @click="handleTabsActive(item)">
                    <slot name="title" :item="item" :index="index">
                        <ot-icon :class="$style.titleIcon" v-if="item.icon" :icon="item.icon"></ot-icon>
                        <span :class="$style.text">{{item.title}}</span>
                    </slot>
                    <ot-icon v-if="clearable" v-bind="$otColors.icon" :class="$style.clearable" :size="$otSize" icon="close" v-show="index!==0" @click="handleTabsClose($event, item)"></ot-icon>
                </li>
            </ul>
        </div>
        <div v-if="$slots.default" :class="$style.content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ot-tabs',
    props: {
        list: {
            type: [ Array ],
            required: true,
        },
        select: [ Object ],
        clearable: [ Boolean ],
        offset: [ Number, String ],
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: [ 'def-bg-h' ],
                    active: [ 'def-bg-a' ],
                    selected: [ 'def-bb-s', 'after' ],
                    icon: {
                        normal: 'def-f',
                        hover: 'light-f-h',
                        active: 'def-f-a',
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    hover: [ 'def-f-hov', 'light-bg-hov' ],
                    active: [ 'light-f-act', 'def-bg-act' ],
                    selected: [ 'def-bb-sel', 'after' ],
                    // disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    icon: {
                        normal: 'def-f',
                        hover: 'def-f-h',
                        active: 'light-f-a',
                    },
                };
        }
    },
    computed: {
        _list() {
            return this.list.map(item => {
                if (typeof item === 'string') {
                    return {
                        title: item,
                        name: item,
                    };
                } else if (typeof item === 'object') {
                    if (!item.title) {
                        item.title = item.name || 'Must be has <title> <name>';
                    } else if (!item.name) {
                        item.name = item.title || 'Must be has <title> <name>';
                    }
                }
                return item;
            });
        },
    },
    methods: {
        handleTabsActive(tab) {
            this.$emit('action', 'active', tab);
        },
        handleTabsClose(e, tab) {
            e.stopPropagation();
            this.$emit('action', 'close', tab);
        },
    },
};
</script>

<style lang="scss" module>
.root {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    .prefix {
        position: absolute;
        left: 0;
        top: 0;
        vertical-align: middle;
    }

    .box {
        position: relative;
        width: 100%;
        overflow-y: hidden;
        overflow-x: auto;
        box-sizing: border-box;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .tabs {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        width: max-content;
        box-sizing: border-box;

        .item {
            display: inline-block;
            flex: 0 0 auto;
            height: 32px;
            line-height: 32px;
            margin-left: -1px;
            border-width: 0px;
            text-align: center;
            transition: all .3s;
            font-size: 12px;
            padding: 0 20px;
            box-sizing: border-box;
            position: relative;
            vertical-align: middle;

            &:after {
                display: block;
                content: '';
                width: 0%;
                position: absolute;
                bottom: 0px;
                transition: width .3s;
                transform: translateX(-50%);
                left: 50%;
                border-bottom-width: 2px !important;
            }

            &[selected]:after {
                width: 100%;
            }

            .titleIcon {
                padding-right: 5px;
                vertical-align: middle;
            }

            .text {
                min-width: 40px;
                max-width: 100px;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                vertical-align: middle;
            }

            .clearable {
                font-size: 14px;
                line-height: 32px;
                margin-right: -14px;
                transform: scale(0);
                transition: all .3s;
                vertical-align: middle;
            }

            &:hover .clearable {
                margin-right: 0px;
                margin-left: 5px;
                transform: scale(1);
            }
        }
    }

    .content {
        padding: 10px 0;
    }
}
</style>
