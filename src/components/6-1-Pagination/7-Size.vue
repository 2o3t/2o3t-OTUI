<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-pagination :theme="$otTheme" :total="total" size="mini" background></ot-pagination>
            <ot-pagination :theme="$otTheme" :total="total" size="small" round></ot-pagination>
            <ot-pagination :theme="$otTheme" :total="total" size="normal" background round></ot-pagination>
            <ot-pagination :theme="$otTheme" :total="total" size="big" round></ot-pagination>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            total: 100,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
