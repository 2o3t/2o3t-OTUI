<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-switch :theme="$otTheme" v-model="switchValue" disabled>
                <span slot="active">active</span>
                <span slot="inactive">inactive</span>
            </ot-switch>
            <ot-switch :theme="$otTheme" v-model="switchValue" disabled>
                <span slot="active">active</span>
            </ot-switch>
            <ot-switch :theme="$otTheme" v-model="switchValue" disabled>
                <span>Label</span>
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
