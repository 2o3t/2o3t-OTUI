<template>
    <table ot v-ot-bind="$otColors" class="ot-table-ui" :class="$style.root" :border="border" :row="rowBorder" :column="columnBorder">
        <slot></slot>
    </table>
</template>

<script>
import theme from './OtTableTheme.js';
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
table.root {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  width: 100%;

  th {
    white-space: nowrap;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.02);
  }

  th,
  td {
    border: none;
    padding: 16px 24px;
    text-align: left;
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
