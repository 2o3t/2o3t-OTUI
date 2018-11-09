<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button @click="$otDialog('这是一条消息提示')">打开消息提示</ot-button>
            <ot-button @click="$otAlert('这是一条消息提示', 'Alert')">Alert</ot-button>
            <ot-button @click="$otAlert('这是一条消息提示1', 'Alert1')">Alert1</ot-button>
            <ot-button @click="$otConfirm('这是一条消息提示', 'Confirm')">Confirm</ot-button>
            <ot-button @click="$otPrompt('这是一条消息提示', 'Prompt')">Prompt</ot-button>
            <ot-button @click="customOpen">Custom</ot-button>
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
    methods: {
        customOpen() {
            const h = this.$createElement;
            this.$otDialog({
                title: '消息',
                message: h('p', null, [
                    h('span', null, '内容可以是 '),
                    h('i', { style: 'color: teal' }, 'VNode'),
                ]),
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            });
        },
    },
};
</script>
