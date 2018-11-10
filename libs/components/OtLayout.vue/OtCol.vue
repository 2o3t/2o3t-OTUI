<script>
export default {
    name: 'ot-col',

    props: {
    // 栅格占据的列数
        span: {
            type: Number,
            default: 24,
        },
        // 自定义元素标签
        tag: {
            type: String,
            default: 'div',
        },
        // 栅格左侧的间隔格数
        offset: Number,
        // 栅格向左移动格数
        pull: Number,
        // 栅格向右移动格数
        push: Number,
        // `<768px` 响应式栅格数或者栅格属性对象  (例如： {span: 4, offset: 4})
        xs: [ Number, Object ],
        // `≥768px` 响应式栅格数或者栅格属性对象  (例如： {span: 4, offset: 4})
        sm: [ Number, Object ],
        // `≥992px` 响应式栅格数或者栅格属性对象  (例如： {span: 4, offset: 4})
        md: [ Number, Object ],
        // `≥1200px` 响应式栅格数或者栅格属性对象  (例如： {span: 4, offset: 4})
        lg: [ Number, Object ],
        // `≥1920px` 响应式栅格数或者栅格属性对象  (例如： {span: 4, offset: 4})
        xl: [ Number, Object ],
    },

    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.componentName !== 'OtRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        },
    },
    render(h) {
        const classList = [];
        const style = {};

        if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }

        [ 'span', 'offset', 'pull', 'push' ].forEach(prop => {
            if (this[prop] || this[prop] === 0) {
                classList.push(
                    prop !== 'span'
                        ? `ot-col-${prop}-${this[prop]}`
                        : `ot-col-${this[prop]}`
                );
            }
        });

        [ 'xs', 'sm', 'md', 'lg', 'xl' ].forEach(size => {
            if (typeof this[size] === 'number') {
                classList.push(`ot-col-${size}-${this[size]}`);
            } else if (typeof this[size] === 'object') {
                const props = this[size];
                Object.keys(props).forEach(prop => {
                    classList.push(
                        prop !== 'span'
                            ? `ot-col-${size}-${prop}-${props[prop]}`
                            : `ot-col-${size}-${props[prop]}`
                    );
                });
            }
        });

        return h(
            this.tag,
            {
                class: [ 'ot-col', classList ],
                style,
            },
            this.$slots.default
        );
    },
};
</script>

<style lang="scss">
@import "./mixin";

[class*="ot-col-"] {
  float: left;
  box-sizing: border-box;
}

.ot-col-0 {
  display: none;
}

@for $i from 0 through 24 {
  .ot-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }

  .ot-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }

  .ot-col-pull-#{$i} {
    position: relative;
    right: (1 / 24 * $i * 100) * 1%;
  }

  .ot-col-push-#{$i} {
    position: relative;
    left: (1 / 24 * $i * 100) * 1%;
  }
}

@include res(xs) {
  .ot-col-xs-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .ot-col-xs-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-xs-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-xs-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-xs-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@include res(sm) {
  .ot-col-sm-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .ot-col-sm-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-sm-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-sm-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-sm-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@include res(md) {
  .ot-col-md-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .ot-col-md-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-md-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-md-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-md-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@include res(lg) {
  .ot-col-lg-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .ot-col-lg-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-lg-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-lg-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-lg-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@include res(xl) {
  .ot-col-xl-0 {
    display: none;
  }
  @for $i from 0 through 24 {
    .ot-col-xl-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-xl-offset-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-xl-pull-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .ot-col-xl-push-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}


// display
.hidden {
    @each $break-point-name,
    $value in $--breakpoints-spec {
        &-#{$break-point-name} {
            @include res($break-point-name, $--breakpoints-spec) {
                display: none !important;
            }
        }
    }
}
</style>
