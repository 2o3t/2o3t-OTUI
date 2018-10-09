<template>
    <ot-section :theme="$otTheme" label="Checkbox 多选框组 + Min(1) ~ Max(2)" prefix="#" section>
        <ot-row-group :theme="$otTheme">
            <ot-checkbox :theme="$otTheme" :value="true" v-model="all" @click="handleAllClick">
                <span>ALL</span>
            </ot-checkbox>
            <ot-checkbox-group :theme="$otTheme" :min="1" :max="2" v-model="checkboxValue" :all="checkboxAll" @changeStatus="handleChangeStatus">
                <ot-checkbox :theme="$otTheme" value="1">
                    <span>label</span>
                </ot-checkbox>
                <ot-checkbox :theme="$otTheme" value="2">
                    <span>label</span>
                </ot-checkbox>
                <ot-checkbox :theme="$otTheme" value="3">
                    <span>label</span>
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
