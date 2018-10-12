<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" vertical :code="code">
            <ot-checkbox :theme="$otTheme" :value="true" v-model="all" @click="handleAllClick">
                <span>ALL</span>
            </ot-checkbox>
            <ot-checkbox-group :theme="$otTheme" :min="1" :max="2" v-model="checkboxValue" border round
                :all="checkboxAll" @changeStatus="handleChangeStatus">
                <ot-checkbox :theme="$otTheme" value="1">
                    <span>小圆仔</span>
                </ot-checkbox>
                <ot-checkbox :theme="$otTheme" value="2">
                    <span>小土仔</span>
                </ot-checkbox>
                <ot-checkbox :theme="$otTheme" value="3">
                    <span>其它</span>
                </ot-checkbox>
            </ot-checkbox-group>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            all: false,
            checkboxAll: false,
            checkboxValue: [ '1' ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    methods: {
        handleAllClick() {
            this.checkboxAll = !this.checkboxAll;
        },
        handleChangeStatus(status/* , val*/) {
            switch (status) {
                case 'half':
                    this.all = true;
                    break;
                case 'all':
                    this.checkboxAll = true;
                    this.all = true;
                    break;
                default:
                    this.checkboxAll = false;
                    this.all = false;
                    break;
            }
            // console.log(val);
        },
    },
};
</script>
