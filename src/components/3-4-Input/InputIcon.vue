<template>
    <ot-section :theme="$otTheme" label="Input 输入框 + Icon" prefix="#" section>
        <ot-row-group :theme="$otTheme">
            <div ot>输入: {{ inputValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input :theme="$otTheme" type="password" size="mini" v-model="inputValue" clearable round icon="user"></ot-input>
            <ot-input :theme="$otTheme" type="password" size="small" v-model="inputValue" clearable icon="cloud"></ot-input>
            <ot-input :theme="$otTheme" size="normal" v-model="inputValue" clearable icon="group"></ot-input>
            <ot-input :theme="$otTheme" size="big" v-model="inputValue" clearable round icon="sitemap">
                <div slot="subfix">
                    <span>@ot.cn</span>
                </div>
            </ot-input>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
