<template>
    <ot-section :theme="$otTheme" label="Radio 单选框 + 边框 + 圆角" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <!-- 有边框 + 圆角 -->
            <ot-radio :theme="$otTheme" size="mini" v-model="radioValue" value="1" border round>
                <span>Mini</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="small" v-model="radioValue" value="2" border round>
                <span>Small</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="normal" v-model="radioValue" value="3" :checked="true" border round>
                <span>Normal</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="big" v-model="radioValue" value="4" border round>
                <span>Big</span>
            </ot-radio>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            radioValue: '',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
