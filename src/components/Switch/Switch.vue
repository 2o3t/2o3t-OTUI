<template>
    <ot-section :theme="$otTheme" label="Switch 开关" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-switch :theme="$otTheme" size="mini" v-model="switchValue">
            </ot-switch>
            <ot-switch :theme="$otTheme" size="small" v-model="switchValue">
            </ot-switch>
            <ot-switch :theme="$otTheme" size="normal" v-model="switchValue">
            </ot-switch>
            <ot-switch :theme="$otTheme" size="big" v-model="switchValue">
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
