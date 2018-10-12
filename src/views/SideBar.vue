<template>
    <ot-menu :isCollapse="isCollapse" :theme="$otTheme">
        <ot-menu-group :label="key" v-for="key in Object.keys(slides)" :key="key">
            <ot-menu-item :theme="$otTheme" :router="item.router" v-for="item in slides[key]" :key="item.name">{{item.name}}</ot-menu-item>
        </ot-menu-group>
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
