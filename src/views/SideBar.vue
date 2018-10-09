<template>
    <ot-menu :isCollapse="isCollapse" :theme="otTheme">
        <ot-menu-item :theme="otTheme" v-for="(item) in slides" :key="item.name" :router="item.router">{{item.name}}</ot-menu-item>
    </ot-menu>
</template>

<script>
import Shared from '../shared';
const SideBar = Shared.SideBar;
export default {
    name: 'side-bar-pager',
    data () {
        return {
            isCollapse: false,
        }
    },
    computed: {
        slides() {
            return SideBar.menu;
        },
        otTheme() {
            return this.otStores.theme;
        },
    },
};
</script>

<style>

</style>
