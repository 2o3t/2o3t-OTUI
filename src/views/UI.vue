<template>
    <div :class="$style.root" :theme="otTheme">

        <ot-section :theme="otTheme" label="OT-Card">
            <ot-row-group :theme="otTheme">
                <ot-card :theme="otTheme"></ot-card>
                <ot-card :theme="otTheme"></ot-card>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="otTheme" label="OT-Icon">
            <ot-row-group :theme="otTheme">
                <ot-icon :theme="otTheme" size="mini" icon="apple"></ot-icon>
                <ot-icon :theme="otTheme" size="small" icon="apple"></ot-icon>
                <ot-icon :theme="otTheme" size="normal" icon="apple"></ot-icon>
                <ot-icon :theme="otTheme" size="big" icon="apple"></ot-icon>
                <ot-icon :theme="otTheme" size="mini" icon="android"></ot-icon>
                <ot-icon :theme="otTheme" size="small" icon="android"></ot-icon>
                <ot-icon :theme="otTheme" size="normal" icon="android"></ot-icon>
                <ot-icon :theme="otTheme" size="big" icon="android"></ot-icon>
                <ot-icon :theme="otTheme" size="mini" icon="flag"></ot-icon>
                <ot-icon :theme="otTheme" size="small" icon="flag"></ot-icon>
                <ot-icon :theme="otTheme" size="normal" icon="flag"></ot-icon>
                <ot-icon :theme="otTheme" size="big" icon="flag"></ot-icon>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="otTheme" label="OT-Tabs">
            <ot-row-group :theme="otTheme">
                <ot-tabs :theme="otTheme" :list="tabs" :select="selectTab"></ot-tabs>
            </ot-row-group>
        </ot-section>

    </div>
</template>

<script>
export default {
    name: 'ui-page',
    data() {
        return {
            isDark: false,
            tabs: [{
                title: 'OT',
                name: 'OT',
            }],
            radioSelect: 'A',
            switchValue: false,
        };
    },
    computed: {
        otTheme() {
            return this.$otStores.theme;
        },
    },
    methods: {
        initTabs() {
            for (let i = 0; i < 9; i++) {
                this.tabs.push({
                    title: `Tabs ${i}`,
                    name: i + '',
                });
            }
            this.selectTab = this.tabs[0];
        },
    },
    created() {
        this.initTabs();
    },
};
</script>

<style lang="scss" module>
.root {
    padding: 10px 10px 30px;
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    &[theme='dark'] {
        background-color: #000000;
    }
}
</style>
