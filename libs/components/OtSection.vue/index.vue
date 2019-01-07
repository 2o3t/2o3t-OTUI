<template>
    <section ot v-bind="$otColors" class="ot-section" :class="$style.root" :indent="indent" :size="$otSize">
        <h1 :class="$style.label" :level="level" :section="section" v-if="level === 1 && label"><span ot :class="$style.prefix" v-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h1>
        <h2 :class="$style.label" :level="level" :section="section" v-if="level === 2 && label"><span ot :class="$style.prefix" v-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h2>
        <h3 :class="$style.label" :level="level" :section="section" v-if="level === 3 && label"><span ot :class="$style.prefix" v-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h3>
        <h4 :class="$style.label" :level="level" :section="section" v-if="level === 4 && label"><span ot :class="$style.prefix" v-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h4>
        <h5 :class="$style.label" :level="level" :section="section" v-if="level === 5 && label"><span ot :class="$style.prefix" v-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h5>
        <h6 :class="$style.label" :level="level" :section="section" v-if="level === 6 && label"><span ot :class="$style.prefix" v-bind="$otColors.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h6>
        <p :prefix="prefix" :class="$style.desc" :size="$otSize" :level="level" v-if="desc">{{ desc }}</p>
        <ot-markdown class="markdown" :prefix="prefix" :class="$style.desc" :size="$otSize" :level="level" v-else-if="descHtml" :content="descHtml"></ot-markdown>
        <div :prefix="prefix" :class="$style.childs" class="ot-section_childs">
            <slot></slot>
        </div>
    </section>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-section',
    mixins: [ theme ],
    props: {
        // 标题
        label: [ String ],
        // 标题等级
        level: {
            type: Number,
            default: 3,
        },
        // 上下块间距
        section: [ Boolean ],
        // 缩进
        indent: [ Boolean, Number ],
        // 标题前缀符号
        prefix: [ String ],
        // 描述
        desc: {
            type: String,
            default: '',
        },
        // `html` 描述
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
    padding-left: 0em;

    &[indent="1"] {
      padding-left: 1em;
    }

    &[indent="2"] {
      padding-left: 2em;
    }

    &[indent="3"] {
      padding-left: 3em;
    }

    &[indent="4"] {
      padding-left: 4em;
    }

    &[indent="5"] {
      padding-left: 5em;
    }

    &[indent="6"] {
      padding-left: 6em;
    }
  }

  .label {

    .prefix {
      display: inline-block;
      width: 1em;
      transition: color 0.3s;
      cursor: pointer;
    }

    &[section] {
      margin: 1.6em 0 0.6em;
    }
  }

  .desc {
    font-weight: $--main-font-weight-light;

    &[prefix] {
      margin-left: 1em;
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

  .childs {

    &[prefix] {
      margin-left: 1em;
    }
  }
}
</style>
