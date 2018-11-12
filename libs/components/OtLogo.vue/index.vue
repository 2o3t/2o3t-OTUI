<template>
    <span ot v-ot-bind="$otColors" class="ot-logo" :class="$style.root" :size="$otSize">
        <ot-icon v-ot-bind="$otColors.logo" :class="$style.logo" :icon="icon" :url="url" :lib="lib"></ot-icon>
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
        // icon-font lib
        lib: String,
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

    @include __ot_size__;
    @include __ot_root_block__;

    .logo[class] {
        display: table-cell;
        vertical-align: middle;
        padding: 0;
        margin: 0;
        font-size: 2.2em;
    }

    .title {
        display: table-cell;
        vertical-align: middle;
        padding-left: 0.6em;
        margin: 0;
        font-size: 2em;
    }

    .subtitle {
        display: table-cell;
        vertical-align: middle;
        margin: 0;
        font-weight: $--main-font-weight;
        font-size: 2em;

        &:before {
            display: inline-block;
            content: '|';
            padding: 0 0.6em;
        }
    }

    &[size=mini] {
        min-height: $--ot-mini-height;
        line-height: $--ot-mini-height;
    }

    &[size=small] {
        min-height: $--ot-small-height;
        line-height: $--ot-small-height;
    }

    &[size=normal] {
        min-height: $--ot-normal-height;
        line-height: $--ot-normal-height;
    }

    &[size=big] {
        min-height: $--ot-big-height;
        line-height: $--ot-big-height;
    }
}
</style>

<style lang="scss">
.ot-logo {
    padding-left: 2em;
}
</style>
