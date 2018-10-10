<template>
    <ot-section :theme="$otTheme" label="Switch 开关 + active + inactive" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-switch :theme="$otTheme" size="mini" v-model="switchValue">
                <span slot="active">active</span>
                <span slot="inactive">inactive</span>
            </ot-switch>
            <ot-switch :theme="$otTheme" size="small" v-model="switchValue">
                <span slot="active">active</span>
            </ot-switch>
            <ot-switch :theme="$otTheme" size="normal" v-model="switchValue">
                <span>zyao89.cn</span>
            </ot-switch>
            <ot-switch :theme="$otTheme" size="big" v-model="switchValue">
                <span>zyao89.cn</span>
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
