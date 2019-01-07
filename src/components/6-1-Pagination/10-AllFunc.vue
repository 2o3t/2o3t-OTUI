<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-pagination :theme="$otTheme"
                v-model="currentPage"
                :total="total"
                :pager-count="5"
                :page-size="pageSize"
                :page-sizes="pageSizes"
                show-page-sizes
                show-total
                show-jumper
                @changePage="changePage"
                background
                round >
            </ot-pagination>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 2,
            total: 100,
            pageSize: 10,
            pageSizes: [ 10, 50, 100 ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    methods: {
        changePage() {
            console.log(this.currentPage);
        },
    },
};
</script>
