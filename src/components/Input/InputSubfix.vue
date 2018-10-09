<template>
    <ot-section :theme="$otTheme" label="Input 输入框 + Subfix" prefix="#" section>
        <ot-row-group :theme="$otTheme">
            <div ot>输入: {{ inputValue }}</div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-input :theme="$otTheme" size="mini" v-model="inputValue" round>
                <div slot="subfix">
                    <span>.com</span>
                </div>
            </ot-input>
            <ot-input :theme="$otTheme" size="small" v-model="inputValue" round>
                <div slot="subfix">
                    <ot-icon icon="send"></ot-icon>
                </div>
            </ot-input>
            <ot-input :theme="$otTheme" size="normal" v-model="inputValue" round>
                <ot-icon slot="subfix" icon="cog"></ot-icon>
            </ot-input>
            <ot-input :theme="$otTheme" size="big" v-model="inputValue" round>
                <div slot="prefix">
                    http://
                </div>
                <div slot="subfix">
                    <ot-icon icon="send"></ot-icon>
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
