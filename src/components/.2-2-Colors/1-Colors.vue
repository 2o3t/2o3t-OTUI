<template>
    <div :class="$style.root">
        <ot-section v-bind="$attrs" :theme="$otTheme" :label="camelCase(title)" section v-for="({title, main}) in names" :key="title">
            <!-- <ot-line :theme="$otTheme"></ot-line> -->
            <ot-lazy-load :theme="$otTheme">
                <ot-row-group :theme="$otTheme">
                    <ot-section v-bind="$attrs" :theme="$otTheme" prefix="#" :label="`${camelCase(title)} - Light`" :level="4">
                        <div :class="$style.box" v-for="({ name, color }) in parseLight(title, main)" :key="name">
                            <span :class="$style.title">{{ name }}</span>
                            <span> : </span>
                            <span :class="$style.color" :style="bgColor(color)">{{ String.prototype.toUpperCase.call(color) }}</span>
                        </div>
                    </ot-section>
                    <ot-section v-bind="$attrs" :theme="$otTheme" prefix="#" :label="`${camelCase(title)} - Dark`" :level="4">
                        <div :class="$style.box" v-for="({ name, color }) in parseDark(title, main)" :key="name">
                            <span :class="$style.title">{{ name }}</span>
                            <span> : </span>
                            <span :class="$style.color" :style="bgColor(color)">{{ String.prototype.toUpperCase.call(color) }}</span>
                        </div>
                    </ot-section>
                </ot-row-group>
            </ot-lazy-load>
        </ot-section>
    </div>
</template>

<script>
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
                    main: '#207ff6',
                },
                {
                    title: 'success',
                    main: '#37c385',
                },
                {
                    title: 'warning',
                    main: '#ffcc00',
                },
                {
                    title: 'danger',
                    main: '#ff5252',
                },
                {
                    title: 'info',
                    main: '#26aefb',
                },
            ],
        };
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
            for (let i = 0; i < 99; i++) {
                const index = i + 1;
                const pre = Math.round(index * 0.01 * 100) / 100;
                result.push({
                    name: `${prefix} ${Math.round(pre * 100)}%`,
                    color: this.$shared.Color.mix(color1, color2, pre),
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

    .box {
        // display: inline-block;
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

