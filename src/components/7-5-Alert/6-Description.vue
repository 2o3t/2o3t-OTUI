<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :flex="false" center>
            <ot-alert title="我是一条不可关闭的消息提示" round :closable="false" :description="description"></ot-alert>
            <ot-alert title="我是一条不可关闭的消息提示" color="primary" round :closable="false" type="question" show-icon :description="description"></ot-alert>
            <ot-alert :title="alertTitle" color="success" round close-text="Close" type="success" :description="description"></ot-alert>
            <ot-alert :title="alertTitle" color="warning" round close-text="CLOSE" type="warning" show-icon :description="description"></ot-alert>
            <ot-alert :title="alertTitle" color="danger" round close-text="Close" type="error" show-icon :description="description"></ot-alert>
            <ot-alert :title="alertTitle" color="info" round type="info" show-icon :description="description"></ot-alert>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            alertTitle: '带辅助性文字介绍',
            description: '这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
