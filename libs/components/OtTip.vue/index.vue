<template>
    <div ot v-bind="$attrs" v-on="_listeners" :size="$otSize" class="ot-tip" :class="$style.root"
        @mouseover="handleMouseOver" @mouseout="handleMouseOut"
        @click="handleClick" :manual="manual" :disabled="disabled"
        >
        <slot></slot>
    </div>
</template>

<script>
let INDEX = 3000;
export default {
    name: 'ot-tip',
    model: {
        prop: 'value',
        event: 'update',
    },
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
        },
        arrow: {
            type: [ Boolean ],
            default: false,
        },
        arrowAttrs: {
            type: [ Object ],
            default() {
                return {};
            },
        },
        clickable: { // 必须 manual= true
            type: [ Boolean ],
            default: false,
        },
    },
    data() {
        return {
            index: INDEX++,
            mountedComp: null,
            targetEl: null,
            top: 0,
            left: 0,
            bShown: this.value,
            position: 'fixed',
            iClickFn: null,
            iScrollFn: null,
        };
    },
    watch: {
        value(newV) {
            if (newV !== this.bShown) { // 防止重复
                if (newV) {
                    this.show();
                } else {
                    this.hide();
                }
            }
        },
    },
    computed: {
        _listeners() {
            const listeners = Object.assign({}, this.$listeners);
            delete listeners.click;
            return listeners;
        },
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
            // const position = this.$otUtils.getStyle(this.$el, 'position');
            const position = 'fixed';
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
                this.mountedComp.top = this.top;
                this.mountedComp.left = this.left;
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
                                arrowPlacement: 'auto',
                                height: 0,
                                width: 0,
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
                            position() {
                                return $vm.position;
                            },
                            bottom() {
                                return this.top + $vm._height;
                            },
                            right() {
                                return this.left + $vm._width;
                            },
                            _top() {
                                return this.top - $vm.offsetY;
                            },
                            _bottom() {
                                return this.top + $vm._height + $vm.offsetY;
                            },
                            _left() {
                                return this.left - $vm.offsetX;
                            },
                            _right() {
                                return this.left + $vm._width + $vm.offsetX;
                            },
                            centerX() {
                                return this.left + $vm._width / 2;
                            },
                            centerY() {
                                return this.top + $vm._height / 2;
                            },
                        },
                        mounted() {
                            this.initSize();
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
                            initSize() {
                                this.height = this.$el.offsetHeight;
                                this.width = this.$el.offsetWidth;

                                this.style.zIndex = this.index;
                            },
                            initPlacement() {
                                let placement = $vm.placement;

                                if (placement === 'auto' || (!/^(top|bottom|left|right)$/ig.test(placement) && !/^(top|bottom|left|right)-(start|end)$/ig.test(placement))) {
                                    const $el = $vm.$el;
                                    const rect = $el.getBoundingClientRect();
                                    const offsetTop = rect.top;
                                    const innerHeight = this.$otUtils.getViewHeight();
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
                                    this.style.top = this._top - this.height + 'px';
                                } else if (place[0] === 'bottom') {
                                    this.style.top = this._bottom + 'px';
                                } else if (place[0] === 'left') {
                                    this.style.left = this._left - this.width + 'px';
                                } else if (place[0] === 'right') {
                                    this.style.left = this._right + 'px';
                                }

                                if (place[0] === 'top' || place[0] === 'bottom') {
                                    if (place[1] === 'start') {
                                        this.style.left = this._left + 'px';
                                    } else if (place[1] === 'end') {
                                        this.style.left = this._right - this.width + 'px';
                                    } else {
                                        this.style.left = this.centerX - this.width / 2 + 'px';
                                    }
                                } else if (place[0] === 'left' || place[0] === 'right') {
                                    if (place[1] === 'start') {
                                        this.style.top = this._top + 'px';
                                    } else if (place[1] === 'end') {
                                        this.style.top = this._bottom - this.height + 'px';
                                    } else {
                                        this.style.top = this.centerY - this.height / 2 + 'px';
                                    }
                                }

                                switch (place[0]) {
                                    case 'top':
                                        this.arrowPlacement = 'down';
                                        break;
                                    case 'bottom':
                                        this.arrowPlacement = 'up';
                                        break;
                                    case 'left':
                                        this.arrowPlacement = 'right';
                                        break;
                                    case 'right':
                                        this.arrowPlacement = 'left';
                                        break;
                                    default:
                                        this.arrowPlacement = 'auto';
                                        break;
                                }

                            },
                            handleMouseOver() {
                                if (!$vm.enterable) return;
                                $vm.handleMouseOver();
                            },
                            handleMouseOut() {
                                if (!$vm.enterable) return;
                                $vm.handleMouseOut();
                            },
                        },
                        beforeDestroy() {
                            const parent = this.$el.parentElement;
                            if (parent) {
                                parent.removeChild(this.$el);
                            }
                        },
                        render() {
                            const slot = $vm.$slots.tip;
                            const arrowAttrs = $vm.arrowAttrs;
                            const className = `ot-tip-popper ot-tip-${this.index} ${$vm.popperClass}`;

                            const style = Object.assign(this.style, {
                                position: this.position,
                            });
                            return (<transition name="fade">
                                <div ot size={this.$otSize} class={className} style={style} refresh={this.refresh}
                                    onMouseover={this.handleMouseOver}
                                    onMouseout={this.handleMouseOut}
                                >
                                    { slot }
                                    { $vm.arrow && (<ot-arrow ot size={this.$otSize} class="ot-arrow" v-ot-bind={arrowAttrs} placement={this.arrowPlacement}></ot-arrow>)}
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
        handleClick() {
            if (this.manual && this.clickable) {
                this.show();
            }
        },
        show() {
            if (this.disabled) return;
            this._init_();
            this.bShown = true;
            this.$emit('update', true);

            this._initPosition_();

            if (this.mountedComp) {
                this.mountedComp.show();
                this.$emit('change', this.bShown);
            }
        },
        hide(e) {
            if (this.disabled) return;

            if (e) {
                const result = this.$el.contains(e.target);
                if (result) {
                    return;
                } else if (this.mountedComp && this.mountedComp.$el) {
                    const b = this.mountedComp.$el.contains(e.target);
                    if (b) {
                        return;
                    }
                }
            }

            this.bShown = false;
            this.$emit('update', false);

            if (this.mountedComp) {
                this.mountedComp.hide();
                this.$emit('change', this.bShown);
            }
        },
        handleScrollEvent() {
            if (this.bShown) { // show
                // console.log('handleScrollEvent', this.bShown);
                this._initPosition_();
            }
        },
        registerScroll() {
            if (!this.iScrollFn) {
                this.iScrollFn = this.$otUtils.throttle(this.handleScrollEvent, 100, 10, this);
                // this.iScrollFn = this.handleScrollEvent.bind(this);
                this.$otUtils.addEventListener('scroll', this.iScrollFn);
            }
        },
        unregisterScroll() {
            if (this.iScrollFn) {
                this.$otUtils.removeEventListener('scroll', this.iScrollFn);
                this.iScrollFn = null;
            }
        },
        addClickListener() {
            if (!this.iClickFn) {
                this.iClickFn = this.hide.bind(this);
                this.$otUtils.addEventListener('click', this.iClickFn);
            }
        },
        removeClickListener() {
            if (this.iClickFn) {
                this.$otUtils.removeEventListener('click', this.iClickFn);
                this.iClickFn = null;
            }
        },
    },
    beforeUpdate() {
        this._initPosition_();
        if (this.mountedComp) {
            this.mountedComp.$forceUpdate();
        }
    },
    mounted() {
        this.registerScroll();
        this.addClickListener();
    },
    beforeDestroy() {
        if (this.mountedComp) {
            this.mountedComp.$destroy();
        }
        this.mountedComp = null;
        this.unregisterScroll();
        this.removeClickListener();
    },
};
</script>

<style lang="scss" module>
.root {
    display: inline-block;
}
</style>

<style lang="scss">
@import '../globals';
.ot-tip-popper {
    position: relative;
    @include __ot_size__;

    &>[ot][round] {
        @include __ot_round__;
    }

    [ot].ot-arrow {
        position: absolute;

        &[placement=up], &[placement=down] {
            left: 50%;
            transform: translateX(-50%);

            &[placement=up] {
                top: -0.3em;
            }

            &[placement=down] {
                bottom: -0.3em;
            }
        }

        &[placement=left], &[placement=right] {
            top: 50%;
            transform: translateY(-50%);

            &[placement=left] {
                left: -0.3em;
            }

            &[placement=right] {
                right: -0.3em;
            }
        }
    }
}
</style>

