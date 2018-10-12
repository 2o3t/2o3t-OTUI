<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <div ot>输入: {{ inputValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input :theme="$otTheme" v-model="inputValue" round>
                <span slot="suffix">.com</span>
            </ot-input>
            <ot-input :theme="$otTheme" v-model="inputValue" round>
                <ot-icon slot="suffix" icon="cog"></ot-icon>
            </ot-input>
            <ot-input :theme="$otTheme" v-model="inputValue" placeholder="请输入" round>
                <span slot="prefix">@</span>
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
