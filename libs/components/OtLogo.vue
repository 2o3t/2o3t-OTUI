<template>
    <span ot v-bind="$otColors" class="ot-logo" :class="$style.root" :size="$otSize">
        <ot-icon :class="$style.icon" :icon="icon" :url="url"></ot-icon>
        <div :class="$style.title">
            <slot></slot>
        </div>
    </span>
</template>

<script>
export default {
    name: 'ot-logo',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'pri-f' ],
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                };
        }
    },
    props: {
        icon: [ String ],
        url: [ String ],
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    font-weight: bold;
    user-select: none;

    &:after {
        content: '';
        display: table;
    }

    .icon {
        display: table-cell;
        vertical-align: middle;
        padding: 0 10px;
        margin: 0;
    }

    .title {
        display: table-cell;
        vertical-align: middle;
        padding: 0;
        margin: 0;
    }

    &[size=mini] {
        padding: 0px 15px;
        min-height: $--ot-mini-height;
        line-height: $--ot-mini-height;
        font-size: $--ot-mini-size * 2;

        .icon {
            font-size: $--ot-mini-size * 2;
        }
    }

    &[size=small] {
        padding: 0px 15px;
        min-height: $--ot-small-height;
        line-height: $--ot-small-height;
        font-size: $--ot-small-size * 2;

        .icon {
            font-size: $--ot-small-size * 2;
        }
    }

    &[size=normal] {
        padding: 0px 20px;
        min-height: $--ot-normal-height;
        line-height: $--ot-normal-height;
        font-size: $--ot-normal-size * 2;

        .icon {
            font-size: $--ot-normal-size * 2;
        }
    }

    &[size=big] {
        padding: 0px 25px;
        min-height: $--ot-big-height;
        line-height: $--ot-big-height;
        font-size: $--ot-big-size * 2;

        .icon {
            font-size: $--ot-big-size * 2;
        }
    }
}
</style>

