<template>
    <ot-section v-bind="$attrs" :class="$style.root" :theme="$otTheme" section>
        <ot-row-group :theme="$otTheme">
            <div :class="$style.box" v-for="({ name, color }) in greys" :key="name">
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
        greys() {
            return this.mix('default-grey', {
                name: 'white',
                color: '#FFFFFF',
            }, {
                name: 'black',
                color: '#000000',
            });
        },
    },
    methods: {
        mix(prefix, c1, c2) {
            const result = [ c1 ];
            const color1 = c1.color;
            let color2 = c2;
            if (typeof c2 !== 'string') {
                result.push(c2);
                color2 = c2.color;
            }
            for (let i = 0; i < 99; i++) {
                const index = i + 1;
                const pre = Math.round(index * 0.01 * 100) / 100;
                result.push({
                    name: `${Math.round(pre * 100)}%`,
                    color: this.$shared.Color.mix(color1, color2, pre),
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
