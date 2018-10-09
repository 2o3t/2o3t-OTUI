<template>
    <div>
        <slot v-if="finish"></slot>
    </div>
</template>

<script>
export default {
  name: "ot-lazy-load",
  props: {
    time: {
      type: [Number, String],
      required: false,
      default: 0
    }
  },
  data() {
    return {
      finish: false
    };
  },
  mounted() {
    this.initSlot();
  },
  methods: {
    initSlot() {
      let vm = this;
      setTimeout(function() {
        vm.finish = true;
      }, Number(vm.time || 0));
    },
    // isEleInView(objId) {
    //   // 取得其父容器，此例为指定id的div
    //   var div = document.getElementById("divScroll");
    //   var ele = document.getElementById(objId);
    //   var offsetTopIn = ele.offsetTop - div.offsetTop;
    //   var _scrollTop = div.scrollTop;
    //   var _scrollHeight = div.scrollHeight;
    //   var _height = div.clientHeight; // 可见范围即父容器滚动条当前位置 至 父容器高度这个范围
    //   if (offsetTopIn >= _scrollTop && offsetTopIn <= _scrollTop + _height) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  }
};
</script>

<style>
</style>
