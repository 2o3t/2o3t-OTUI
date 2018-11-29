<template>
    <table ot v-ot-bind="$otColors" class="ot-table-ui" :class="$style.root" :border="border" :row="rowBorder" :column="columnBorder" :theme="$otTheme">
        <slot></slot>
    </table>
</template>

<script>
import theme from './OtTableUiTheme.js';
export default {
    name: 'ot-table-ui',
    mixins: [ theme ],
    props: {
        // 纵向边框
        columnBorder: {
            type: Boolean,
            default: false,
        },
        // 横向边框
        rowBorder: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
table.root {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  width: 100%;

  @include __ot_size__;

  th {
    white-space: nowrap;
    font-weight: $--main-font-weight-medium;
    background: rgba(0, 0, 0, 0.02);
  }

  th,
  td {
    border: none;
    padding: 1em 0;
    text-align: left;

    &>div {
        padding-left: 2em;
        padding-right: 2em;
    }
  }

  thead, tbody {
    border: inherit;
  }

  &[column] {
      th, td {
        border: inherit;
      }
  }

  &[row] {
      tr {
        border: inherit;
      }
  }
}
</style>
