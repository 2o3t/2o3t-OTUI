<template>
    <ot-section :theme="$otTheme" label="Icon 图标" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-icon :theme="$otTheme" size="mini" icon="apple"></ot-icon>
            <ot-icon :theme="$otTheme" size="small" icon="apple"></ot-icon>
            <ot-icon :theme="$otTheme" size="normal" icon="apple"></ot-icon>
            <ot-icon :theme="$otTheme" size="big" icon="apple"></ot-icon>
            <ot-icon :theme="$otTheme" size="mini" icon="android"></ot-icon>
            <ot-icon :theme="$otTheme" size="small" icon="android"></ot-icon>
            <ot-icon :theme="$otTheme" size="normal" icon="android"></ot-icon>
            <ot-icon :theme="$otTheme" size="big" icon="android"></ot-icon>
            <ot-icon :theme="$otTheme" size="mini" icon="flag"></ot-icon>
            <ot-icon :theme="$otTheme" size="small" icon="flag"></ot-icon>
            <ot-icon :theme="$otTheme" size="normal" icon="flag"></ot-icon>
            <ot-icon :theme="$otTheme" size="big" icon="flag"></ot-icon>
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
