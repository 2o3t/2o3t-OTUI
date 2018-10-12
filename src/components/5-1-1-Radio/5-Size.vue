<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-radio :theme="$otTheme" size="mini" v-model="radioValue" value="1">
                <span>Mini</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="small" v-model="radioValue" value="2">
                <span>Small</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="normal" v-model="radioValue" value="3" :checked="true">
                <span>Normal</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="big" v-model="radioValue" value="4">
                <span>Big</span>
            </ot-radio>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            radioValue: '3',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
