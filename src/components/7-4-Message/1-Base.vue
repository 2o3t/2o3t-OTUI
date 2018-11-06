<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button @click="open">打开消息提示</ot-button>
            <ot-button @click="openVn">VNode</ot-button>
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
        open() {
            this.$otMessage('这是一条消息提示');
        },

        openVn() {
            const h = this.$createElement;
            this.$otMessage({
                message: h('p', null, [
                    h('span', null, '内容可以是 '),
                    h('i', { style: 'color: teal' }, 'VNode'),
                ]),
            });
        },
    },
};
</script>
