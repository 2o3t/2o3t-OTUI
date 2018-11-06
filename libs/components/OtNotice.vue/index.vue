<template>
    <div ot class="ot-notice" v-ot-bind="$otColors" :class="$style.root" :size="$otSize" :round="round">
        <!-- 内容区域, 默认可用 `context` -->
        <slot>
            <p>{{ context }}</p>
        </slot>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-notice',
    mixins: [ theme ],
    props: {
        // 文本内容
        context: {
            type: String,
            default: '重要!',
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    padding: 0.8em 1.6em;
    margin: 2em 0;
    border-left-width: 0.5em !important;

    @include __ot_size__;

    &[round] {
        @include __ot_round__;
    }

}
</style>

