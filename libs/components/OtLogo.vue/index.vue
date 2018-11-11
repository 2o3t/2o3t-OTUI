<template>
    <span ot v-ot-bind="$otColors" class="ot-logo" :class="$style.root" :size="$otSize">
        <ot-icon :class="$style.icon" :icon="icon" :url="url"></ot-icon>
        <div :class="$style.title">
            <slot></slot>
        </div>
        <div v-if="$slots.subtitle" :class="$style.subtitle">
            <slot name="subtitle"></slot>
        </div>
    </span>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-logo',
    mixins: [ theme ],
    props: {
        // font icon
        icon: [ String ],
        // url
        url: [ String ],
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    font-weight: $--main-font-weight-semibold;
    user-select: none;

    @include __ot_root_block__;

    .icon {
        display: table-cell;
        vertical-align: middle;
        padding: 0 10px;
        margin: 0;
    }

    .title {
        display: table-cell;
        vertical-align: middle;
        padding-left: 0.6em;
        margin: 0;
    }

    .subtitle {
        display: table-cell;
        vertical-align: middle;
        margin: 0;
        font-weight: $--main-font-weight;

        &:before {
            display: inline-block;
            content: '|';
            padding: 0 0.6em;
        }
    }

    &[size=mini] {
        min-height: $--ot-mini-height;
        line-height: $--ot-mini-height;
        font-size: $--ot-mini-size * 2;

        .icon {
            font-size: $--ot-mini-size * 2;
        }

        .subtitle {
            font-size: $--ot-mini-size;
        }
    }

    &[size=small] {
        min-height: $--ot-small-height;
        line-height: $--ot-small-height;
        font-size: $--ot-small-size * 2;

        .icon {
            font-size: $--ot-small-size * 2;
        }

        .subtitle {
            font-size: $--ot-small-size;
        }
    }

    &[size=normal] {
        min-height: $--ot-normal-height;
        line-height: $--ot-normal-height;
        font-size: $--ot-normal-size * 2;

        .icon {
            font-size: $--ot-normal-size * 2;
        }

        .subtitle {
            font-size: $--ot-normal-size;
        }
    }

    &[size=big] {
        min-height: $--ot-big-height;
        line-height: $--ot-big-height;
        font-size: $--ot-big-size * 2;

        .icon {
            font-size: $--ot-big-size * 2;
        }

        .subtitle {
            font-size: $--ot-big-size;
        }
    }
}
</style>

<style lang="scss">
.ot-logo {
    padding-left: 2em;
}
</style>
