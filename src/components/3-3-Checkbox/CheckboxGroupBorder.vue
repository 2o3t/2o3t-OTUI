<template>
    <ot-section :theme="$otTheme" label="Checkbox 多选框 + 边框" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-checkbox-group :theme="$otTheme" size="mini" v-model="checkboxValue" border>
                <ot-checkbox :theme="$otTheme" value="1">
                    <span>label</span>
                </ot-checkbox>
                <ot-checkbox :theme="$otTheme" value="2">
                    <span>label</span>
                </ot-checkbox>
                <ot-checkbox :theme="$otTheme" value="3">
                    <span>label</span>
                </ot-checkbox>
            </ot-checkbox-group>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            checkboxValue: [ '1' ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
