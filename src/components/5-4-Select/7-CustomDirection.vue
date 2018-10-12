<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-select :theme="$otTheme"
                placeholder="我是向上弹出的"
                readonly
                v-model="selectValue">
                <ul slot="up">
                    <li v-for="(item, index) in selectList" :key="index">
                        {{ index }} - {{ item }}
                    </li>
                </ul>
            </ot-select>
            <ot-select :theme="$otTheme"
                placeholder="我是向下弹出的"
                readonly
                v-model="selectValue">
                <ul slot="down">
                    <li v-for="(item, index) in selectList" :key="index">
                        {{ index }} - {{ item }}
                    </li>
                </ul>
            </ot-select>
            <ot-select :theme="$otTheme"
                placeholder="我是自动判断方向的"
                readonly
                v-model="selectValue">
                <ul>
                    <li v-for="(item, index) in selectList" :key="index">
                        {{ index }} - {{ item }}
                    </li>
                </ul>
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

