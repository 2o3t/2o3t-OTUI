<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-link :theme="$otTheme" :href="href" target="_blank">Zyao89.cn</ot-link>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            href: 'https://www.zyao89.cn',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
