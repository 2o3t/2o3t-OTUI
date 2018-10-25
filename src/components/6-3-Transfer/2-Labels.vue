<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-transfer :theme="$otTheme" :list="list" v-model="transferSelectItems"
                :labels="[ 'Source', 'Target' ]" top>
            </ot-transfer>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            transferSelectItems: [],
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
