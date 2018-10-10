<template>
    <ot-section :class="$style.root" :theme="$otTheme" label="Grey 中性色" prefix="#" section :desc="desc">
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
    data() {
        return {
            desc: '中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。',
        };
    },
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
            for (let i = 0; i < 9; i++) {
                const index = i + 1;
                result.push({
                    name: `${prefix}-${index}`,
                    color: this.$shared.Color.mix(color1, color2, index * 0.1),
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
