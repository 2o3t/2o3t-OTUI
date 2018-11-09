<template>
    <div ot class="ot-breadcrumb" :class="$style.root">
        <slot></slot>
    </div>
</template>

<script>
import _pull from "lodash/pull.js";
export default {
  name: "ot-breadcrumb",

  provide() {
    return {
      $OtBreadcrumb: this
    };
  },

  props: {
    // 分隔符
    separator: {
      type: String,
      default: "/"
    },
    // 图标分隔符 iconfont
    separatorIcon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    removeItem(item) {
      if (item) {
        this.items = _pull(this.items, item);
      }
    }
  },
  mounted() {
    const len = this.items.length;
    if (len) {
      this.items.forEach((item, index) => {
        item.bLastIndex = index >= (len - 1);
      });
    }
  }
};
</script>

<style lang="scss" module>
@import '../globals';
.root {
    @include __ot_root_block__;
}
</style>
