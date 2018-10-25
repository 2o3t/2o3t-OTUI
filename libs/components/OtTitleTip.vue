<template>
    <ot-tip ot class="ot-title-tip" :class="$style.root" :value="bShown" @update="handleUpdate" :round="round" v-bind="$attrs" v-on="$listeners" :arrow="arrow" :arrowAttrs="$otColors.arrow">
        <slot></slot>
        <div ot v-ot-bind="$otColors.tip" slot="tip" :size="$otSize" :theme="$otTheme" class="ot-title-tip-popper" :style="style" :round="round">
            <slot name="title">{{ title }}</slot>
        </div>
    </ot-tip>
</template>

<script>
export default {
    name: 'ot-title-tip',
    model: {
        prop: 'value',
        event: 'update',
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
        arrow: {
            type: [ Boolean ],
            default: true,
        },
        value: [ Boolean ],
    },
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    tip: {
                        normal: [ 'light-f', 'dark-bg', 'def-b' ],
                    },
                    arrow: {
                        normal: [ 'light-f', 'dark-bg' ],
                    },
                };
            case 'light':
            default:
                return {
                    tip: {
                        normal: [ 'def-f', 'light-bg', 'def-b' ],
                    },
                    arrow: {
                        normal: [ 'def-f', 'light-bg' ],
                    },
                };
        }
    },
    watch: {
        value(newV) {
            this.bShown = newV;
        },
        content(newV) {
            this.title = newV;
        },
    },
    data() {
        return {
            bShown: false,
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
    methods: {
        handleUpdate(value) {
            this.bShown = value;
            this.$emit('update', value);
        },
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
