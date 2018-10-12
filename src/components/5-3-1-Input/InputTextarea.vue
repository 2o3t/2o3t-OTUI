<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" label="Input 输入框 + Textarea" section>
        <ot-row-group :theme="$otTheme">
            <div ot>输入: {{ inputValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input :theme="$otTheme" type="textarea" size="mini" v-model="inputValue" round></ot-input>
            <ot-input :theme="$otTheme" type="textarea" size="small" v-model="inputValue" placeholder="请输入内容"></ot-input>
            <ot-input :theme="$otTheme" type="textarea" size="normal" v-model="inputValue" placeholder="请输入内容" maxlength="30"></ot-input>
            <ot-input :theme="$otTheme" type="textarea" size="big" v-model="inputValue" round maxlength="200"></ot-input>
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
