<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button icon="space-shuttle" @click="openColors('primary')" color="primary">Primary</ot-button>
            <ot-button icon="ship" @click="openColors('success')" color="success">Success</ot-button>
            <ot-button icon="ship" @click="openColors('warning')" color="warning">Warning</ot-button>
            <ot-button icon="ship" @click="openColors('danger')" color="danger">Danger</ot-button>
            <ot-button icon="ship" @click="openColors('info')" color="info">Info</ot-button>
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
        openColors(color) {
            this.$OtMessage({
                icon: 'space-shuttle',
                title: '这是一条消息提示',
                color,
            });
        },
    },
};
</script>
