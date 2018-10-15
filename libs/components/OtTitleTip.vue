<template>
    <ot-tip ot class="ot-title-tip" :class="$style.root" :round="round" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
        <div ot v-bind="$otColors.tip" slot="tip" :size="$otSize" :theme="$otTheme" class="ot-title-tip-popper" :style="style" :round="round">
            <slot name="title">{{ title }}</slot>
        </div>
    </ot-tip>
</template>

<script>
export default {
    name: 'ot-title-tip',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'light-f', 'dark-bg', 'light-b' ],
                    },
                };
            case 'light':
            default:
                return {
                    tip: {
                        normal: [ 'def-f', 'light-bg', 'dark-b' ],
                    },
                };
        }
    },
    props: {
        content: {
            type: [ String, Number ],
            default: '',
        },
        width: {
            type: [ Number ],
            default: 0,
        },
        textAlign: {
            type: [ String ],
            default: 'center',
        },
    },
    watch: {
        content(newV) {
            this.title = newV;
        },
    },
    data() {
        return {
            style: {
                display: 'block',
                position: 'relative',
                width: this.width ? `${this.width}px` : 'auto',
                textAlign: this.textAlign,
                boxSizing: 'border-box',
            },
            title: this.content,
        };
    },
};
</script>

<style lang="scss" module>
.root {
    display: inline-block;
    box-sizing: border-box;
}
</style>

<style lang="scss">
.ot-tip-popper {

    .ot-title-tip-popper {
        padding: 0.3em 0.6em;
    }
}
</style>
