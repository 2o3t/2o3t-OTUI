<template>
    <section ot v-bind="$otColors" class="ot-section" :class="$style.root" :indent="indent">
        <h1 :class="$style.label" :level="level" :section="section" v-if="level === 1 && label"><span :class="$style.prefix" v-if="prefix">{{ prefix }}</span>{{ label }}</h1>
        <h2 :class="$style.label" :level="level" :section="section" v-if="level === 2 && label"><span :class="$style.prefix" v-if="prefix">{{ prefix }}</span>{{ label }}</h2>
        <h3 :class="$style.label" :level="level" :section="section" v-if="level === 3 && label"><span :class="$style.prefix" v-if="prefix">{{ prefix }}</span>{{ label }}</h3>
        <h4 :class="$style.label" :level="level" :section="section" v-if="level === 4 && label"><span :class="$style.prefix" v-if="prefix">{{ prefix }}</span>{{ label }}</h4>
        <h5 :class="$style.label" :level="level" :section="section" v-if="level === 5 && label"><span :class="$style.prefix" v-if="prefix">{{ prefix }}</span>{{ label }}</h5>
        <h6 :class="$style.label" :level="level" :section="section" v-if="level === 6 && label"><span :class="$style.prefix" v-if="prefix">{{ prefix }}</span>{{ label }}</h6>
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
    },
};
</script>

<style lang="scss" module>
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
    }

    &[level] {
      font-size: 18px;
      line-height: 26px;

      &[level="1"] {
        font-size: 30px;
        line-height: 38px;
      }

      &[level="2"] {
        font-size: 24px;
        line-height: 32px;
      }

      &[level="3"] {
        font-size: 18px;
        line-height: 26px;
      }

      &[level="4"] {
        font-size: 16px;
        line-height: 24px;
      }

      &[level="5"] {
        font-size: 14px;
        line-height: 22px;
      }

      &[level="6"] {
        font-size: 12px;
        line-height: 20px;
      }
    }

    &[section] {
      margin: 1.6em 0 0.6em;
    }
  }
}
</style>

