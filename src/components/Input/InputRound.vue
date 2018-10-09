<template>
    <ot-section :theme="$otTheme" label="Input 输入框 + 圆角" prefix="#" section>
        <ot-row-group :theme="$otTheme">
            <div ot>输入: {{ inputValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input :theme="$otTheme" size="mini" v-model="inputValue" round></ot-input>
            <ot-input :theme="$otTheme" size="small" v-model="inputValue" round></ot-input>
            <ot-input :theme="$otTheme" size="normal" v-model="inputValue" round></ot-input>
            <ot-input :theme="$otTheme" size="big" v-model="inputValue" round></ot-input>
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
