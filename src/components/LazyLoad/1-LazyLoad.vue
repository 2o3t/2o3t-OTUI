<template>
    <ot-section :theme="$otTheme" label="LazyLoad 懒加载容器" prefix="#" section>
        <ot-row-group :theme="$otTheme" :code="code" direction="column">
            <div v-for="(item, index) in 20" :key="index">
                <ot-lazy-load :theme="$otTheme" :delay="delay * index">
                    <div :class="$style.box">
                        <span>OT-UI --> LazyLoad --> {{ index }}</span>
                        <img src="https://drscdn.500px.org/photo/195143459/h%3D1065/v2?webp=true&sig=c9db37fe0017a0479f01bb2a010c88ef4748bcb3a9ef4c58494c20a3fd945fc6" alt="">
                    </div>
                </ot-lazy-load>
            </div>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    data() {
        return {
            delay: 500,
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
};
</script>

<style lang="scss" module>
.box {
    width: 600px;
    height: 100%;
}
</style>
