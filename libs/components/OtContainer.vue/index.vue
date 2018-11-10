<template>
    <section ot class="ot-container" :class="$style.root" :vertical="vertical">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'ot-container',
    provide() {
        return {
            $OtContainer: this,
        };
    },
    props: {
        // 垂直排列
        vertical: [ Boolean ],
    },
    data() {
        return {
            header: null,
            footer: null,
            aside: null,
            main: null,
        };
    },
    methods: {
        addHeader(item) {
            if (this.header) {
                console.warn('already regiester a header...');
            }
            this.header = item;
        },
        addFooter(item) {
            if (this.footer) {
                console.warn('already regiester a footer...');
            }
            this.footer = item;
        },
        addAside(item) {
            if (this.aside) {
                console.warn('already regiester a aside...');
            }
            this.aside = item;
        },
        addMain(item) {
            if (this.main) {
                console.warn('already regiester a main...');
            }
            this.main = item;
        },
    },
};
</script>

<style lang="scss" module>
.root {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;

    &[vertical] {
        flex-direction: column;
    }
}
</style>

