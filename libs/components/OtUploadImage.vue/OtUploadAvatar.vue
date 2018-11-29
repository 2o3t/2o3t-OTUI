<template>
    <div ot class="ot-upload-image" :size="$otSize">
        <ot-button class="btn" @click="toggleShow" :url="imgDataUrl" :icon="imgDataUrl ? null : 'plus'"
            :width="width" :height="height" dashed border custom :circle="circle" :round="round">
        </ot-button>
        <ot-upload-image field="avatar"
            v-bind="$attrs" v-on="$listeners"
            @cropSuccess="cropSuccess"
            @uploadSuccess="uploadSuccess"
            @uploadFail="uploadFail"
            v-model="show"
            :width="width"
            :height="height"
            :url="url">
        </ot-upload-image>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        // 返回数据
        model: {
            type: Object,
        },
        // 上传地址
        url: {
            type: String,
            required: true,
        },
        // 宽度大小
        width: {
            type: [ String, Number ],
            default: 100,
        },
        // 高度大小
        height: {
            type: [ String, Number ],
            default: 100,
        },
        // 圆形
        circle: Boolean,
        // 图片URL
        image: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            show: false,
            imgDataUrl: '', // the datebase64 url of created image
        };
    },
    watch: {
        image(newV) {
            this.imgDataUrl = newV;
        },
    },
    methods: {
        _updateModel(value) {
            this.$emit('update', value);
        },
        toggleShow() {
            this.show = !this.show;
        },
        /**
        * crop success
        *
        * @param {string}  imgDataUrl url
        * @param {object}  field field
        */
        cropSuccess(imgDataUrl) {
            this.imgDataUrl = imgDataUrl;
        },
        /**
        * upload success
        *
        * @param {object} jsonData   服务器返回数据，已进行json转码
        * @param {object} field  [param]
        */
        uploadSuccess(jsonData, field) {
            this._updateModel(jsonData);
            this.$emit('success', jsonData, field);
        },
        /**
        * upload fail
        *
        * @param {number} status server api return error status, like 500
        * @param {object} field [param]
        */
        uploadFail(status, field) {
            this._updateModel(null);
            this.$emit('error', status, field);
        },
    },
};
</script>

<style>

</style>
