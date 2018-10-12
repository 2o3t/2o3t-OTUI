<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <div ot>输入: {{ inputValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input :theme="$otTheme" size="mini" placeholder="请输入" v-model="inputValue" round>
                <span slot="prefix">¥</span>
            </ot-input>
            <ot-input :theme="$otTheme" size="small" placeholder="请输入" v-model="inputValue" round>
                <ot-icon slot="suffix" icon="send"></ot-icon>
            </ot-input>
            <ot-input :theme="$otTheme" size="normal" placeholder="请输入" v-model="inputValue" round></ot-input>
            <ot-input :theme="$otTheme" size="big" placeholder="请输入" v-model="inputValue" round>
                <span slot="prefix">Http://</span>
                <ot-icon slot="suffix" icon="send"></ot-icon>
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
