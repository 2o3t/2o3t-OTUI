<template>
    <div ot class="ot-breadcrumb-item" :class="$style.root" :size="$otSize">
        <ot-link :class="$style.link" v-bind="$attrs" :to="to" :replace="replace">
            <!-- 可参考 ot-link 使用 -->
            <slot></slot>
        </ot-link>
        <span v-if="separator" v-show="!bLastIndex" ot v-bind="$otColors.separator" class="ot-breadcrumb-item__separator" :class="$style.separator">{{ separator }}</span>
        <ot-icon v-else v-show="!bLastIndex" ot v-bind="$otColors.separator" class="ot-breadcrumb-item__separator" :class="$style.separator" :icon="separatorIcon"></ot-icon>
    </div>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-breadcrumb-item',
    mixins: [ theme ],
    inject: [ '$OtBreadcrumb' ],

    props: {
    // vue-router 路由, 跳转 名称 或 对象. 更多参考 `ot-link`
        to: {
            type: [ String, Object ],
            default: null,
        },
        // vue-router 跳转是否为 `replace`. 更多参考 `ot-link`
        replace: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            separator: '',
            separatorIcon: '',
            bLastIndex: false,
        };
    },
    created() {
        if (this.$OtBreadcrumb) {
            this.$OtBreadcrumb.addItem(this);
        }
    },
    methods: {
        updateSync() {
            if (this.$OtBreadcrumb) {
                this.separatorIcon = this.$OtBreadcrumb.separatorIcon;
                if (this.separatorIcon) {
                    this.separator = '';
                } else {
                    this.separator = this.$OtBreadcrumb.separator;
                }
            }
        },
    },
    mounted() {
        this.updateSync();
    },
    beforeUpdate() {
        this.updateSync();
    },
    beforeDestroy() {
        if (this.$OtBreadcrumb) {
            this.$OtBreadcrumb.removeItem(this);
        }
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;

    @include __ot_size__;

    .link {
        display: inline-block;
        vertical-align: middle;

        &[href] {
            font-weight: $--main-font-weight-medium;
        }
    }

    .separator {
        box-sizing: border-box;
        margin: 0 0.6em;
        transform-origin: center;
        transform: scale(0.8);
        vertical-align: middle;
    }
}
</style>
