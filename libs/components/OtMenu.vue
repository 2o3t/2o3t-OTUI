<template>
    <div ot v-bind="$otColors" class="ot-menu" :size="$otSize"
         :class="$style.root" :collapse="isCollapse">
        <div :class="$style.top">
            <slot name="top"></slot>
        </div>
        <div :class="$style.content">
            <slot></slot>
        </div>
        <div :class="$style.bottom">
            <slot name="bottom"></slot>
        </div>
        <ot-line v-if="line" type="right"></ot-line>
    </div>
</template>

<script>
export default {
    name: 'ot-menu',
    props: {
        isCollapse: [ Boolean ],
        value: [ String ], // 子组件使用
        line: {
            type: [ Boolean ],
            default: true,
        }
    },
};
</script>

<style module lang='scss'>
@import './globals';
.root {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: all .3s;
    box-sizing: border-box;

    @include __ot_size__;

    .top {
        flex: 0 0 auto;
        overflow: hidden;
    }

    .content {
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        list-style: none;
        position: relative;
        margin: 0;
        padding-left: 0;
    }

    .bottom {
        flex: 0 0 auto;
        overflow: hidden;
    }
}
</style>

<style lang="scss">
.ot-menu[ot] {
    width: 200px;

    &[collapse] {
        width: 64px;
    }

    .ot-menu-item[ot] {

    }
}
</style>
