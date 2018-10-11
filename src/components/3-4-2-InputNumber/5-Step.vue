<template>
    <ot-section :theme="$otTheme" label="步数与精度" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <div ot>
                <span>Step = 2</span>
                <ot-input-number :theme="$otTheme" v-model="number1" size="mini" :step="2"></ot-input-number>
            </div>
            <div ot>
                <span>Step = 4</span>
                <ot-input-number :theme="$otTheme" v-model="number2" size="small" :step="4"></ot-input-number>
            </div>
            <div ot>
                <span>Step = 0.1; Precision = 2</span>
                <ot-input-number :theme="$otTheme" v-model="number3" size="normal" :step="0.1" :precision="2"></ot-input-number>
            </div>
            <div ot>
                <span>Step = 0.01; Precision = 2</span>
                <ot-input-number :theme="$otTheme" v-model="number4" :step="0.01" :precision="2"></ot-input-number>
            </div>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            number1: 0,
            number2: 0,
            number3: 0,
            number4: 0,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
