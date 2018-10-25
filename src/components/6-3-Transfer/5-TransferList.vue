<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-transfer-list :theme="$otTheme" :list="list" v-model="listSelectItems"
                placeholder="请输入关键字" label="ALL">
            </ot-transfer-list>
            <ot-transfer-list :theme="$otTheme" :list="list" v-model="listSelectItems"
                :top="false" :search="false">
            </ot-transfer-list>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            listSelectItems: [],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    computed: {
        list() {
            const list = [];
            for (let i = 0; i < 10; i++) {
                list.push({
                    name: `name_${i}`,
                    value: `value_${i}`,
                });
            }
            return list;
        },
    },
};
</script>
