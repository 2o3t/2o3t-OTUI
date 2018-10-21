<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group>
            <ot-radio-button-group v-model="labelPosition">
                <ot-radio-button value="left">Left</ot-radio-button>
                <ot-radio-button value="center">Center</ot-radio-button>
                <ot-radio-button value="right">Right</ot-radio-button>
                <ot-radio-button value="top">Top</ot-radio-button>
            </ot-radio-button-group>
        </ot-row-group>
        <ot-row-group :code="code">
            <ot-form v-model="formValue" :label-position="labelPosition">
                <ot-form-item label="姓名" name="name">
                    <ot-input placeholder="请输入" v-model="formValue.name"></ot-input>
                </ot-form-item>
                <ot-form-item label="年龄" name="age">
                    <ot-select placeholder="请选择" readonly v-model="formValue.age" :list="ageList"></ot-select>
                </ot-form-item>
                <ot-form-item label="性别" name="sex">
                    <ot-radio-group v-model="formValue.sex">
                        <ot-radio value="man">男</ot-radio>
                        <ot-radio value="woman">女</ot-radio>
                    </ot-radio-group>
                </ot-form-item>
                <ot-form-item label="爱好" name="hobby">
                    <ot-checkbox-group v-model="formValue.hobby">
                        <ot-checkbox value="basketball">
                            <span>篮球</span>
                        </ot-checkbox>
                        <ot-checkbox value="game">
                            <span>游戏</span>
                        </ot-checkbox>
                        <ot-checkbox value="others">
                            <span>其它</span>
                        </ot-checkbox>
                    </ot-checkbox-group>
                </ot-form-item>
            </ot-form>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            labelPosition: 'left',

            formValue: {
                name: '',
                age: '',
                sex: 'man',
                hobby: [],
            },
            ageList: [ '20岁以下', '20~50周岁', '50~70周岁', '70岁以上' ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
