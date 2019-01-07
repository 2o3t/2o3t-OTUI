<template>
    <span ot v-bind="$otColors" class="ot-logo" :class="$style.root" :size="$otSize" :adaptive="adaptive">
        <ot-icon v-bind="$otColors.logo" :class="$style.logo" :icon="icon" :url="url" :lib="lib"></ot-icon>
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
        // 自动适配屏幕
        adaptive: Boolean,
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
        display: inline-block;
        vertical-align: middle;
        padding: 0;
        margin: 0;
        font-size: 2.6em;
    }

    .title {
        display: inline-block;
        vertical-align: middle;
        padding-left: 0.5em;
        margin: 0;
        font-size: 2em;
    }

    .subtitle {
        display: inline-block;
        vertical-align: middle;
        margin: 0;
        font-weight: $--main-font-weight;

        &:before {
            display: inline-block;
            content: '|';
            padding: 0 0.6em;
        }
    }

    @media (max-width: 767px) {
        &[adaptive] {
            .subtitle {
                display: none;
            }
        }
    }
}
</style>

<style lang="scss">
.ot-logo {
    padding-left: 2em;
}
</style>
