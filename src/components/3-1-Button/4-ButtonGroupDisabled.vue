<template>
    <ot-section :theme="$otTheme" label="ButtonGroup 按钮组 + 圆角 + Disabled" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button-group size="mini">
                <ot-button :theme="$otTheme" round disabled>A</ot-button>
                <ot-button :theme="$otTheme" round>B</ot-button>
                <ot-button :theme="$otTheme" round>C</ot-button>
            </ot-button-group>
            <ot-button-group size="small">
                <ot-button :theme="$otTheme" round>A</ot-button>
                <ot-button :theme="$otTheme" round disabled>B</ot-button>
                <ot-button :theme="$otTheme" round>C</ot-button>
            </ot-button-group>
            <ot-button-group size="normal">
                <ot-button :theme="$otTheme" round disabled>A</ot-button>
                <ot-button :theme="$otTheme" round>B</ot-button>
                <ot-button :theme="$otTheme" round disabled>C</ot-button>
            </ot-button-group>
            <ot-button-group size="big">
                <ot-button :theme="$otTheme" round>A</ot-button>
                <ot-button :theme="$otTheme" round disabled>B</ot-button>
                <ot-button :theme="$otTheme" round>C</ot-button>
            </ot-button-group>
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
