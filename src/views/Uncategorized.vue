<template>
    <div :class="$style.root" :theme="$otTheme">

        <ot-section :theme="$otTheme" label="OT-Alert">
            <ot-row-group :theme="$otTheme" :flex="false">
                <ot-alert :title="alertTitle" color="success">123</ot-alert>
                <ot-alert :title="alertTitle" color="success" show-icon></ot-alert>
                <ot-alert :title="alertTitle" :max="99" description="123123"></ot-alert>
                <ot-alert :title="alertTitle" :max="99" description="closable" :closable="false"></ot-alert>
                <ot-alert :title="alertTitle" :max="99" description="center" :center="true"></ot-alert>
                <ot-alert :title="alertTitle" :max="99" description="close-text" close-text="Close"></ot-alert>
                <ot-alert type="warning" :title="alertTitle" description="show-icon" show-icon color="warning"></ot-alert>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Badge">
            <ot-row-group :theme="$otTheme" :flex="false">
                <ot-badge :value="20">123</ot-badge>
                <ot-badge :value="200" :max="99">123</ot-badge>
                <ot-badge value="new">new</ot-badge>
                <ot-badge value="hot">hot</ot-badge>
                <ot-badge dot>DOT</ot-badge>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Table">
            <ot-row-group :theme="$otTheme">
                <ot-table :list="tableList">
                    <ot-table-column name="name" label="名称"></ot-table-column>
                    <ot-table-column name="age" label="年龄"></ot-table-column>
                    <ot-table-column name="address" label="地址"></ot-table-column>
                    <ot-table-column name="other" label="其它"></ot-table-column>
                </ot-table>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-Tip">
            <ot-row-group :theme="$otTheme">
                <ot-tip :theme="$otTheme">
                    <span>Hover</span>
                    <div slot="tip">
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                        <div>tip!!!</div>
                    </div>
                </ot-tip>
            </ot-row-group>
        </ot-section>

    </div>
</template>

<script>
export default {
    name: 'uncategorized-page',
    data() {
        return {
            alertTitle: 'Notice: Balabala...',
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

<style lang="scss" module>
.root {
    padding: 10px 10px 30px;
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
