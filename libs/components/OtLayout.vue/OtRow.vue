<script>
export default {
    name: 'ot-row',

    componentName: 'OtRow',

    props: {
    // 自定义元素标签
        tag: {
            type: String,
            default: 'div',
        },
        // 栅格间隔
        gutter: Number,
        // 布局模式，可选 flex，现代浏览器下有效
        type: String,
        // flex 布局下的水平排列方式
        justify: {
            type: String,
            default: 'start',
            validator: val => [ 'start', 'end', 'center', 'space-around', 'space-between' ].includes(val),
        },
        // flex 布局下的垂直排列方式
        align: {
            type: String,
            default: 'top',
            validator: val => [ 'top', 'middle', 'bottoms' ].includes(val),
        },
    },

    computed: {
        style() {
            const ret = { };

            if (this.gutter) {
                ret.marginLeft = `-${this.gutter / 2}px`;
                ret.marginRight = ret.marginLeft;
            }

            return ret;
        },
    },

    render(h) {
        return h(
            this.tag,
            {
                class: [
                    'ot-row',
                    this.justify !== 'start' ? `is-justify-${this.justify}` : '',
                    this.align !== 'top' ? `is-align-${this.align}` : '',
                    { 'ot-row--flex': this.type === 'flex' },
                ],
                style: this.style,
                attrs: {
                    ot: true,
                    row: true,
                },
            },
            this.$slots.default
        );
    },
};
</script>

<style lang="scss">
@import "./mixin";

@include b(row) {
  position: relative;
  box-sizing: border-box;
  @include utils-clearfix;

  @include m(flex) {
    display: flex;
    &:before,
    &:after {
      display: none;
    }

    @include when(justify-center) {
      justify-content: center;
    }
    @include when(justify-end) {
      justify-content: flex-end;
    }
    @include when(justify-space-between) {
      justify-content: space-between;
    }
    @include when(justify-space-around) {
      justify-content: space-around;
    }

    @include when(align-middle) {
      align-items: center;
    }
    @include when(align-bottom) {
      align-items: flex-end;
    }
  }
}
</style>
