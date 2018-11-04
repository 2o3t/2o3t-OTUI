<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button icon="space-shuttle" @click="openIcon()">自定义Icon</ot-button>
            <ot-button icon="ship" @click="openCustom()">Custom</ot-button>
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
        openIcon() {
            this.$OtMessage({
                icon: 'space-shuttle',
                title: '这是一条消息提示',
            });
        },
        openCustom() {
            this.$OtMessage({
                icon: 'ship',
                message: '<i>这是一条支持 HTML 标签的消息</i>',
            });
        },
    },
};
</script>
