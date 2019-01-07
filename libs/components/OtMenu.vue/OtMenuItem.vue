<template>
    <li ot :class="$style.root" class="ot-menu-item" v-bind="$otColors" :size="$otSize" :collapse="isCollapse" :selected="isSelected" :disabled="disabled">
        <ot-background-mask v-bind="$otColors.link" enable :alpha="alphaWhite" :otColors="$otColors.mask" :selected="isSelected" :disabled="disabled">
            <ot-link :class="$style.link" :href="href" :to="to" @click="handleClick"
                :color="color" :selected="isSelected" :disabled="disabled">
                <ot-icon :class="$style.icon" :icon="icon" v-if="icon"></ot-icon>
                <!-- 自定义标题容器 -->
                <slot name="title" v-if="!isCollapse"></slot>
                <!-- 不支持 collapse 的标题容器 -->
                <slot></slot>
            </ot-link>
        </ot-background-mask>
    </li>
</template>

<script>
import theme from './OtMenuItemTheme.js';
export default {
    name: 'ot-menu-item',
    mixins: [ theme ],
    inject: [ '$OtMenu', '$OtMenuGroup' ],
    props: {
        // 标题前图标
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
    data() {
        return {
            alphaWhite: 5,
        };
    },
    computed: {
        isCollapse() {
            let result = false;
            if (this.$OtMenu && this.$OtMenu.isCollapse) {
                result = this.$OtMenu.isCollapse;
            }
            return result;
        },
        isSelected() {
            let result = false;
            if (this.$OtMenu && this.$OtMenu.value) {
                const s = this.$OtMenu.value;
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
            if (this.$OtMenu) {
                this.$OtMenu.updateSelect(this.index);
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

<style module lang='scss'>
@import '../globals';
.root {
    display: block;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    white-space: nowrap;
    list-style: none;
    height: 3em;
    line-height: 3em;
    list-style-type: disc;
    list-style-position: inside;
    margin: 0.4em 0 0.6em 0;

    .link {
        display: inline-block;
        padding: 0 2em;
        position: relative;
        width: 100%;
        height: 100%;

        &[ot]:not([selected]):not([disabled]):not(:hover):not(:active) {
            color: inherit;
        }
    }

    @include __ot_size__;

    $--font-weight-size: $--main-font-weight-medium;
    $--border-right-width: 0.3em;

    .backgroundMask {
        margin-left: $--border-right-width;
    }

    &[ot-color-after]:after, &[ot-color-before]:before {
        content: '';
        display: block;
        position: absolute;
        transition: height .3s;
        height: 0%;
        transform: translateY(-50%);
        top: 50%;
    }

    &[ot-color-after]:after {
        right: 0;
    }

    &[ot-color-before]:before {
        left: 0;
    }

    &[class][ot-color-after]{
        &:hover {
            font-weight: $--font-weight-size;

            &[class]:after {
                height: 100%;
                border-right-width: $--border-right-width;
            }
        }

        &[selected] {
            font-weight: $--font-weight-size;

            &:after {
                height: 100%;
                border-right-width: $--border-right-width;
            }
        }
    }

    &[class][ot-color-before]{
        &:hover {
            font-weight: $--font-weight-size;

            &[class]:before {
                height: 100%;
                border-right-width: $--border-right-width;
            }
        }

        &[selected] {
            font-weight: $--font-weight-size;

            &:before {
                height: 100%;
                border-right-width: $--border-right-width;
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
