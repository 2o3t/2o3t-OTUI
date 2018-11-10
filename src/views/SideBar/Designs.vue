<template>
    <ot-menu :isCollapse="isCollapse" :theme="$otTheme">
        <ot-menu-group :label="key" v-for="key in Object.keys(slides)" :key="key">
            <ot-menu-item :theme="$otTheme" :to="item.router" v-for="item in slides[key]" :key="item.name">
                <span>{{getName(item.name)}}</span>
            </ot-menu-item>
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
            return this.$shared.DesignsSideBarMenu;
        },
        i18nMap() {
            return this.$shared.DesignsMenuI18nMap;
        },
    },
    methods: {
        getName(key) {
            const name = this.i18nMap[key];
            if (!name) {
                return key;
            }
            return name;
        },
    },
};
</script>

<style>

</style>
