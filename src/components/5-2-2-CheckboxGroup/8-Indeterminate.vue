<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" vertical :code="code">
            <ot-checkbox :theme="$otTheme" :value="true" v-model="all" @click="handleAllClick" :indeterminate="indeterminate">
                <span>ALL</span>
            </ot-checkbox>
            <ot-checkbox-group :theme="$otTheme" v-model="checkboxValue" border round
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
            indeterminate: false,
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
                    this.indeterminate = true;
                    this.all = true;
                    break;
                case 'all':
                    this.indeterminate = false;
                    this.checkboxAll = true;
                    this.all = true;
                    break;
                default:
                    this.indeterminate = true;
                    this.checkboxAll = false;
                    this.all = false;
                    break;
            }
            // console.log(val);
        },
    },
};
</script>
