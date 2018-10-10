<template>
    <ot-section :theme="$otTheme" label="Checkbox 多选框" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-checkbox :theme="$otTheme" size="mini" v-model="checkboxValue1" value="1">
                <span>Mini</span>
            </ot-checkbox>
            <ot-checkbox :theme="$otTheme" size="small" v-model="checkboxValue2" value="2">
                <span>Small</span>
            </ot-checkbox>
            <ot-checkbox :theme="$otTheme" size="normal" v-model="checkboxValue3" value="3">
                <span>Normal</span>
            </ot-checkbox>
            <ot-checkbox :theme="$otTheme" size="big" v-model="checkboxValue4" value="4">
                <span>Big</span>
            </ot-checkbox>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            checkboxValue1: '1',
            checkboxValue2: '2',
            checkboxValue3: '3',
            checkboxValue4: '4',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
