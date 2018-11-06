<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :flex="false">
            <ot-alert :title="alertTitle"></ot-alert>
            <ot-alert :title="alertTitle" color="primary"></ot-alert>
            <ot-alert :title="alertTitle" color="success"></ot-alert>
            <ot-alert :title="alertTitle" color="warning"></ot-alert>
            <ot-alert :title="alertTitle" color="danger"></ot-alert>
            <ot-alert :title="alertTitle" color="info"></ot-alert>
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
