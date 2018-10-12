<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-switch :theme="$otTheme" size="mini" v-model="switchValue" active-color="#13ce66" inactive-color="#ff4949">
            </ot-switch>
            <ot-switch :theme="$otTheme" size="small" v-model="switchValue" active-color="#13ce66" inactive-color="#ff4949">
                <span slot="inactive">#ff4949</span>
                <span slot="active">#13ce66</span>
            </ot-switch>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            switchValue: false,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
