<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <div ot>输入: {{ inputValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input :theme="$otTheme" type="password" v-model="inputValue" placeholder="请输入" round icon="user"></ot-input>
            <ot-input :theme="$otTheme" type="password" v-model="inputValue" clearable icon="cloud"></ot-input>
            <ot-input :theme="$otTheme" v-model="inputValue" placeholder="请输入" clearable icon="group"></ot-input>
            <ot-input :theme="$otTheme" v-model="inputValue" clearable round icon="sitemap">
                <div slot="suffix">
                    <span>@gmail.com</span>
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
