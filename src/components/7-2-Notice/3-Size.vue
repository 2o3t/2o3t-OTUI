<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" fill :fixable="false" vertical :flex="false">
            <ot-notice context="这是一条重要的消息!" round size="mini"></ot-notice>
            <ot-notice context="这是一条重要的消息!" round size="small"></ot-notice>
            <ot-notice context="这是一条重要的消息!" round size="normal"></ot-notice>
            <ot-notice context="这是一条重要的消息!" round size="big"></ot-notice>
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
};
</script>
