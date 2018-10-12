<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="禁用状态" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-select :theme="$otTheme"
                placeholder="请选择"
                v-model="selectValue"
                :list="selectList" disabled>
            </ot-select>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            selectValue: '',
            selectList: [ '我是大名', '我是二名', '我是小明' ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
