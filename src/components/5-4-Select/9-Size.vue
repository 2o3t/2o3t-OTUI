<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="大小" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-select :theme="$otTheme" size="mini"
                placeholder="请选择"
                readonly
                v-model="selectValue"
                :list="selectList">
            </ot-select>
            <ot-select :theme="$otTheme" size="small"
                placeholder="请选择"
                readonly
                v-model="selectValue"
                :list="selectList">
            </ot-select>
            <ot-select :theme="$otTheme" size="normal"
                placeholder="请选择"
                readonly
                v-model="selectValue"
                :list="selectList">
            </ot-select>
            <ot-select :theme="$otTheme" size="big"
                placeholder="请选择"
                readonly
                v-model="selectValue"
                :list="selectList">
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
