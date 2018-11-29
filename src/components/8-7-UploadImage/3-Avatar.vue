<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-upload-avatar field="avatar" size="2em" round
                v-model="imgData"
                :width="100"
                :height="100"
                url="/upload"
                :params="params"
                :headers="headers"
                img-format="png" @error="uploadFail">
            </ot-upload-avatar>
            <ot-upload-avatar field="avatar" size="2em" circle
                v-model="imgData"
                :width="100"
                :height="100"
                url="/upload"
                :params="params"
                :headers="headers"
                img-format="png"
                @error="uploadFail"
                @success="uploadSuccess">
            </ot-upload-avatar>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            params: {
                token: '123456798',
                name: 'avatar',
            },
            headers: {
                smail: '*_~',
            },
            imgData: null, // the datebase64 url of created image
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    methods: {
        /**
        * upload success
        *
        * @param {object} jsonData   服务器返回数据，已进行json转码
        * @param {object} field  [param]
        */
        uploadSuccess(jsonData, field) {
            console.log('-------- upload success --------');
            console.log(jsonData);
            console.log('field: ' + field);
        },
        /**
        * upload fail
        *
        * @param {number} status server api return error status, like 500
        * @param {object} field [param]
        */
        uploadFail(status, field) {
            console.log('-------- upload fail --------');
            console.log(status);
            console.log('field: ' + field);
        },
    },

};
</script>
