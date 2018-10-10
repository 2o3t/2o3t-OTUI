<template>
    <div :class="$style.root" :theme="$otTheme">

        <ot-section :theme="$otTheme" label="OT-Card">
            <ot-row-group :theme="$otTheme">
                <ot-card :theme="$otTheme"></ot-card>
                <ot-card :theme="$otTheme"></ot-card>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="$otTheme" label="OT-LazyLoad" v-for="(item, index) in 100" :key="index">
            <ot-lazy-load>
                <ot-row-group :theme="$otTheme">
                    <span>abc {{ index }}</span>
                </ot-row-group>
            </ot-lazy-load>
        </ot-section>

    </div>
</template>

<script>
export default {
    name: 'ui-page',
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" module>
.root {
    padding: 10px 10px 30px;
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
