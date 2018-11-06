<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :flex="false">
            <ot-alert title="我是一条不可关闭的消息提示" round :closable="false"></ot-alert>
            <ot-alert title="我是一条不可关闭的消息提示" color="primary" round :closable="false"></ot-alert>
            <ot-alert :title="alertTitle" color="success" round close-text="Close"></ot-alert>
            <ot-alert :title="alertTitle" color="warning" round close-text="CLOSE"></ot-alert>
            <ot-alert :title="alertTitle" color="danger" round close-text="Close"></ot-alert>
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
