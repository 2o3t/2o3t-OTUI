<template>
    <ot-input ot :theme="$otTheme" :size="$otSize" :class="$style.numberRoot" class="ot-input-number" :fixable="false"
        :round="round"
        :readonly="readonly"
        :disabled="disabled"
        :name="name"
        :model="numValue"
        @input="handleInput"
        @change="$emit('change', $event)"
        type="text"
        @blur="handleBlur"
        v-on="$listeners"
        >
        <ot-link v-if="!double" :class="$style.icon" slot="prefix" @click="handleMinusClick"
            :disabled="disabled">
            <ot-icon icon="minus"></ot-icon>
        </ot-link>
        <ot-link v-if="!double" :class="$style.icon" slot="suffix" @click="handlePlusClick"
            :disabled="disabled">
            <ot-icon icon="plus"></ot-icon>
        </ot-link>
        <div v-if="double" :class="$style.double" slot="suffix">
            <ot-link :class="$style.icon" @click="handlePlusClick"
                :disabled="disabled">
                <ot-icon icon="plus"></ot-icon>
            </ot-link>
            <ot-line></ot-line>
            <ot-link :class="$style.icon" @click="handleMinusClick"
                :disabled="disabled">
                <ot-icon icon="minus"></ot-icon>
            </ot-link>
        </div>
    </ot-input>
</template>

<script>
export default {
    name: 'ot-input-number',
    model: {
        prop: 'model',
        event: 'update',
    },
    props: {
        placeholder: [ String ],
        disabled: [ Boolean ],
        model: {
            type: [ Number ],
            required: true,
        },
        name: [ String ],
        readonly: [ Boolean ],
        max: [ String, Number ],
        min: [ String, Number ],
        step: {
            type: [ Number ],
            default: 1,
        },
        precision: {
            type: [ Number ],
            default: 0,
        },
        double: [ Boolean ],
    },
    data() {
        return {
            numValue: this.model,
        };
    },
    watch: {
        model(nv) {
            this.numValue = nv;
        },
    },
    methods: {
        getNum(v) {
            let value = parseFloat(v) || 0;
            if (this.max) {
                const max = parseFloat(this.max);
                if (max <= value) {
                    value = max;
                }
            }
            if (this.min) {
                const min = parseFloat(this.min);
                if (min >= value) {
                    value = min;
                }
            }
            return Number(value.toFixed(this.precision));
        },
        handleInput(e) {
            this.numValue = e.target.value;
        },
        handleBlur(e) {
            const value = this.getNum(e.target.value);
            this.numValue = value;
            this.$emit('update', this.numValue);
        },
        handleMinusClick() {
            if (this.disabled) return;
            const value = this.model - this.step;
            this.numValue = this.getNum(value);
            this.$emit('update', this.numValue);
        },
        handlePlusClick() {
            if (this.disabled) return;
            const value = this.model + this.step;
            this.numValue = this.getNum(value);
            this.$emit('update', this.numValue);
        },
    },
};
</script>

<style lang="scss" module>
@import '../globals';
.numberRoot {

    &>input[ot] {
        text-align: center;
    }

    .icon {
        display: table;
        text-align: center;
        width: 100%;
        height: 100%;

        &>i {
            display: table-cell;
            vertical-align: middle;
        }
    }

    .double {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: absolute;
        right: 0px;
        top: 0px;
        left: 0.4em;
        overflow: hidden;

        &>.icon {
            flex: 0 0 50%;
            height: 50%;
            line-height: 1;
        }
    }

    @include __ot_size__;
    &[size=mini] {
        width: $--ot-mini-input-width + $--ot-mini-default;
    }

    &[size=small] {
        width: $--ot-small-input-width + $--ot-small-default;
    }

    &[size=normal] {
        width: $--ot-normal-input-width + $--ot-normal-default;
    }

    &[size=big] {
        width: $--ot-big-input-width + $--ot-big-default;
    }
}
</style>
