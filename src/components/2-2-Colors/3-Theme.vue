<template>
    <ot-section v-bind="$attrs" :class="$style.root" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <div :class="$style.box" v-for="({ name, color }) in white" :key="name">
                <span :class="$style.title">{{ name }}</span>
                <span> : </span>
                <span :class="$style.color" :style="bgColor(color)">{{ String.prototype.toUpperCase.call(color) }}</span>
            </div>
        </ot-row-group>
        <ot-row-group :theme="$otTheme">
            <div :class="$style.box" v-for="({ name, color }) in black" :key="name">
                <span :class="$style.title">{{ name }}</span>
                <span> : </span>
                <span :class="$style.color" :style="bgColor(color)">{{ String.prototype.toUpperCase.call(color) }}</span>
            </div>
        </ot-row-group>
    </ot-section>
</template>

<script>
export default {
    computed: {
        white() {
            return this.mix('default-white', {
                name: 'white',
                color: '#FFFFFF',
            });
        },
        black() {
            return this.mix('default-black', {
                name: 'black',
                color: '#000000',
            });
        },
    },
    methods: {
        mix(prefix, c1) {
            const result = [ c1 ];
            const color1 = c1.color;
            for (let i = 0; i < 99; i++) {
                const index = i + 1;
                const pre = Math.round(index * 0.01 * 100) / 100;
                result.push({
                    name: `${Math.round(pre * 100)}%`,
                    color: this.$shared.Color.hexToRgba(color1, pre),
                });
            }
            return result;
        },
        bgColor(color) {
            return {
                backgroundColor: color,
            };
        },
    },
};
</script>

<style lang="scss" module>
.root {

    .box {
        display: inline-block;
        width: 200px;
        text-align: right;
        font-size: 12px;
        margin: 3px 0;

        .title {
            display: inline-block;
        }

        .color {
            display: inline-block;
            width: 60px;
            padding: 0 5px;
        }

        &[ot] {
            display: block;
            text-align: left;
            padding: 5px 20px;
            width: auto;

            .color {
                color: #fff;
            }
        }
    }
}
</style>
