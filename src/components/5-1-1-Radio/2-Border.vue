<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <!-- 有边框 border -->
            <ot-radio :theme="$otTheme" v-model="radioValue" value="1" border>
                <span>A</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" v-model="radioValue" value="2" border>
                <span>B</span>
            </ot-radio>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            radioValue: '1',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
