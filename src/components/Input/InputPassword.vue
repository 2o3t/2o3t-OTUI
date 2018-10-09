<template>
    <ot-section :theme="$otTheme" label="Input 输入框 + Password" prefix="#" section>
        <ot-row-group :theme="$otTheme">
            <div ot>输入: {{ inputValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input :theme="$otTheme" type="password" size="mini" v-model="inputValue" clearable round></ot-input>
            <ot-input :theme="$otTheme" type="password" size="small" v-model="inputValue" clearable></ot-input>
            <ot-input :theme="$otTheme" type="password" size="normal" v-model="inputValue" clearable></ot-input>
            <ot-input :theme="$otTheme" type="password" size="big" v-model="inputValue" clearable round>
                <div slot="prefix">
                    <span>Http://</span>
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
