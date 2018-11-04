<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button @click="openRound()">圆角</ot-button>
            <ot-button @click="openBorder()">边框</ot-button>
            <ot-button @click="open()">圆角带边框</ot-button>
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
      openRound() {
        this.$OtMessage({
            title: '这是一条消息提示',
            round: true,
        });
      },
      openBorder() {
        this.$OtMessage({
            title: '这是一条消息提示',
            border: true,
        });
      },
      open() {
        this.$OtMessage({
            title: '这是一条消息提示',
            round: true,
            border: true,
        });
      },
    },
};
</script>
