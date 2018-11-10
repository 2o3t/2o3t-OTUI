<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-menu>
                <ot-menu-group :expand="false" :label="key" v-for="key in Object.keys(menus)" :key="key">
                    <ot-menu-item :theme="$otTheme" v-for="item in menus[key]" :key="item">{{item}}</ot-menu-item>
                </ot-menu-group>
            </ot-menu>
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
    computed: {
        menus() {
            const menus = {};
            for (let i = 0; i < 2; i++) {
                const groupName = `Group ${i}`;
                if (!menus[groupName]) { menus[groupName] = []; }
                for (let j = 0; j < 3; j++) {
                    menus[groupName].push(`Item ${j}`);
                }
            }
            return menus;
        },
    },
};
</script>
