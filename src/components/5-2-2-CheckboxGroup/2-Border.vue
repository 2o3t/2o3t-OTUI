<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-checkbox-group :theme="$otTheme" v-model="checkboxValue" border>
                <ot-checkbox :theme="$otTheme" value="1">
                    <span>小圆仔</span>
                </ot-checkbox>
                <ot-checkbox :theme="$otTheme" value="2">
                    <span>小土仔</span>
                </ot-checkbox>
                <ot-checkbox :theme="$otTheme" value="3">
                    <span>其它</span>
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
