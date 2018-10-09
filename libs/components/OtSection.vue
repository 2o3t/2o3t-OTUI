<template>
    <section ot v-bind="$otColors" class="ot-section" :class="$style.root" :indent="indent">
        <h1 :class="$style.label" :level="level" :section="section" v-if="level === 1 && label"><span :class="$style.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h1>
        <h2 :class="$style.label" :level="level" :section="section" v-if="level === 2 && label"><span :class="$style.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h2>
        <h3 :class="$style.label" :level="level" :section="section" v-if="level === 3 && label"><span :class="$style.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h3>
        <h4 :class="$style.label" :level="level" :section="section" v-if="level === 4 && label"><span :class="$style.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h4>
        <h5 :class="$style.label" :level="level" :section="section" v-if="level === 5 && label"><span :class="$style.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h5>
        <h6 :class="$style.label" :level="level" :section="section" v-if="level === 6 && label"><span :class="$style.prefix" v-if="prefix" @click="handlePrefixClick">{{ prefix }}</span>{{ label }}</h6>
        <p :class="$style.desc" :size="$otSize" :level="level" v-if="desc">{{ desc }}</p>
        <slot></slot>
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
                };
            case 'light':
            default:
                return {
                    normal: [ 'def-f' ],
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
    },
    methods: {
        handlePrefixClick(e) {
            const current = e.target.offsetTop - 80;
            document.documentElement.scrollTop = current;
            document.body.scrollTop = current;
        },
    },
};
</script>

<style lang="scss" module>
@import './globals';
.root {
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 2;

  &[indent] {
    padding-left: 5px;

    &[indent="1"] {
      padding-left: 10px;
    }

    &[indent="2"] {
      padding-left: 20px;
    }

    &[indent="3"] {
      padding-left: 30px;
    }

    &[indent="4"] {
      padding-left: 40px;
    }

    &[indent="5"] {
      padding-left: 50px;
    }

    &[indent="6"] {
      padding-left: 60px;
    }
  }

  .label {
    font-weight: 500;
    clear: both;
    font-variant: tabular-nums;
    margin: 10px 0 6px;

    &:hover .prefix {
        visibility: visible;
    }

    .prefix {
      display: inline-block;
      width: 20px;
      visibility: hidden;
      transition: visibility 0.3s;
      cursor: pointer;
    }

    $offset: 0.8rem;

    &[level] {
      font-size: $--ot-h3-size;
      line-height: $--ot-h3-size + $offset;

      &[level="1"] {
        font-size: $--ot-h1-size;
        line-height: $--ot-h1-size + $offset;
      }

      &[level="2"] {
        font-size: $--ot-h2-size;
        line-height: $--ot-h2-size + $offset;
      }

      &[level="3"] {
        font-size: $--ot-h3-size;
        line-height: $--ot-h3-size + $offset;
      }

      &[level="4"] {
        font-size: $--ot-h4-size;
        line-height: $--ot-h4-size + $offset;
      }

      &[level="5"] {
        font-size: $--ot-h5-size;
        line-height: $--ot-h5-size + $offset;
      }

      &[level="6"] {
        font-size: $--ot-h6-size;
        line-height: $--ot-h6-size + $offset;
      }
    }

    &[section] {
      margin: 1.6em 0 0.6em;
    }
  }

  .desc {
    font-weight: 300;

    $offset: 0.8rem;

    @include __ot_size__;
    &[size=mini] {
        line-height: $--ot-mini-size + $offset;
    }

    &[size=small] {
        line-height: $--ot-small-size + $offset;
    }

    &[size=normal] {
        line-height: $--ot-normal-size + $offset;
    }

    &[size=big] {
        line-height: $--ot-big-size + $offset;
    }
  }
}
</style>

