<template>
    <div :class="$style.root">
        <ot-section v-bind="$attrs" :theme="$otTheme" prefix="#" :label="camelCase(name)" v-for="(name) in otUINameMap" :key="name" section>
            <ot-line :theme="$otTheme"></ot-line>
            <ot-lazy-load :theme="$otTheme">
                <ot-row-group :theme="$otTheme">
                    <div ot :class="$style.item" v-for="(suffix) in otUISubfixMap" :key="suffix">
                        <ot-section v-bind="$attrs" :theme="$otTheme" prefix="#" :label="`${camelCase(name)} - ${camelCase(suffix)}`" :level="6">
                            <div ot :class="$style.box" v-for="sx in otUISxMap" :key="sx">
                                <span :id="`ot__color__${name}__${suffix}__${sx}`" :class="$style.color">{{ String.prototype.toUpperCase.call(sx) }}</span>
                                <span>: </span>
                                <span :class="$style.title">{{ name }}-{{ suffix }}-{{ sx }}</span>

                                <span :class="[$style.title, $style.name]">
                                    <span ot v-ot-bind="$otColors.name" :class="$style.sLeft">[</span>
                                    ot-{{ parseSubName(name,3) }}-{{ parseSubName(suffix,1) }}{{ parseSubSXName(sx,1) }}
                                    <span ot v-ot-bind="$otColors.name" :class="$style.sRight">]</span>
                                </span>
                            </div>
                        </ot-section>
                    </div>
                </ot-row-group>
            </ot-lazy-load>
        </ot-section>
    </div>
</template>

<script>
export default {
    otDefaultColors() {
        return {
            name: {
                normal: [ 'pri-f' ],
                hover: [ 'pri-f-h' ],
            },
        };
    },
    data() {
        return {
            otUINameMap: [
                'light', 'dark', 'grey', 'default', 'primary', 'success', 'warning', 'danger', 'info',
            ],
            otUISubfixMap: [
                'font', 'background', 'border', 'border-top', 'border-left', 'border-right', 'border-bottom',
            ],
            otUISxMap: [
                'normal', 'hover', 'active', 'focus', 'selected', 'disabled',
            ],
            code: decodeURIComponent(`<%=${'otSourceCode'}=%>`),
        };
    },
    methods: {
        camelCase(name) {
            return name[0].toUpperCase() + name.substring(1);
        },
        parseSubName(name, len) {
            let ns = [ name ];
            if (/-/.test(name)) {
                ns = String.prototype.split.call(name, '-');
            }
            return ns.reduce((arr, n) => {
                return arr.concat(String.prototype.substr.call(n, 0, len));
            }, []).join('');
        },
        parseSubSXName(name, len) {
            if (name === 'normal') {
                return '';
            }
            return `-${this.parseSubName(name, len)}`;
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
        font-size: 1.2rem;

        .title {
            display: inline-block;
        }

        .color {
            display: inline-block;
            width: 60px;
            padding: 0 5px;
        }

        .name {
            cursor: pointer;
            padding: 0 10px;
            text-align: center;
            min-width: 10rem;

            &:hover {
                font-weight: 500;

                .sLeft {
                    opacity: 1;
                }

                .sRight {
                    opacity: 1;
                }
            }
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

    .item {
        display: inline-block;
        min-width: 500px;
    }
}
</style>
