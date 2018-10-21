<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :code="code">
            <ot-checkbox size="mini" v-model="checkboxValue1" value="1">
                <span>Mini</span>
            </ot-checkbox>
            <ot-checkbox size="small" v-model="checkboxValue2" value="2">
                <span>Small</span>
            </ot-checkbox>
            <ot-checkbox size="normal" v-model="checkboxValue3" value="3">
                <span>Normal</span>
            </ot-checkbox>
            <ot-checkbox size="big" v-model="checkboxValue4" value="4">
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
