const stores = {
    theme: 'light',
}

export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    otStores: stores,
                }
            },
            computed: {
                $otStores() {
                    return this.otStores;
                }
            }
        })
    },
};
