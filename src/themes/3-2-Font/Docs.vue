<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-markdown :content="markdownDoc" dangerouslyUseHTMLString :data="data"></ot-markdown>
    </ot-section>
</template>

<script>
import DOC from './docs.md';
export default {
    data() {
        return {
            markdownDoc: DOC,
            data: {
                shuxing: 'font',
                otUINameMap: [
                    'light', 'dark', 'grey', 'default', 'primary', 'success', 'warning', 'danger', 'info',
                ],
                otUIActionMap: [
                    '', 'normal', 'hover', 'active', 'focus', 'selected', 'disabled',
                ],
            },
        };
    },
};
</script>
