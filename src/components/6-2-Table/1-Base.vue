<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code" :fixable="false">
            <ot-table :list="tableList">
                <ot-table-column name="name" label="名称"></ot-table-column>
                <ot-table-column name="age" label="年龄"></ot-table-column>
                <ot-table-column name="address" label="地址"></ot-table-column>
                <ot-table-column name="other" label="其它"></ot-table-column>
            </ot-table>
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
    computed: {
        tableList() {
            const list = [];
            for (let i = 0; i < 10; i++) {
                list.push({
                    name: `name_${i}`,
                    age: `age${i}`,
                    address: `address_${i}`,
                    other: `other_${i}`,
                });
            }
            return list;
        },
    },
};
</script>
