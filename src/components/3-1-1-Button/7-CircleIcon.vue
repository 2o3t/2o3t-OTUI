<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button :theme="$otTheme" icon="setting" circle></ot-button>
            <ot-button :theme="$otTheme" icon="reload" color="primary" circle></ot-button>
            <ot-button :theme="$otTheme" icon="star" color="success" circle></ot-button>
            <ot-button :theme="$otTheme" icon="link" color="warning" circle></ot-button>
            <ot-button :theme="$otTheme" icon="location" color="danger" circle></ot-button>
            <ot-button :theme="$otTheme" icon="search" color="info" circle></ot-button>
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
