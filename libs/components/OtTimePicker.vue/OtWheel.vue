<template>
    <ul ot v-bind="$otColors.list" class="ot-wheel" :class="$style.root">
        <li ot v-bind="$otColors.item" class="ot-wheel-item" :class="$style.item" v-for="(item, index) in list" :key="index"
            @click="handleSelectClick(item)" :selected="(typeof item !== 'object') ? (model === item) : (model === item.value)">
            <span>{{ (typeof item !== 'object') ? item : item.value }}</span>
        </li>
    </ul>
</template>

<script>
import theme from './OtWheelTheme';
export default {
    name: 'ot-wheel',
    mixins: [ theme ],
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        list: {
            type: Array,
            default() {
                return [];
            },
        },
        model: {
            type: [ String, Number ],
            default: '',
        },
        disabled: [ Boolean ],
    },
    methods: {
        handleSelectClick(item) {
            if (typeof item === 'object') {
                const value = item.value;
                this.$emit('update', value);
            } else {
                this.$emit('update', item);
            }
            this.$emit('change', item);

            this.updateScrollTop();
        },
        updateScrollTop() {
            this.$nextTick(() => {
                const els = this.$el.querySelector('li[selected]');
                if (els) {
                    const currentY = this.$el.scrollTop;
                    const targetY = els.offsetTop;
                    this.$otUtils.scrollAnimation(currentY, targetY, this.$el);
                }
            });
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    height: 10em;
    min-width: 4em;
    overflow-y: auto;
    overflow-x: hidden;

    .item {
        padding: 0 0.6em;

        &[selected] {
            font-weight: $--main-font-weight-medium;
        }
    }

    @include __ot_size__;
}
</style>

