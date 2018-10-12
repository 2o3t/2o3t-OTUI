<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <!-- 有边框 + 圆角 -->
            <ot-radio :theme="$otTheme" size="mini" v-model="radioValue" value="1" border round disabled>
                <span>Mini</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="small" v-model="radioValue" value="2" border round disabled>
                <span>Small</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="normal" v-model="radioValue" value="3" disabled>
                <span>Normal</span>
            </ot-radio>
            <ot-radio :theme="$otTheme" size="big" v-model="radioValue" value="4" border disabled>
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
