<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="Tabs 标签页 + 图标" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-tabs :class="$style.tabs" :theme="$otTheme" :list="tabs" :select="selectTab" @action="handleAction">
                <span>{{ selectTab && selectTab.title }}</span>
            </ot-tabs>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            selectTab: null,
            tabs: [{
                title: 'OT',
                name: 'OT',
                icon: 'apple',
            }],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    methods: {
        initTabs() {
            for (let i = 0; i < 9; i++) {
                this.tabs.push({
                    title: `Tabs ${i}`,
                    name: i + '',
                    icon: 'android',
                });
            }
            this.selectTab = this.tabs[0];
        },
        handleAction(action, tab) {
            console.log(action, tab);
            switch (action) {
                case 'active':
                    this.selectTab = tab;
                    break;
                case 'close':
                    break;
                default:
                    break;
            }
        },
    },
    created() {
        this.initTabs();
    },
};
</script>

<style lang="scss" module>
.tabs {
    margin: 0 !important;
    padding: 5px 20px;
}
</style>

