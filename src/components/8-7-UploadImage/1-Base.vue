<template>
    <ot-section v-bind="$attrs" :theme="$otTheme" section>
        <img :src="imgDataUrl">
        <ot-row-group :theme="$otTheme" :code="code">
            <ot-button class="btn" @click="toggleShow" circle>上传图片</ot-button>
            <ot-upload-image field="img"
                @cropSuccess="cropSuccess"
                @uploadSuccess="uploadSuccess"
                @uploadFail="uploadFail"
                v-model="show"
                :width="300"
                :height="300"
                url="/upload"
                :params="params"
                :headers="headers"
                img-format="png">
            </ot-upload-image>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            params: {
                token: '123456798',
                name: 'avatar',
            },
            headers: {
                smail: '*_~',
            },
            imgDataUrl: '', // the datebase64 url of created image
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
        },
        /**
        * crop success
        *
        * @param {string}  imgDataUrl url
        * @param {object}  field field
        */
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------');
            this.imgDataUrl = imgDataUrl; // test
            console.log('field: ' + field);
        },
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
