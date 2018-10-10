<template>
    <ot-section :theme="$otTheme" label="Radio 单选框 + 边框" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <!-- 有边框 border -->
            <ot-radio :theme="$otTheme" size="mini" v-model="radioValue" value="1" border>
                <span>Mini</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="small" v-model="radioValue" value="2" border>
                <span>Small</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="normal" v-model="radioValue" value="3" :checked="true" border>
                <span>Normal</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="big" v-model="radioValue" value="4" border>
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
