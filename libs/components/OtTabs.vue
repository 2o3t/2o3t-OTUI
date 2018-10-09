<template>
    <ul ot :class="[$style.root]" class="ot-tabs">
        <li ot v-bind="$otColors" :class="[$style.item]"
            :selected="item.name === select.name" v-for="(item, index) in list" :key="index" @click="handleTabsActive(item)">
            <span :class="$style.text">{{item.title}}</span>
            <ot-icon v-bind="$otColors.icon" :class="$style.icon" :size="$otSize" icon="close" v-show="index!==0" @click="handleTabsClose(item)"></ot-icon>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ot-tabs',
    props: {
        list: [ Array ],
        select: [ Object ],
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    hover: [ 'pri-bg-h' ],
                    active: [ 'pri-bg-a' ],
                    selected: [ 'pri-bb-s', 'after' ],
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
                    hover: [ 'def-bg-hov', 'pri-f-hov' ],
                    active: [ 'pri-f-act', 'def-bg-act' ],
                    selected: [ 'pri-bb-sel', 'after' ],
                    // disabled: [ 'def-bg-dis', 'def-f-dis', 'def-b-dis' ],
                    icon: {
                        normal: 'def-f',
                        hover: 'pri-f-h',
                        active: 'def-f-a',
                    },
                };
        }
    },
    mounted() {
        // console.error(this.$otColors.icon);
    },
    methods: {
        handleTabsActive(tab) {
            this.$emit('action', 'active', tab);
        },
        handleTabsClose(tab) {
            this.$emit('action', 'close', tab);
        },
    },
};
</script>

<style lang="scss" module>
    .root {
        height: 100%;
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

            .text {
                min-width: 40px;
                max-width: 100px;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                vertical-align: middle;
            }

            .icon {
                font-size: 14px;
                line-height: 32px;
                margin-right: -14px;
                transform: scale(0);
                transition: all .3s;
                vertical-align: middle;
            }

            &:hover .icon {
                margin-right: 0px;
                transform: scale(1);
            }
        }
    }
</style>
