<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="Card 卡片" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-card :theme="$otTheme" round></ot-card>
            <ot-card :theme="$otTheme">
                <div slot="left"></div>
                <div slot="top"></div>
                <div slot="bottom"></div>
            </ot-card>
            <ot-card :theme="$otTheme">
                <div slot="top"></div>
                <div slot="bottom"></div>
            </ot-card>
            <ot-card :theme="$otTheme">
                <div slot="left"></div>
                <div></div>
            </ot-card>
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
