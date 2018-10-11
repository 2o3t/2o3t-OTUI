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
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.onload();
        });
    },
    methods: {
        throttle(fun, delay, time) {
            let timeout;
            let startTime = new Date();
            const context = this;
            fun = fun.bind(this);
            return function() {
                const args = arguments;
                const curTime = new Date();
                clearTimeout(timeout);
                // 如果达到了规定的触发时间间隔，触发 handler
                // console.log(curTime - startTime);
                if (curTime - startTime >= time) {
                    context.$nextTick(() => {
                        fun(args);
                    });
                    startTime = curTime;
                } else { // 没达到触发间隔，重新设定定时器
                    timeout = setTimeout(() => {
                        context.$nextTick(() => {
                            fun(args);
                        });
                    }, delay);
                }
            };
        },
        // 实际想绑定在 scroll 事件上的 handler
        // 需要访问到imgs ,  scroll
        lazyLoad() {
            const scrollTop = window.scrollY;
            const item = this.$el;
            const offsetTop = item.offsetTop;
            const innerHeight = window.innerHeight;

            if (scrollTop === 0 && !this.finish && offsetTop < innerHeight + scrollTop) {
                this.finish = true;
            } else if (!this.finish && offsetTop < innerHeight + scrollTop && offsetTop > scrollTop) {
                this.finish = true;
            }
            if (this.finish) {
                this.unload();
            }
        },
        onload() {
            this.lazyLoad();
            // 采用了节流函数
            const time = this.time;
            this.fn = this.throttle(this.lazyLoad, 520, time);
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
