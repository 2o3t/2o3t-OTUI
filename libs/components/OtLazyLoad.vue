<template>
    <div ot class="ot-lazy-load" :class="$style.root">
        <ot-loading v-if="!finish" :theme="$otTheme" :size="$otSize"></ot-loading>
        <div v-if="finish && $slots.default">
            <transition name="fade">
                <slot></slot>
            </transition>
        </div>
    </div>
</template>

<script>
let INDEX = 0;
export default {
    name: 'ot-lazy-load',
    props: {
        delay: {
            type: [ Number, String ],
            required: false,
            default: 500,
        },
    },
    data() {
        return {
            finish: false,
            fn: null,
            index: INDEX++,
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.onload();
        });
    },
    methods: {
        // 实际想绑定在 scroll 事件上的 handler
        // 需要访问到imgs ,  scroll
        lazyLoad() {
            const scrollTop = this.$otUtils.getScrollTop();
            const item = this.$el;
            const offsetTop = this.$otUtils.getOffsetTop(item);
            const innerHeight = window.innerHeight;

            if (scrollTop === 0 && !this.finish && offsetTop <= (innerHeight + scrollTop)) {
                this.finish = true;
            } else if (!this.finish && offsetTop < (innerHeight + scrollTop) && offsetTop > scrollTop) {
                this.finish = true;

                console.log(this.index);
            }
            if (this.finish) {
                this.unload();
            }
        },
        onload() {
            this.lazyLoad();
            // 采用了节流函数
            const time = this.time;
            this.fn = this.$otUtils.throttle(this.lazyLoad, 520, time, this);
            this.fn.id = this.index;
            window.addEventListener('scroll', this.fn);
        },
        unload() {
            if (this.fn) {
                window.removeEventListener('scroll', this.fn);
            }
            this.fn = null;
        },
    },
    beforeDestroy() {
        this.unload();
    },
};
</script>

<style lang="scss" module>
.root {
    position: relative;
    box-sizing: border-box;
    width: auto;
    height: auto;
    overflow: hidden;
}
</style>

<style>
.fade {
    position: absolute;
    opacity: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
