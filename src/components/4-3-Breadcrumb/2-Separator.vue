<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-breadcrumb separatorIcon="angle-right">
                <ot-breadcrumb-item :to="{ path: '/' }">首页</ot-breadcrumb-item>
                <ot-breadcrumb-item href="/">活动管理</ot-breadcrumb-item>
                <ot-breadcrumb-item>活动列表</ot-breadcrumb-item>
                <ot-breadcrumb-item>活动详情</ot-breadcrumb-item>
            </ot-breadcrumb>
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
