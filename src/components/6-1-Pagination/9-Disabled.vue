<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-pagination :theme="$otTheme" :total="total" background disabled></ot-pagination>
            <ot-pagination :theme="$otTheme" :total="total" background round disabled></ot-pagination>
            <ot-pagination :theme="$otTheme" :total="total"
                :pager-count="5"
                show-page-sizes
                show-total
                show-jumper
                background
                round
                disabled >
            </ot-pagination>
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
