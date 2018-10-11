<template>
    <ot-section :theme="$otTheme" label="最大值与最小值" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <div ot>
                <span>Min = -3; Max = 6</span>
                <ot-input-number :theme="$otTheme" v-model="number1" size="mini" min="-3" max="6"></ot-input-number>
            </div>
            <div ot>
                <span>Min = -10</span>
                <ot-input-number :theme="$otTheme" v-model="number2" size="small" min="-10"></ot-input-number>
            </div>
            <div ot>
                <span>Min = -30; Max = 16</span>
                <ot-input-number :theme="$otTheme" v-model="number3" size="normal" min="-30" max="16"></ot-input-number>
            </div>
            <div ot>
                <span>Max = 100</span>
                <ot-input-number :theme="$otTheme" v-model="number4" size="big" max="100"></ot-input-number>
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
