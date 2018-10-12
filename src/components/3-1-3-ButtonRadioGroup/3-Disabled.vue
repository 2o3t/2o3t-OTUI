<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-radio-button-group v-model="radioSelect">
                <ot-radio-button :theme="$otTheme" value="A">A</ot-radio-button>
                <ot-radio-button :theme="$otTheme" value="B" disabled>B</ot-radio-button>
                <ot-radio-button :theme="$otTheme" value="C">C</ot-radio-button>
            </ot-radio-button-group>
            <ot-radio-button-group v-model="radioSelect" round>
                <ot-radio-button :theme="$otTheme" value="A" disabled>A</ot-radio-button>
                <ot-radio-button :theme="$otTheme" value="B">B</ot-radio-button>
                <ot-radio-button :theme="$otTheme" value="C">C</ot-radio-button>
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
