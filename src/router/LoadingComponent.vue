<template>
    <div :class="$style.root">
        loading....
        <el-loading type="push" size="big" label="2O3T Loading"></el-loading>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" module>
.root {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .6);
}
</style>

