<template>
    <ot-section :theme="$otTheme" label="Tabs 标签组" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-tabs :theme="$otTheme" :list="tabs" :select="selectTab" @action="handleAction">
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
                case 'close': {
                    const tabs = this.tabs;
                    const targetName = tab.name;
                    let activePluginsTab = this.selectTab;
                    if (activePluginsTab.name === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                const nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    activePluginsTab = nextTab;
                                }
                            }
                        });
                    }
                    this.selectTab = activePluginsTab;
                    this.tabs = tabs.filter(tab => tab.name !== targetName);
                }
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
