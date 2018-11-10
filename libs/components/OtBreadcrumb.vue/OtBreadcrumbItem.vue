<template>
    <span ot class="ot-breadcrumb-item" :class="$style.root" :size="$otSize">
        <ot-link :class="$style.link" v-bind="$attrs" :to="to" :replace="replace">
            <!-- 可参考 ot-link 使用 -->
            <slot></slot>
        </ot-link>
        <ot-icon ot v-ot-bind="$otColors.separator" v-if="!bLastIndex" class="ot-breadcrumb-item__separator" :class="$style.separator" :icon="separatorIcon"><span v-if="separator">{{ separator }}</span></ot-icon>
    </span>
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
        &[href] {
            font-weight: $--main-font-weight-medium;
        }
    }

    .separator {
        margin: 0 0.6em;
        font-size: 0.8em;
    }
}
</style>
