<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :code="code">
            <ot-form v-model="formValue" horizontal :cancelLabel="false">
                <ot-form-item label="号码" name="number">
                    <ot-input placeholder="请输入" v-model="formValue.name"></ot-input>
                </ot-form-item>
                <ot-form-item label="公开" name="public">
                    <ot-switch v-model="formValue.public">
                        <span slot="active">公开</span>
                    </ot-switch>
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
                number: '',
                public: true,
            },
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>
