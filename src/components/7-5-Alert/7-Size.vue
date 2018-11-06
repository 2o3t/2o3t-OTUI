<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :flex="false" :fixable="false">
            <ot-alert :title="alertTitle" size="mini" color="primary"></ot-alert>
            <ot-alert :title="alertTitle" size="small" color="success"></ot-alert>
            <ot-alert :title="alertTitle" size="normal" color="warning"></ot-alert>
            <ot-alert :title="alertTitle" size="big" color="danger"></ot-alert>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            alertTitle: '我是一条消息提示',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
