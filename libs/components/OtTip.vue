<template>
    <div ot v-bind="$attrs" v-on="$listeners" :size="$otSize" class="ot-tip" :class="$style.root"
        @mouseover="handleMouseOver" @mouseout="handleMouseOut"
        >
        <slot></slot>
    </div>
</template>

<script>
let INDEX = 3000;
export default {
    name: 'ot-tip',
    props: {
        disabled: {
            type: [ Boolean ],
            default: false,
        },
        manual: { // 手动
            type: [ Boolean ],
            default: false,
        },
        popperClass: {
            type: [ String ],
            default: '',
        },
        placement: {
            type: [ String ],
            default: 'auto', // top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   auto
        },
        value: [ Boolean ],
        enterable: { // 鼠标是否可进入到内容中
            type: [ Boolean ],
            default: true,
        },
        refresh: [ Number ],
        offsetX: {
            type: [ Number ],
            default: 0,
        },
        offsetY: {
            type: [ Number ],
            default: 0,
        },
        transition: {
            type: [ String ],
            default: 'all .3s',
        }
    },
    data() {
        return {
            index: INDEX++,
            mountedComp: null,
            targetEl: null,
            top: 0,
            left: 0,
            bShown: this.value,
            position: 'absolute',
        };
    },
    watch: {
        value(newV) {
            this.bShown = newV;
            if (this.bShown) {
                this.show();
            } else {
                this.hide();
            }
        },
        refresh(newV, oldV) {
            if (newV !== oldV) {
                this._initPosition_();
            }
        },
    },
    computed: {
        _width() {
            return this.$el.offsetWidth;
        },
        _height() {
            return this.$el.offsetHeight;
        },
    },
    methods: {
        _init_() {
            if (!this.targetEl) {
                this.targetEl = document.createElement('div');
                const rootEl = this.$root ? this.$root.$el : document.body;
                rootEl.appendChild(this.targetEl);

                this._initRenderComp_();
            }
        },
        _initPosition_() {
            const position = this.$otUtils.getStyle(this.$el, 'position');
            this.position = (position === 'fixed' ? 'fixed' : 'absolute');
            if (this.$el.getBoundingClientRect && this.position === 'fixed') {
                const rect = this.$el.getBoundingClientRect();
                this.top = rect.top;
                this.left = rect.left;
            } else {
                this.top = this.$otUtils.getOffsetTop(this.$el);
                this.left = this.$otUtils.getOffsetLeft(this.$el);
            }
            if (this.mountedComp) {
                this.mountedComp.top = this.top + this.offsetY;
                this.mountedComp.left = this.left + this.offsetX;
            }
        },
        _initRenderComp_() {
            if (!this.mountedComp) {
                const Vue = this.$options.__OT_Vue__;
                if (Vue) {
                    const $vm = this;
                    const newTarget = new Vue({
                        parent: $vm,
                        data() {
                            return {
                                top: $vm.top,
                                left: $vm.left,
                                bShown: false,
                                index: $vm.index,
                                style: {
                                    display: 'block',
                                    boxSizing: 'border-box',
                                    transformOrigin: 'center bottom 0px',
                                    zIndex: this.index,
                                    transition: $vm.transition,
                                },
                                size: $vm.$otSize,
                                refresh: 0,
                            };
                        },
                        watch: {
                            top(nv, ov) {
                                if (nv !== ov) {
                                    this.initPlacement();
                                    this.refresh++;
                                }
                            },
                            left(nv, ov) {
                                if (nv !== ov) {
                                    this.initPlacement();
                                    this.refresh++;
                                }
                            },
                        },
                        computed: {
                            visibility() {
                                const visibility = this.bShown ? 'visible' : 'hidden';
                                return visibility;
                            },
                            position() {
                                return $vm.position;
                            },
                            bottom() {
                                return this.top + $vm._height;
                            },
                            right() {
                                return this.left + $vm._width;
                            },
                            centerX() {
                                return this.left + $vm._width / 2;
                            },
                            centerY() {
                                return this.top + $vm._height / 2;
                            },
                            height() {
                                return this.$el.offsetHeight;
                            },
                            width() {
                                return this.$el.offsetWidth;
                            },
                        },
                        methods: {
                            show() {
                                this.bShown = true;
                                this.style.display = 'block';
                                this.initPlacement();
                            },
                            hide() {
                                this.bShown = false;
                                this.style.display = 'none';
                            },
                            initPlacement() {
                                let placement = $vm.placement;

                                if (placement === 'auto' || (!/^(top|bottom|left|right)$/ig.test(placement) && !/^(top|bottom|left|right)-(start|end)$/ig.test(placement))) {
                                    const $el = $vm.$el;
                                    const rect = $el.getBoundingClientRect();
                                    const offsetTop = rect.top;
                                    const innerHeight = window.innerHeight;
                                    const offset = offsetTop - innerHeight / 2;
                                    if (offset > 0) {
                                        placement = 'top';
                                    } else {
                                        placement = 'bottom';
                                    }
                                }

                                // top/top-start/top-end/ bottom/bottom-start/bottom-end/ left/left-start/left-end/ right/right-start/right-end
                                const place = placement.split('-');
                                if (place[0] === 'top') {
                                    this.style.top = this.top - this.height + 'px';
                                } else if (place[0] === 'bottom') {
                                    this.style.top = this.bottom + 'px';
                                } else if (place[0] === 'left') {
                                    this.style.left = this.left - this.width + 'px';
                                } else if (place[0] === 'right') {
                                    this.style.left = this.right + 'px';
                                }

                                if (place[0] === 'top' || place[0] === 'bottom') {
                                    if (place[1] === 'start') {
                                        this.style.left = this.left + 'px';
                                    } else if (place[1] === 'end') {
                                        this.style.left = this.right - this.width + 'px';
                                    } else {
                                        this.style.left = this.centerX - this.width / 2 + 'px';
                                    }
                                } else if (place[0] === 'left' || place[0] === 'right') {
                                    if (place[1] === 'start') {
                                        this.style.top = this.top + 'px';
                                    } else if (place[1] === 'end') {
                                        this.style.top = this.bottom - this.height + 'px';
                                    } else {
                                        this.style.top = this.centerY - this.height / 2 + 'px';
                                    }
                                }
                            },
                        },
                        render() {
                            const slot = $vm.$slots.tip;
                            const className = `ot-tip-popper ot-tip-${this.index} ${$vm.popperClass}`;
                            return (<transition name="fade">
                                <div ot size={this.$otSize} class={className} style={Object.assign(this.style, {
                                    visibility: this.visibility,
                                    position: this.position,
                                })} refresh={this.refresh}
                                onMouseover={$vm.enterable && $vm.handleMouseOver.bind($vm)}
                                onMouseout={$vm.enterable && $vm.handleMouseOut.bind($vm)}
                                >
                                    { slot }
                                </div>
                            </transition>);
                        },
                    });
                    newTarget.$mount(this.targetEl);
                    this.mountedComp = newTarget;
                }
            }
        },
        handleMouseOver() {
            if (this.manual) return;
            this.show();
        },
        handleMouseOut() {
            if (this.manual) return;
            this.hide();
        },
        show() {
            if (this.disabled) return;
            this._init_();
            this.bShown = true;
            this.$emit('update', true);

            this._initPosition_();

            this.$nextTick(() => {
                if (this.mountedComp) {
                    this.mountedComp.show();
                }
            });
        },
        hide() {
            if (this.disabled) return;
            this.bShown = false;
            this.$emit('update', false);
            if (this.mountedComp) {
                this.mountedComp.hide();
            }
        },
        handleScrollEvent() {
            if (this.bShown) { // show
                // console.log('handleScrollEvent', this.bShown);
                this._initPosition_();
            }
        },
        registerScroll() {
            if (!this.fn) {
                this.fn = this.$otUtils.throttle(this.handleScrollEvent, 100, 10, this);
                // this.fn = this.handleScrollEvent.bind(this);
                this.$otUtils.addEventListener('scroll', this.fn);
            }
        },
        unregisterScroll() {
            if (this.fn) {
                this.$otUtils.removeEventListener('scroll', this.fn);
            }
        },
    },
    mounted() {
        this.registerScroll();
    },
    beforeDestroy() {
        if (this.mountedComp) {
            this.mountedComp.$destroy();
        }
        this.unregisterScroll();
    },
};
</script>

<style lang="scss" module>
.root {
    display: inline-block;
}
</style>

<style lang="scss">
@import './globals';
.ot-tip-popper {
    @include __ot_size__;

    &>[ot][round] {
        @include __ot_round__;
    }
}
</style>

