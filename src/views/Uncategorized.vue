<template>
    <div :class="$style.root" :theme="$otTheme">

        <ot-section :theme="$otTheme" label="OT-MessageBox">
            <ot-row-group :theme="$otTheme" :flex="false">
                <ot-button @click="$otMessageBox('这是一条消息提示')">打开消息提示</ot-button>
                <ot-button @click="$otAlert('这是一条消息提示', 'Alert')">Alert</ot-button>
                <ot-button @click="$otAlert('这是一条消息提示1', 'Alert1')">Alert1</ot-button>
                <ot-button @click="$otConfirm('这是一条消息提示', 'Confirm')">Confirm</ot-button>
                <ot-button @click="$otPrompt('这是一条消息提示', 'Prompt')">Prompt</ot-button>
                <ot-button @click="customOpen">Custom</ot-button>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Table">
            <ot-row-group :theme="$otTheme">
                <ot-table :list="tableList">
                    <ot-table-column name="name" label="名称"></ot-table-column>
                    <ot-table-column name="age" label="年龄"></ot-table-column>
                    <ot-table-column name="address" label="地址"></ot-table-column>
                    <ot-table-column name="other" label="其它"></ot-table-column>
                </ot-table>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Tip">
            <ot-row-group :theme="$otTheme">
                <ot-tip :theme="$otTheme">
                    <span>Hover</span>
                    <div slot="tip">
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                    </div>
                </ot-tip>
            </ot-row-group>
        </ot-section>

    </div>
</template>

<script>
export default {
  name: "uncategorized-page",
  data() {
    return {
      alertTitle: "Notice: Balabala..."
    };
  },
  computed: {
    tableList() {
      const list = [];
      for (let i = 0; i < 10; i++) {
        list.push({
          name: `name_${i}`,
          age: `age${i}`,
          address: `address_${i}`,
          other: `other_${i}`
        });
      }
      return list;
    },
    list() {
      const list = [];
      for (let i = 0; i < 10; i++) {
        list.push({
          name: `name_${i}`,
          value: `value_${i}`
        });
      }
      return list;
    }
  },
  methods: {
    customOpen() {
      const h = this.$createElement;
      this.$otMessageBox({
        title: "消息",
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ]),
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      });
    }
  }
};
</script>

<style lang="scss" module>
.root {
  padding: 10px 10px 30px;
  box-sizing: border-box;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
