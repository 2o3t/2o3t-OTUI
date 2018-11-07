<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :flex="false">
            <ot-markdown :content="markdown" dangerouslyUseHTMLString></ot-markdown>
        </ot-row-group>
    </ot-section>
</template>

<script>
import md from "./Test.md";
export default {
    data() {
        return {
            markdown: md,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
