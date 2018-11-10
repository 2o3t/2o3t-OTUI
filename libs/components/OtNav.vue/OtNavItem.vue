<template>
    <li ot v-ot-bind="$otColors" class="ot-nav-item" :size="$otSize"
        :class="$style.root" :collapse="isCollapse"
        :disabled="disabled" :selected="isSelected">
        <ot-link :class="$style.link" :href="href" :to="to" @click="handleClick">
            <ot-icon :class="$style.icon" :icon="icon" v-if="icon"></ot-icon>
            <!-- 自定义标题容器 -->
            <slot name="title" v-if="!isCollapse"></slot>
            <!-- 不支持 collapse 的标题容器 -->
            <slot></slot>
        </ot-link>
    </li>
</template>

<script>
import theme from './OtNavItemTheme.js';
export default {
    name: 'ot-nav-item',
    mixins: [ theme ],
    inject: [ '$OtNav' ],
    props: {
        // 标题左侧图标
        icon: [ String ],
        // 唯一标志, 与 menu 的 model 对应, 可以是 router 路径
        index: [ String ],
        // 是否禁用
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        // 跳转路径
        href: {
            type: [ String ],
            default: null,
        },
        // 路由跳转, 具体参照 ot-link
        to: {
            type: [ String, Object ],
            default: null,
        },
    },
    computed: {
        isCollapse() {
            let result = false;
            if (this.$OtNav && this.$OtNav.isCollapse) {
                result = this.$OtNav.isCollapse;
            }
            return result;
        },
        isSelected() {
            let result = false;
            if (this.$OtNav && this.$OtNav.value) {
                const s = this.$OtNav.value;
                result = (this.startsWith(s, this.index));
            } else if (this.$route && this.to) {
                if (typeof this.to === 'string') {
                    result = (this.startsWith(this.$route.fullPath, this.to));
                } else if (typeof this.to === 'object' && this.to.name) {
                    const { route } = this.$router.resolve(this.to, this.$route);
                    result = (this.startsWith(this.$route.fullPath, route.fullPath));
                }
            }
            return result;
        },
    },
    methods: {
        handleClick() {
            if (this.$OtNav) {
                this.$OtNav.updateSelect(this.index);
            }
            if (this.$router) {
                if (this.index && !this.to && !this.href) {
                    this.$router.push(this.index);
                }
            }
        },
        startsWith(a, b) {
            const ap = `${a}/`;
            const bp = `${b}/`;
            return ap.startsWith(bp);
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    display: inline-block;
    cursor: pointer;
    transition: all .3s;
    box-sizing: border-box;
    position: relative;
    white-space: nowrap;
    list-style: none;
    list-style-type: disc;
    list-style-position: inside;
    margin: 0 0.6em;

    .link {
        display: inline-block;
        padding: 0 1em;
        position: relative;
        width: 100%;
        height: 100%;

        &:hover {
            color: inherit;
        }
    }

    @include __ot_size__;

    &[ot-color-after]:after, &[ot-color-before]:before {
        content: '';
        display: block;
        position: absolute;
        transition: width .3s;
        width: 0%;
        transform: translateX(-50%);
        left: 50%;
    }

    &[ot-color-after]:after {
        bottom: 0;
    }

    &[ot-color-before]:before {
        top: 0;
    }

    $--font-weight-size: $--main-font-weight-medium;
    $--border-bottom-width: 0.3em;

    &[class][ot-color-after]{
        &:hover {
            font-weight: $--font-weight-size;

            &[class]:after {
                width: 100%;
                border-bottom-width: $--border-bottom-width;
            }
        }

        &[selected] {
            font-weight: $--font-weight-size;

            &:after {
                width: 100%;
                border-bottom-width: $--border-bottom-width;
            }
        }
    }

    &[class][ot-color-before]{
        &:hover {
            font-weight: $--font-weight-size;

            &[class]:before {
                width: 100%;
                border-bottom-width: $--border-bottom-width;
            }
        }

        &[selected] {
            font-weight: $--font-weight-size;

            &:before {
                width: 100%;
                border-bottom-width: $--border-bottom-width;
            }
        }
    }

    .icon {
        transition: padding .3s;
        padding-right: 10px;
    }

    &[collapse] {

        .icon {
            padding: 0 6px;
        }
    }
}
</style>

