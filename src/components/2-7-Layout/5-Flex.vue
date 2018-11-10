<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :flex="false" :fixable="false">
            <ot-row type="flex" class="row-bg">
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple-light"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
            </ot-row>
            <ot-row type="flex" class="row-bg" justify="center">
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple-light"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
            </ot-row>
            <ot-row type="flex" class="row-bg" justify="end">
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple-light"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
            </ot-row>
            <ot-row type="flex" class="row-bg" justify="space-between">
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple-light"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
            </ot-row>
            <ot-row type="flex" class="row-bg" justify="space-around">
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple-light"></div></ot-col>
                <ot-col :span="6"><div class="grid-content bg-purple"></div></ot-col>
            </ot-row>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>

<style lang="scss" scoped>
.ot-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.ot-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
