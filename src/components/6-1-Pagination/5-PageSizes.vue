<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-pagination :theme="$otTheme" :total="total"
                :page-size="pageSize"
                :page-sizes="pageSizes"
                show-page-sizes>
            </ot-pagination>
            <ot-pagination :theme="$otTheme" :total="total"
                background round
                :page-size="pageSize"
                :page-sizes="pageSizes"
                @selectPageSize="handleSelectPageSize"
                show-page-sizes>
            </ot-pagination>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            total: 100,
            pageSize: 50,
            pageSizes: [ 10, 50, 100 ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    methods: {
        handleSelectPageSize(item) {
            console.log(item);
        },
    },
};
</script>
