<template>
    <div ot v-ot-bind="$otColors" class="ot-nav" :size="$otSize"
         :class="$style.root" :collapse="isCollapse">
        <div v-if="$slots.left" :class="$style.left">
            <slot name="left"></slot>
        </div>
        <div class="ot-nav__content" :class="$style.nav">
            <slot></slot>
        </div>
        <div v-if="$slots.right" :class="$style.right">
            <slot name="right"></slot>
        </div>
        <ot-line v-if="line" type="bottom"></ot-line>
    </div>
</template>

<script>
export default {
    name: 'ot-nav',
    props: {
        isCollapse: [ Boolean ],
        line: {
            type: [ Boolean ],
            default: true,
        },
    },
};
</script>

<style module lang='scss'>
@import './globals';
.root {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    transition: all .3s;
    box-sizing: border-box;
    height: 6.4rem;
    line-height: 6.4rem;

    @include __ot_size__;

    .top {
        flex: 0 0 auto;
    }

    .nav {
        flex: 1;
        list-style: none;
        position: relative;
        margin: 0;
        padding-left: 0;
        display: flex;
        flex-direction: row;
    }

    .bottom {
        flex: 0 0 auto;
    }
}
</style>

<style lang="scss">
@import './globals';
.ot-nav[ot] {

    &[collapse]>.ot-nav__content {
        flex-direction: column;
        position: absolute;
        top: 6.4rem;
        left: 0;
        right: 0;

        @include __ot_box_shadow__;
    }

    .ot-nav-item[ot] {
        flex: 0 0 auto;
    }
}
</style>
