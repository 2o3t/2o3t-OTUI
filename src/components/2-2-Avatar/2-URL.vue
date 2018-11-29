<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-avatar :url="url1" round></ot-avatar>
            <ot-avatar :url="url2" circle></ot-avatar>
            <ot-avatar :url="url3" fill></ot-avatar>
            <ot-avatar :url="url3" circle fill size="2em"></ot-avatar>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            url1: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png',
            url2: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=961224733,2320658306&fm=179&app=42&f=JPEG?w=121&h=140',
            url3: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4019618613,3405954363&fm=58&bpow=1024&bpoh=1024',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
