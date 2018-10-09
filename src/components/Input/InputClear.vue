<template>
    <ot-section :theme="$otTheme" label="Input 输入框 + Clear" prefix="#" section>
        <ot-row-group :theme="$otTheme">
            <div ot>输入: {{ inputValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input :theme="$otTheme" size="mini" v-model="inputValue" clearable round></ot-input>
            <ot-input :theme="$otTheme" size="small" v-model="inputValue" clearable></ot-input>
            <ot-input :theme="$otTheme" size="normal" v-model="inputValue" clearable></ot-input>
            <ot-input :theme="$otTheme" size="big" v-model="inputValue" clearable round>
                <div slot="prefix">
                    http://
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
