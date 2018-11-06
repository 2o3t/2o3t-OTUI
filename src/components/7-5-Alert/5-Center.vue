<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :flex="false" center>
            <ot-alert title="我是一条不可关闭的消息提示" round :closable="false" show-icon center></ot-alert>
            <ot-alert title="我是一条不可关闭的消息提示" color="primary" round :closable="false" type="question" show-icon center></ot-alert>
            <ot-alert :title="alertTitle" color="success" round close-text="Close" type="success" show-icon center></ot-alert>
            <ot-alert :title="alertTitle" color="warning" round close-text="CLOSE" type="warning" show-icon center></ot-alert>
            <ot-alert :title="alertTitle" color="danger" round close-text="Close" type="error" show-icon center></ot-alert>
            <ot-alert :title="alertTitle" color="info" round type="info" show-icon center></ot-alert>
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
