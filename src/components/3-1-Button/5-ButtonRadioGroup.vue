<template>
    <ot-section :theme="$otTheme" label="RadioButtonGroup 单选按钮组 + 圆角" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-radio-button-group v-model="radioSelect" size="mini">
                <ot-radio-button :theme="$otTheme" name="B" disabled>B</ot-radio-button>
                <ot-radio-button :theme="$otTheme" name="A">A</ot-radio-button>
                <ot-radio-button :theme="$otTheme" name="C">C</ot-radio-button>
            </ot-radio-button-group>
            <ot-radio-button-group v-model="radioSelect" size="small">
                <ot-radio-button :theme="$otTheme" name="B" disabled>B</ot-radio-button>
                <ot-radio-button :theme="$otTheme" name="A">A</ot-radio-button>
                <ot-radio-button :theme="$otTheme" name="C">C</ot-radio-button>
            </ot-radio-button-group>
            <ot-radio-button-group v-model="radioSelect" size="normal">
                <ot-radio-button :theme="$otTheme" name="B" disabled>B</ot-radio-button>
                <ot-radio-button :theme="$otTheme" name="A">A</ot-radio-button>
                <ot-radio-button :theme="$otTheme" name="C">C</ot-radio-button>
            </ot-radio-button-group>
            <ot-radio-button-group v-model="radioSelect" size="big">
                <ot-radio-button :theme="$otTheme" name="B" disabled>B</ot-radio-button>
                <ot-radio-button :theme="$otTheme" name="A">A</ot-radio-button>
                <ot-radio-button :theme="$otTheme" name="C">C</ot-radio-button>
            </ot-radio-button-group>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            radioSelect: 'A',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
