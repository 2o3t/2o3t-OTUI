<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="锁定方向" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-select :theme="$otTheme"
                placeholder="我是向上弹出的"
                readonly
                v-model="selectValue"
                :list="selectList"
                direction="up">
            </ot-select>
            <ot-select :theme="$otTheme"
                placeholder="我是向下弹出的"
                readonly
                v-model="selectValue"
                :list="selectList"
                direction="down">
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
