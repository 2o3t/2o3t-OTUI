<template>
    <div :class="$style.root" :theme="otTheme">

        <ot-section :theme="otTheme" label="OT-Checkbox">
            <ot-row-group :theme="otTheme">
                <ot-checkbox :theme="otTheme" size="mini" v-model="checkboxValue1" value="1">
                    <span>label</span>
                </ot-checkbox>
                <ot-checkbox :theme="otTheme" size="small" v-model="checkboxValue2" value="2">
                    <span>label</span>
                </ot-checkbox>
                <ot-checkbox :theme="otTheme" size="normal" v-model="checkboxValue3" value="3">
                    <span>label</span>
                </ot-checkbox>
                <ot-checkbox :theme="otTheme" size="big" v-model="checkboxValue4" value="4">
                    <span>label</span>
                </ot-checkbox>
            </ot-row-group>
            <ot-row-group :theme="otTheme">
                <ot-checkbox :theme="otTheme" :value="true" v-model="checkboxAll" :indeterminate="true">
                    <span>ALL</span>
                </ot-checkbox>
                <ot-checkbox-group :theme="otTheme" size="mini" v-model="checkboxValue" :all="checkboxAll">
                    <ot-checkbox :theme="otTheme" value="1">
                        <span>label</span>
                    </ot-checkbox>
                    <ot-checkbox :theme="otTheme" value="2">
                        <span>label</span>
                    </ot-checkbox>
                    <ot-checkbox :theme="otTheme" value="3">
                        <span>label</span>
                    </ot-checkbox>
                </ot-checkbox-group>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="otTheme" label="OT-Loading">
            <ot-row-group :theme="otTheme">
                <ot-loading :theme="otTheme" size="mini"></ot-loading>
                <ot-loading :theme="otTheme" size="small"></ot-loading>
                <ot-loading :theme="otTheme" size="normal"></ot-loading>
                <ot-loading :theme="otTheme" size="big"></ot-loading>
            </ot-row-group>
            <ot-row-group :theme="otTheme">
                <ot-loading :theme="otTheme" type="push" size="mini" label="2O3T Loading"></ot-loading>
                <ot-loading :theme="otTheme" type="push" size="small" label="2O3T Loading"></ot-loading>
                <ot-loading :theme="otTheme" type="push" size="normal" label="2O3T Loading"></ot-loading>
                <ot-loading :theme="otTheme" type="push" size="big" label="2O3T Loading"></ot-loading>
            </ot-row-group>
            <ot-row-group :theme="otTheme">
                <ot-loading :theme="otTheme" type="circle" size="mini"></ot-loading>
                <ot-loading :theme="otTheme" type="circle" size="small"></ot-loading>
                <ot-loading :theme="otTheme" type="circle" size="normal"></ot-loading>
                <ot-loading :theme="otTheme" type="circle" size="big"></ot-loading>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="otTheme" label="OT-Switch">
            <ot-row-group :theme="otTheme">
                <ot-switch :theme="otTheme" size="mini" v-model="switchValue">
                    <span slot="active">active</span>
                    <span slot="inactive">inactive</span>
                </ot-switch>
                <ot-switch :theme="otTheme" size="small" v-model="switchValue">
                    <span slot="active">active</span>
                </ot-switch>
                <ot-switch :theme="otTheme" size="normal" v-model="switchValue">
                    <span>zyao89.cn</span>
                </ot-switch>
                <ot-switch :theme="otTheme" size="big" v-model="switchValue">
                    <span>zyao89.cn</span>
                </ot-switch>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="otTheme" label="OT-Input">
            <ot-row-group :theme="otTheme">
                <div>输入: {{ inputValue }}</div>
            </ot-row-group>
            <ot-row-group :theme="otTheme">
                <ot-input :theme="otTheme" size="mini" v-model="inputValue"></ot-input>
                <ot-input :theme="otTheme" size="small" v-model="inputValue"></ot-input>
                <ot-input :theme="otTheme" size="normal" v-model="inputValue"></ot-input>
                <ot-input :theme="otTheme" size="big" v-model="inputValue"></ot-input>
            </ot-row-group>
            <ot-row-group :theme="otTheme">
                <ot-input :theme="otTheme" size="mini" v-model="inputValue" round>
                    <div slot="prefix">
                        http://
                    </div>
                </ot-input>
                <ot-input :theme="otTheme" size="small" v-model="inputValue" round>
                    <div slot="subfix">
                        <ot-icon icon="send"></ot-icon>
                    </div>
                </ot-input>
                <ot-input :theme="otTheme" size="normal" v-model="inputValue" round></ot-input>
                <ot-input :theme="otTheme" size="big" v-model="inputValue" round>
                    <div slot="prefix">
                        http://
                    </div>
                    <div slot="subfix">
                        <ot-icon icon="send"></ot-icon>
                    </div>
                </ot-input>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="otTheme" label="OT-Button">
            <ot-row-group :theme="otTheme">
                <ot-button :theme="otTheme" size="mini">CLICK</ot-button>
                <ot-button :theme="otTheme" size="small">CLICK</ot-button>
                <ot-button :theme="otTheme" size="normal">CLICK</ot-button>
                <ot-button :theme="otTheme" size="big">CLICK</ot-button>
                <ot-button :theme="otTheme" size="mini" round>CLICK</ot-button>
                <ot-button :theme="otTheme" size="small" round>CLICK</ot-button>
                <ot-button :theme="otTheme" size="normal" round>CLICK</ot-button>
                <ot-button :theme="otTheme" size="big" round>CLICK</ot-button>
            </ot-row-group>
            <ot-row-group>
                <ot-button-group>
                    <ot-button :theme="otTheme" size="small">A</ot-button>
                    <ot-button :theme="otTheme" size="small">B</ot-button>
                    <ot-button :theme="otTheme" size="small">C</ot-button>
                </ot-button-group>
                <ot-button-group>
                    <ot-button :theme="otTheme" size="small" round>A</ot-button>
                    <ot-button :theme="otTheme" size="small" round disabled>B</ot-button>
                    <ot-button :theme="otTheme" size="small" round>C</ot-button>
                </ot-button-group>

                <ot-radio-button-group v-model="radioSelect">
                    <ot-radio-button :theme="otTheme" name="B" disabled>B</ot-radio-button>
                    <ot-radio-button :theme="otTheme" name="A">A</ot-radio-button>
                    <ot-radio-button :theme="otTheme" name="C">C</ot-radio-button>
                </ot-radio-button-group>
                <ot-radio-button-group v-model="radioSelect">
                    <ot-radio-button :theme="otTheme" name="A" round>A</ot-radio-button>
                    <ot-radio-button :theme="otTheme" name="B" round disabled>B</ot-radio-button>
                    <ot-radio-button :theme="otTheme" name="C" round>C</ot-radio-button>
                </ot-radio-button-group>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="otTheme" label="OT-Card">
            <ot-row-group :theme="otTheme">
                <ot-card :theme="otTheme"></ot-card>
                <ot-card :theme="otTheme"></ot-card>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="otTheme" label="OT-Icon">
            <ot-row-group :theme="otTheme">
                <ot-icon :theme="otTheme" size="mini" icon="apple"></ot-icon>
                <ot-icon :theme="otTheme" size="small" icon="apple"></ot-icon>
                <ot-icon :theme="otTheme" size="normal" icon="apple"></ot-icon>
                <ot-icon :theme="otTheme" size="big" icon="apple"></ot-icon>
                <ot-icon :theme="otTheme" size="mini" icon="android"></ot-icon>
                <ot-icon :theme="otTheme" size="small" icon="android"></ot-icon>
                <ot-icon :theme="otTheme" size="normal" icon="android"></ot-icon>
                <ot-icon :theme="otTheme" size="big" icon="android"></ot-icon>
                <ot-icon :theme="otTheme" size="mini" icon="flag"></ot-icon>
                <ot-icon :theme="otTheme" size="small" icon="flag"></ot-icon>
                <ot-icon :theme="otTheme" size="normal" icon="flag"></ot-icon>
                <ot-icon :theme="otTheme" size="big" icon="flag"></ot-icon>
            </ot-row-group>
        </ot-section>

        <ot-section :theme="otTheme" label="OT-Tabs">
            <ot-row-group :theme="otTheme">
                <ot-tabs :theme="otTheme" :list="tabs" :select="selectTab"></ot-tabs>
            </ot-row-group>
        </ot-section>

    </div>
</template>

<script>
export default {
    name: 'ui-page',
    data() {
        return {
            isDark: false,
            inputValue: '',
            tabs: [{
                title: 'OT',
                name: 'OT',
            }],
            radioSelect: 'A',
            switchValue: false,
            checkboxAll: false,
            checkboxValue: [ '1' ],
            checkboxValue1: '1',
            checkboxValue2: '2',
            checkboxValue3: '3',
            checkboxValue4: '4',
        };
    },
    computed: {
        otTheme() {
            return this.otStores.theme;
        },
    },
    methods: {
        initTabs() {
            for (let i = 0; i < 9; i++) {
                this.tabs.push({
                    title: `Tabs ${i}`,
                    name: i + '',
                });
            }
            this.selectTab = this.tabs[0];
        },
    },
    created() {
        this.initTabs();
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

    &[theme='dark'] {
        background-color: #000000;
    }
}
</style>
