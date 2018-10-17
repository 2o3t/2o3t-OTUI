<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-title-tip :theme="$otTheme" content="我靠左边" text-align="left" :width="100">
                <span>文字靠左</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" content="我在中间" text-align="center" :width="100">
                <span>文字居中</span>
            </ot-title-tip>
            <ot-title-tip :theme="$otTheme" content="我靠右边" text-align="right" :width="100">
                <span>文字靠右</span>
            </ot-title-tip>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
