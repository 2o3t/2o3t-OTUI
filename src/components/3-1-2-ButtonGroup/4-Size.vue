<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button-group size="mini">
                <ot-button :theme="$otTheme">A</ot-button>
                <ot-button :theme="$otTheme">B</ot-button>
                <ot-button :theme="$otTheme">C</ot-button>
            </ot-button-group>
            <ot-button-group size="small">
                <ot-button :theme="$otTheme">A</ot-button>
                <ot-button :theme="$otTheme">B</ot-button>
                <ot-button :theme="$otTheme">C</ot-button>
            </ot-button-group>
            <ot-button-group size="normal">
                <ot-button :theme="$otTheme">A</ot-button>
                <ot-button :theme="$otTheme">B</ot-button>
                <ot-button :theme="$otTheme">C</ot-button>
            </ot-button-group>
            <ot-button-group size="big">
                <ot-button :theme="$otTheme">A</ot-button>
                <ot-button :theme="$otTheme">B</ot-button>
                <ot-button :theme="$otTheme">C</ot-button>
            </ot-button-group>
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
