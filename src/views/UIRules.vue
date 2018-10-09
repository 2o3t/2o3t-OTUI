<template>
    <div :class="$style.root">
        <ot-section label="OT-UI Rules" :level="2" :theme="otTheme">
            <ot-section :theme="otTheme" prefix="#" :label="camelCase(name)" v-for="(name) in otUINameMap" :key="name" section>
                <ot-line :theme="otTheme"></ot-line>
                <div v-for="(subfix) in otUISubfixMap" :key="subfix">
                    <ot-section :theme="otTheme" prefix="#" :label="`${camelCase(name)} - ${camelCase(subfix)}`" :level="6">
                        <div ot :class="$style.box" v-for="sx in otUISxMap" :key="sx">
                            <span :id="`ot__color__${name}__${subfix}__${sx}`" :class="$style.color">{{ String.prototype.toUpperCase.call(sx) }}</span>
                            <span :class="$style.title">: {{ name }}-{{ subfix }}-{{ sx }}</span>
                            <span :class="$style.title"> - [ot-{{ parseSubName(name,3) }}-{{ parseSubName(subfix,1) }}{{ parseSubSXName(sx,1) }}]</span>
                        </div>
                    </ot-section>
                </div>
            </ot-section>
        </ot-section>
    </div>
</template>

<script>
export default {
    name: 'colors-table-page',
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
        };
    },
    computed: {
        otTheme() {
            return this.otStores.theme;
        },
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
    padding: 10px 10px 30px;
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

