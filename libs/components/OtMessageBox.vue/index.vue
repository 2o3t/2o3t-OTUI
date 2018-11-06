<template>
    <ot-modal :name="`ot-message-box-${name}`" @closed="onClosed">
        <div ot class="ot-message-box" :class="[$style.root, customClass]" :center="center">
            <div :class="$style.header">
                <div :class="$style.title">
                    <ot-icon :icon="icon" v-if="icon && center"></ot-icon>
                    <span>{{ title }}</span>
                </div>
                <ot-icon v-ot-bind="$otColors.closeBtn" :class="$style.closeBtn" :icon="closeText === '' ? 'close' : ''" v-if="closable" @click="hide">
                    {{closeText}}
                </ot-icon>
            </div>
            <div :class="$style.content">

            </div>
            <div :class="$style.btns"></div>
        </div>
    </ot-modal>
</template>

<script>
export default {
    data () {
        return {
            name: '',
            closedCallback: null,
            type: "",
            closeText: "",
        }
    },
    methods: {
        show() {
            console.log('ccc');
            this.$modal.show(`ot-message-box-${this.name}`);
        },
        hide() {
            this.$modal.hide(`ot-message-box-${this.name}`);
        },
        onClosed() {
            this.closedCallback && this.closedCallback();
        },
    }
}
</script>

<style>

</style>
