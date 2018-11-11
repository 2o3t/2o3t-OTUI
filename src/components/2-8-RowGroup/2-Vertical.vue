<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" vertical>
            <div ot class="box bg-purple-dark"></div>
            <div ot class="box bg-purple"></div>
            <div ot class="box bg-purple-light"></div>
            <div ot class="box bg-purple"></div>
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

<style scoped>
.box {
    width: 100px;
    height: 30px;
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
</style>

