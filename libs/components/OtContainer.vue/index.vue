<template>
    <section ot class="ot-container" :class="$style.root" :vertical="isVertical">
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
        // 子元素垂直排列, 子元素中有 `ot-header` 或 `ot-footer` 时为 vertical
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
    computed: {
        isVertical() {
            if (this.vertical) {
                return true;
            }
            return this.header || this.footer;
        },
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

