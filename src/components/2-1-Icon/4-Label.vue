<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-icon :theme="$otTheme" icon="apple" v-ot-bind="$otColors">
                <span>iOS</span>
            </ot-icon>
            <ot-icon :theme="$otTheme" icon="android" :ot-bind="$otColors">
                <span>Android</span>
            </ot-icon>
            <ot-icon :theme="$otTheme" :url="url">
                <span>Baidu</span>
            </ot-icon>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    otDefaultColors() {
        return {
            normal: [ 'def-f' ],
        };
    },
    data() {
        return {
            url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
