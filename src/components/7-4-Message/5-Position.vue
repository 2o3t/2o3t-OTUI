<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button @click="open('left')">左上角显示</ot-button>
            <ot-button @click="open('center')">上方居中显示</ot-button>
            <ot-button @click="open('right')">右上角显示</ot-button>
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
        open(position) {
            this.$otMessage({
                title: '这是一条消息提示',
                position,
                theme: this.$otTheme,
            });
        },
    },
};
</script>
