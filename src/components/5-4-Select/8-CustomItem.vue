<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-select :theme="$otTheme"
                placeholder="请选择"
                readonly
                v-model="selectValue"
                :list="selectList">
                <div slot="item" slot-scope="{ item }">
                    <ot-icon icon="right-circle-fill">{{ item }}</ot-icon>
                </div>
            </ot-select>
            <ot-select :theme="$otTheme"
                placeholder="请选择"
                v-model="selectValue"
                :list="selectList">
                <div slot="item" slot-scope="{ item }">
                    <ot-icon icon="right-circle-fill">{{ item }}</ot-icon>
                </div>
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

<style lang="scss" scoped>
ul {
    margin: 0;
    padding: 0;

    li {
        list-style: none;
    }
}
</style>

