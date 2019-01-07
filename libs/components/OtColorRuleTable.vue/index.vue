<template>
    <ot-table ot class="ot-color-rule-table" :class="$style.root" :list="tableList">
        <div slot="header-item" slot-scope="{ id, index, item }">
            {{item}}
        </div>
        <div slot="body-item" slot-scope="{ id, index, item }">
            <div v-if="id === 'name'" ot v-ot-bind="createOtColors(item)" v-bind="item && { [item]: true }" :border="shuxing.includes('border')" :class="$style.color">
                {{ String.prototype.toUpperCase.call(item) }}
            </div>
            <div v-if="id === 'title'" :class="$style.title">
                {{ item }}
            </div>
            <ot-link v-if="id === 'alias'" :class="[$style.title, $style.name]" @click="handleCopyClick(item)">
                <span ot v-bind="$otColors.name" :class="$style.sLeft">[</span>
                <span :class="$style.alias">{{ item }}</span>
                <span ot v-bind="$otColors.name" :class="$style.sRight">]</span>
            </ot-link>
        </div>
        <ot-table-column name="name" label="Action"></ot-table-column>
        <ot-table-column name="title" label="Name" width="300px"></ot-table-column>
        <ot-table-column name="alias" label="Alias"></ot-table-column>
    </ot-table>
</template>

<script>
import theme from './theme.js';
export default {
    name: 'ot-color-rule-table',
    mixins: [ theme ],
    props: {
        name: {
            type: String,
            default: '',
        },
        shuxing: {
            type: String,
            default: '',
        },
        actions: {
            type: Array,
            default() {
                return [
                    '', 'normal', 'hover', 'active', 'focus', 'selected', 'disabled',
                ];
            },
        },
    },
    computed: {
        tableList() {
            const list = this.actions;
            const name = this.name;
            const shuxing = this.shuxing;
            return list.map(action => {
                const title = `${name}-${shuxing}` + (action ? `-${action}` : '');
                const alias = `${this.parseSubName(name, 3)}-${this.parseSubName(shuxing, 1)}${this.parseSubActionName(action, 1)}`;
                return {
                    name: action || name,
                    title,
                    alias,
                };
            });
        },
    },
    methods: {
        createOtColors(action) {
            let name = '';
            if (action) {
                name = this.$otColorsParse(`${this.name}-${this.shuxing}-${action}`);
            } else {
                name = this.$otColorsParse(`${this.name}-${this.shuxing}`);
            }
            return {
                [name]: true,
            };
        },
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
        parseSubActionName(name, len) {
            if (!name) {
                return '';
            }
            return `-${this.parseSubName(name, len)}`;
        },
        handleCopyClick(item) {
            const clipboard = this.$otUtils.getOtPlugin('clipboard');
            if (!clipboard) {
                return;
            }
            const content = item;
            clipboard.writeText(content);

            this.$otMessage.info({
                title: `[ ${item} ] 复制成功!`,
                theme: this.$otTheme,
            });
        },
    },
};
</script>


<style lang="scss" module>
@import '../globals';
.root {
    display: inline-block;

    @include __ot_size__;
    @include __ot_root_block__;

    .title {
        box-sizing: border-box;
    }

    .color {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 0 5px;
    }

    .name {
        box-sizing: border-box;
        cursor: pointer;

        .alias {
            display: inline-block;
            min-width: 3em;
            padding: 0 0.5em;
            text-align: center;
        }

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
}
</style>
