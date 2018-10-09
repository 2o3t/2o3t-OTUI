<template>
    <ot-section :theme="$otTheme" label="Checkbox 多选框组 + 全选 + 中间状态" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-checkbox :theme="$otTheme" :value="true" v-model="all" @click="handleAllClick" :indeterminate="indeterminate">
                <span>ALL</span>
            </ot-checkbox>
            <!-- all 需要 sync 修饰符 -->
            <ot-checkbox-group :theme="$otTheme" size="mini" v-model="checkboxValue" :all="checkboxAll" @changeStatus="handleChangeStatus">
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
