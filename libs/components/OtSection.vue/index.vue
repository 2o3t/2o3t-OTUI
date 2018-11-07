<template>
    <section ot v-ot-bind="$otColors" class="ot-section" :class="$style.root" :indent="indent" :size="$otSize">
        <h1 :class="$style.label" :level="level" :section="section" v-if="level === 1 && label"><span ot :class="$style.prefix" v-ot-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h1>
        <h2 :class="$style.label" :level="level" :section="section" v-if="level === 2 && label"><span ot :class="$style.prefix" v-ot-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h2>
        <h3 :class="$style.label" :level="level" :section="section" v-if="level === 3 && label"><span ot :class="$style.prefix" v-ot-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h3>
        <h4 :class="$style.label" :level="level" :section="section" v-if="level === 4 && label"><span ot :class="$style.prefix" v-ot-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h4>
        <h5 :class="$style.label" :level="level" :section="section" v-if="level === 5 && label"><span ot :class="$style.prefix" v-ot-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h5>
        <h6 :class="$style.label" :level="level" :section="section" v-if="level === 6 && label"><span ot :class="$style.prefix" v-ot-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h6>
        <p :prefix="prefix" :class="$style.desc" :size="$otSize" :level="level" v-if="desc">{{ desc }}</p>
        <ot-markdown class="markdown" :prefix="prefix" :class="$style.desc" :size="$otSize" :level="level" v-else-if="descHtml" :content="descHtml"></ot-markdown>
        <div :prefix="prefix" :class="$style.children">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ot-section',
    otDefaultColors(theme) {
        switch (theme) {
            case 'dark':
                return {
                    normal: [ 'light-f' ],
                    prefix: {
                        normal: [ 'light-f' ],
                        active: [ 'def-f-hov' ],
                    },
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
                    prefix: {
                        normal: [ 'def-f' ],
                        active: [ 'def-f-hov' ],
                    },
                };
        }
    },
    props: {
        label: [ String ],
        level: {
            type: Number,
            default: 3,
        },
        section: [ Boolean ],
        indent: [ Boolean, Number ],
        prefix: [ String ],
        desc: {
            type: String,
            default: '',
        },
        descHtml: {
            type: String,
            default: '',
        },
    },
    methods: {
        handlePrefixClick(e) {
            const targetY = this.$otUtils.getOffsetTop(e.target) - 80;
            // 获取当前位置方法
            const currentY = this.$otUtils.getScrollTop();
            this.$otUtils.scrollAnimation(currentY, targetY);
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  @include __ot_size__;

  &[indent] {
    padding-left: 0.5rem;

    &[indent="1"] {
      padding-left: 1rem;
    }

    &[indent="2"] {
      padding-left: 2rem;
    }

    &[indent="3"] {
      padding-left: 3rem;
    }

    &[indent="4"] {
      padding-left: 4rem;
    }

    &[indent="5"] {
      padding-left: 5rem;
    }

    &[indent="6"] {
      padding-left: 6rem;
    }
  }

  .label {

    .prefix {
      display: inline-block;
      width: 2rem;
      transition: color 0.3s;
      cursor: pointer;
    }

    &[section] {
      margin: 1.6em 0 0.6em;
    }
  }

  .desc {
    font-weight: 300;

    &[prefix] {
      margin-left: 2rem;
    }

    @include __ot_size__;
    &[size=mini] {
        line-height: $--ot-mini-default;
    }

    &[size=small] {
        line-height: $--ot-small-default;
    }

    &[size=normal] {
        line-height: $--ot-normal-default;
    }

    &[size=big] {
        line-height: $--ot-big-default;
    }
  }

  .children {

    &[prefix] {
      margin-left: 2rem;
    }
  }
}
</style>
