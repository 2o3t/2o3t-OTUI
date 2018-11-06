<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :flex="false">
            <ot-alert :title="alertTitle" round></ot-alert>
            <ot-alert :title="alertTitle" color="primary" round></ot-alert>
            <ot-alert :title="alertTitle" color="success" round></ot-alert>
            <ot-alert :title="alertTitle" color="warning" round></ot-alert>
            <ot-alert :title="alertTitle" color="danger" round></ot-alert>
            <ot-alert :title="alertTitle" color="info" round></ot-alert>
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
