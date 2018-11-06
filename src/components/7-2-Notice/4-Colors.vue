<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" fill :fixable="false" vertical :flex="false">
            <ot-notice context="这是一条重要的消息!" round color="primary"></ot-notice>
            <ot-notice context="这是一条重要的消息!" round color="success"></ot-notice>
            <ot-notice context="这是一条重要的消息!" round color="warning"></ot-notice>
            <ot-notice context="这是一条重要的消息!" round color="danger"></ot-notice>
            <ot-notice context="这是一条重要的消息!" round color="info"></ot-notice>
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
