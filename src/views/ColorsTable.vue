<template>
    <div :class="$style.root">
        <ot-section :theme="otTheme" label="Colors Table" :level="2">
            <ot-section :theme="otTheme" label="Grep" prefix="#" section>
                <div :class="$style.box" v-for="({ name, color }) in greys" :key="name">
                    <span :class="$style.title">{{ name }}:</span>
                    <span :class="$style.color" :style="bgColor(color)">{{ String.prototype.toUpperCase.call(color) }}</span>
                </div>
            </ot-section>
            <ot-section :theme="otTheme" :label="camelCase(title)" prefix="#" section v-for="({title, main}) in names" :key="title">
                <ot-line :theme="otTheme"></ot-line>
                <ot-section :theme="otTheme" prefix="#" :label="`${camelCase(title)} - Light`" :level="4">
                    <div :class="$style.box" v-for="({ name, color }) in parseLight(title, main)" :key="name">
                        <span :class="$style.title">{{ name }}:</span>
                        <span :class="$style.color" :style="bgColor(color)">{{ String.prototype.toUpperCase.call(color) }}</span>
                    </div>
                </ot-section>
                <ot-section :theme="otTheme" prefix="#" :label="`${camelCase(title)} - Dark`" :level="4">
                    <div :class="$style.box" v-for="({ name, color }) in parseDark(title, main)" :key="name">
                        <span :class="$style.title">{{ name }}:</span>
                        <span :class="$style.color" :style="bgColor(color)">{{ String.prototype.toUpperCase.call(color) }}</span>
                    </div>
                </ot-section>
            </ot-section>
        </ot-section>
    </div>
</template>

<script>
import Shared from '../shared';
const Color = Shared.Color;
export default {
    name: 'colors-table-page',
    data() {
        return {
            names: [
                {
                    title: 'default',
                    main: '#314659',
                },
                {
                    title: 'primary',
                    main: '#409EFF',
                },
                {
                    title: 'success',
                    main: '#67c23a',
                },
                {
                    title: 'warning',
                    main: '#e6a23c',
                },
                {
                    title: 'danger',
                    main: '#f56c6c',
                },
                {
                    title: 'info',
                    main: '#909399',
                },
            ],
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
        otTheme() {
            return this.otStores.theme;
        },
    },
    methods: {
        parseLight(name, color) {
            return this.mix(`${name}-light`, {
                name: 'white',
                color: '#FFFFFF',
            }, {
                name,
                color,
            });
        },
        parseDark(name, color) {
            return this.mix(`${name}-dark`, {
                name: 'black',
                color: '#000000',
            }, {
                name,
                color,
            });
        },
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
                    color: Color.mix(color1, color2, index * 0.1),
                });
            }
            return result;
        },
        camelCase(name) {
            return name[0].toUpperCase() + name.substring(1);
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
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .box {
        display: inline-block;
        width: 200px;
        text-align: right;
        font-size: 12px;

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

