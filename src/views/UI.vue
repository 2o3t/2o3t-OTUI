<template>
    <div :class="$style.root" :theme="$otTheme">

        <ot-section :theme="$otTheme" label="OT-Select-DOWN">
            <ot-row-group :theme="$otTheme">
                <ot-select :theme="$otTheme" v-model="selectValue">
                    <span>lsit</span>
                </ot-select>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Select-UP">
            <ot-row-group :theme="$otTheme">
                <ot-select :theme="$otTheme" v-model="selectValue">
                    <span>lsit</span>
                </ot-select>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Select-LIST">
            <ot-row-group :theme="$otTheme">
                <ot-select :theme="$otTheme" v-model="selectValue" :list="selectList">
                </ot-select>
                <ot-select :theme="$otTheme" v-model="selectValue" :list="selectList">
                    <span slot="item" slot-scope="{ item }">
                        {{ item }} slotScope
                    </span>
                </ot-select>
            </ot-row-group>
        </ot-section>

    </div>
</template>

<script>
export default {
    name: 'ui-page',
    data() {
        return {
            number: 0,
            selectValue: '',
            selectList: [ '我是大名', '我是二名', '我是小明' ],
        };
    },
};
</script>

<style lang="scss" module>
.root {
    padding: 10px 10px 30px;
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
