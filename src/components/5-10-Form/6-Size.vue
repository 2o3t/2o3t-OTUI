<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :code="code">
            <ot-form v-model="formValue" size="mini">
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
                <ot-form-item label="是否公开" name="public">
                    <ot-switch v-model="formValue.public">
                        <span slot="active">公开</span>
                    </ot-switch>
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
                <ot-form-item label="特殊资源" name="source">
                    <ot-radio-group v-model="formValue.source">
                        <ot-radio value="online">
                            <span>线上</span>
                        </ot-radio>
                        <ot-radio value="offline">
                            <span>线下</span>
                        </ot-radio>
                    </ot-radio-group>
                </ot-form-item>
                <ot-form-item label="备注" name="mark">
                    <ot-input type="textarea" v-model="formValue.mark"
                        placeholder="请输入内容" maxlength="30"
                        cols="40" rows="5">
                    </ot-input>
                </ot-form-item>
            </ot-form>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            formValue: {
                name: '',
                age: '',
                sex: 'man',
                public: true,
                hobby: [],
                source: 'online',
                mark: '',
            },
            ageList: [ '20岁以下', '20~50周岁', '50~70周岁', '70岁以上' ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
