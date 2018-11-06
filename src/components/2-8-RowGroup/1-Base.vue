<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <div ot class="box" style="backgroundColor: red;"></div>
            <div ot class="box" style="backgroundColor: blue;"></div>
            <div ot class="box" style="backgroundColor: yellow;"></div>
            <div ot class="box" style="backgroundColor: green;"></div>
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
</style>

