<template>
    <ot-menu :isCollapse="isCollapse" :theme="$otTheme">
        <ot-menu-item :theme="$otTheme" v-for="(item) in slides" :key="item.name" :router="item.router">{{item.name}}</ot-menu-item>
    </ot-menu>
</template>

<script>
export default {
    name: 'side-bar-pager',
    data() {
        return {
            isCollapse: false,
        };
    },
    computed: {
        slides() {
            return this.$shared.SideBarMenu;
        },
    },
};
</script>

<style>

</style>
