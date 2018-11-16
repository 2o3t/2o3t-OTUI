<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :fixable="false">
            <ot-nav :isCollapse="isCollapse">
                <ot-link slot="left" to="/">
                    <ot-logo :theme="$otTheme" icon="logo">
                        <span>2O3T-UI</span>
                    </ot-logo>
                </ot-link>
                <ot-nav-item v-for="(item) in headers" :key="item.name" :to="item.router">
                    <span>{{item.name}}</span>
                </ot-nav-item>
                <div slot="right">
                    <ot-corners></ot-corners>
                </div>
            </ot-nav>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    computed: {
        headers() {
            const headers = [{
                name: 'Nav',
                router: '/components/Nav',
            }];
            for (let i = 0; i < 2; i++) {
                const groupName = `Group ${i}`;
                headers.push({
                    name: groupName,
                    router: '/ABCABC',
                });
            }
            return headers;
        },
    },
};
</script>
